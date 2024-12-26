import express from 'express'

import { PROD, APP_PORT } from './constants'
import { setupDev } from './dev'
import { setupProd } from './prod'
import { streamContent } from './streamContent'

export async function createServer() {
  const app = express()

  if (PROD) {
    await setupProd(app, streamContent)
  } else {
    await setupDev(app, streamContent)
  }

  app.listen(APP_PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`http://localhost:${APP_PORT}`)
  })
}

createServer()
