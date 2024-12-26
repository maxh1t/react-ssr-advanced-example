import { PropsWithChildren, useState } from 'react'

import { Profile } from '@/shared'

import { ProfileContext } from './context'

type Props = PropsWithChildren & {
  defaultProfile?: Profile
}

export function Provider({ children, defaultProfile }: Props) {
  const [profile, setProfile] = useState<Profile | null>(defaultProfile || null)

  return <ProfileContext value={{ profile, setProfile }}>{children}</ProfileContext>
}
