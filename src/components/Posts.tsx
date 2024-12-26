import { useEffect, useState } from 'react'

import { API_URL } from '../constants'
import { useProfileContext } from '../context/profile'

type Post = {
  id: string
  userId: string
  title: string
  body: string
}

export default function Posts() {
  const { profile } = useProfileContext()
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    ;(async () => {
      setLoading(true)
      try {
        const response = await fetch(`${API_URL}/posts?userId=${profile?.id}`)
        const data: Post[] = await response.json()
        setPosts(data)
      } finally {
        setLoading(false)
      }
    })()
  }, [profile])

  return (
    <div className='page'>
      <h2 className='page-title'>Posts</h2>
      <div className='page-content'>
        {loading ? (
          <div className='loading'>Loading...</div>
        ) : (
          <div className='posts'>
            {posts.map((post) => (
              <div className='post' key={post.id}>
                <h4>{post.title}</h4>
                <p>{post.body}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
