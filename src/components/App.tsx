import { lazy } from 'react'
import { Route, Routes } from 'react-router'

import { InitialData } from '@/shared'

import { ROUTES } from '../constants'
import { ProfileProvider } from '../context/profile'

import Home from './Home'
import { Layout } from './Layout'

const Posts = lazy(() => import('./Posts'))
const Todos = lazy(() => import('./Todos'))
const Albums = lazy(() => import('./Albums'))

type AppProps = {
  initialData?: InitialData
}

export function App({ initialData }: AppProps) {
  return (
    <ProfileProvider defaultProfile={initialData?.profile}>
      <Routes>
        <Route element={<Layout />}>
          <Route path={ROUTES.home} element={<Home />} />
          <Route path={ROUTES.posts} element={<Posts />} />
          <Route path={ROUTES.albums} element={<Albums />} />
          <Route path={ROUTES.todos} element={<Todos />} />
        </Route>
      </Routes>
    </ProfileProvider>
  )
}
