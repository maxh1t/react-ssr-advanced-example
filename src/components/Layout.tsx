import { Suspense } from 'react'
import { Link, Outlet } from 'react-router'

import { ROUTES } from '../constants'
import { useProfileContext } from '../context/profile'

export function Layout() {
  const { profile } = useProfileContext()

  return (
    <div className='layout'>
      <nav>
        <div>
          <Link to={ROUTES.home}>Home</Link>
          <Link to={ROUTES.posts}>Posts</Link>
          <Link to={ROUTES.albums}>Albums</Link>
          <Link to={ROUTES.todos}>Todos</Link>
        </div>
        <div className='settings'>{profile ? <span>Profile: {profile?.email}</span> : <div>Please Login</div>}</div>
      </nav>
      <main>
        <Suspense fallback={<div className='loading'>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  )
}
