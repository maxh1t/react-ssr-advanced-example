import { Profile } from '@/shared'

import { API_URL } from '../constants'

export async function getProfile(): Promise<Profile | undefined> {
  try {
    const userId = Math.floor(Math.random() * 10) + 1

    const response = await fetch(`${API_URL}/users/${userId}`)
    const data = await response.json()

    return data as Profile
  } catch (e) {
    console.error(e)
  }
}
