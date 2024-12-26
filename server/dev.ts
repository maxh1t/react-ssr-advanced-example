import fs from 'fs'
import path from 'path'

import { Application } from 'express'

import { StreamContentArgs } from './streamContent'

const HTML_PATH = path.resolve(process.cwd(), 'index.html')
const ENTRY_SERVER_PATH = path.resolve(process.cwd(), 'src/entry-server.tsx')

export async function setupDev(app: Application, streamContent: (args: StreamContentArgs) => void) {
  const vite = await (
    await import('vite')
  ).createServer({
    root: process.cwd(),
    server: { middlewareMode: true },
    appType: 'custom',
  })

  app.use(vite.middlewares)

  app.get('*', async (req, res, next) => {
    try {
      let html = fs.readFileSync(HTML_PATH, 'utf-8')
      html = await vite.transformIndexHtml(req.originalUrl, html)

      const { render } = await vite.ssrLoadModule(ENTRY_SERVER_PATH)

      streamContent({ render, html, req, res, next })
    } catch (e) {
      vite.ssrFixStacktrace(e as Error)
      console.error((e as Error).stack)
      next(e)
    }
  })
}
