import {
  IconLogout,
  IconEdit,
  IconTrash,
  IconUser,
  IconSun,
  IconMoon,
} from '@tabler/icons-react'

export const iconRegistry = {
  logout: IconLogout,
  edit: IconEdit,
  delete: IconTrash,
  user: IconUser,
  sun: IconSun,
  moon: IconMoon,
}

export type IconKey = keyof typeof iconRegistry
