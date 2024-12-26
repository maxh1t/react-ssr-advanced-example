import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'

import { WINDOW_INITIAL_DATA_KEY } from '@/shared'

import { App } from './components/App'

import './index.css'

hydrateRoot(
  document.getElementById('root')!,
  <StrictMode>
    <BrowserRouter>
      <App initialData={window?.[WINDOW_INITIAL_DATA_KEY]} />
    </BrowserRouter>
  </StrictMode>,
)
