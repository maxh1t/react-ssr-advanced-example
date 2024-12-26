import fs from 'fs'
import path from 'path'

import compression from 'compression'
import { Application } from 'express'
import sirv from 'sirv'

import { StreamContentArgs } from './streamContent'

const CLIENT_PATH = path.resolve(process.cwd(), 'dist/client')
const HTML_PATH = path.resolve(process.cwd(), 'dist/client/index.html')
const ENTRY_SERVER_PATH = path.resolve(process.cwd(), 'dist/ssr/entry-server.js')

export async function setupProd(app: Application, streamContent: (args: StreamContentArgs) => void) {
  app.use(compression())
  app.use(sirv(CLIENT_PATH, { extensions: [] }))

  app.get('*', async (req, res, next) => {
    try {
      const html = fs.readFileSync(HTML_PATH, 'utf-8')

      const { render } = await import(ENTRY_SERVER_PATH)

      streamContent({ render, html, req, res, next })
    } catch (e) {
      console.error((e as Error).stack)
      next(e)
    }
  })
}
