import { PipeableStream, RenderToPipeableStreamOptions } from 'react-dom/server'

export type Profile = {
  id: string
  name: string
  username: string
  email: string
}

export type InitialData = {
  profile?: Profile
  env: {
    API_URL: string
  }
}

export type RenderArgs = {
  url: string
  initialData?: InitialData
  options?: RenderToPipeableStreamOptions
}

export type Render = (args: RenderArgs) => PipeableStream
