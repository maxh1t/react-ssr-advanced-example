import { InitialData, WINDOW_INITIAL_DATA_KEY } from '@/shared'

export {}

declare global {
  interface Window {
    [WINDOW_INITIAL_DATA_KEY]?: InitialData
  }
}
