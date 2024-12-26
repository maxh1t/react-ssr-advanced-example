import { renderToPipeableStream } from 'react-dom/server'
import { StaticRouter } from 'react-router'

import { Render } from '@/shared'

import { App } from './components/App'

export const render: Render = ({ url, initialData, options }) => {
  return renderToPipeableStream(
    <StaticRouter location={url}>
      <App initialData={initialData} />
    </StaticRouter>,
    options,
  )
}
