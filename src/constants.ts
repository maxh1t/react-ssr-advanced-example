import { WINDOW_INITIAL_DATA_KEY } from '@/shared'

export const ROUTES = {
  home: '/',
  posts: '/posts',
  todos: '/todos',
  albums: '/albums',
}

export const SSR = import.meta.env.SSR

export const INITIAL_DATA = !SSR && window[WINDOW_INITIAL_DATA_KEY] ? window[WINDOW_INITIAL_DATA_KEY] : undefined
export const API_URL = INITIAL_DATA?.env.API_URL || ''
