import { Transform } from 'node:stream'

import { Request, Response, NextFunction } from 'express'

import { InitialData, Render } from '@/shared'

import { ABORT_DELAY, API_URL, HTML_KEY } from './constants'
import { applyInitialData } from './lib/applyInitialData'
import { getProfile } from './lib/getProfile'

export type StreamContentArgs = {
  render: Render
  html: string
  req: Request
  res: Response
  next: NextFunction
}

export async function streamContent({ render, html, res, req }: StreamContentArgs) {
  const profile = await getProfile()

  const initialData: InitialData = { profile, env: { API_URL } }
  html = applyInitialData({ html, initialData })

  let renderFailed = false

  const { pipe, abort } = render({
    url: req.url,
    initialData,
    options: {
      onShellError() {
        res.status(500).set({ 'Content-Type': 'text/html' }).send('<pre>Something went wrong</pre>')
      },
      onShellReady() {
        res.status(renderFailed ? 500 : 200).set({ 'Content-Type': 'text/html' })

        const [htmlStart, htmlEnd] = html.split(HTML_KEY)
        res.write(htmlStart)

        const transformStream = new Transform({
          transform(chunk, encoding, callback) {
            res.write(chunk, encoding)
            callback()
          },
        })

        transformStream.on('finish', () => {
          res.end(htmlEnd)
        })

        pipe(transformStream)
      },
      onError(error) {
        renderFailed = true
        console.error((error as Error).stack)
      },
    },
  })

  setTimeout(abort, ABORT_DELAY)
}
