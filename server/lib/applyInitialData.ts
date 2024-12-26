import { InitialData, WINDOW_INITIAL_DATA_KEY } from '@/shared'

import { HTML_KEY } from '../constants'

type Args = {
  html: string
  initialData: InitialData
}

export function applyInitialData({ html, initialData }: Args): string {
  return html.replace(
    HTML_KEY,
    `<script>window.${WINDOW_INITIAL_DATA_KEY} = ${JSON.stringify(initialData)}</script>${HTML_KEY}`,
  )
}
