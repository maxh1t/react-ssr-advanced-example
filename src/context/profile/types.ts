import { Profile } from '@/shared'

export type ProfileContextState = {
  profile: Profile | null
  setProfile: (profile: Profile | null) => void
}
