// CustomActionIcon.tsx
import { ActionIcon } from '@mantine/core'
import type { ActionIconProps } from '@mantine/core'
import { iconRegistry, type IconKey } from './iconRegistry'

interface CustomActionIconProps extends Omit<ActionIconProps, 'children'> {
  icon: IconKey
  title?: string
  onClick?: () => void
}

export const CustomActionIcon = ({
  icon,
  title,
  onClick,
  ...props
}: CustomActionIconProps) => {
  const IconComponent = iconRegistry[icon]

  if (!IconComponent) {
    console.warn(`El ícono "${icon}" no está registrado en iconRegistry.`)
    return null
  }

  return (
    <ActionIcon {...props} title={title} onClick={onClick}>
      <IconComponent size={props.size ?? 20} />
    </ActionIcon>
  )
}
