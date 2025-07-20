import { ActionIcon } from '@mantine/core'
import { IconSun, IconMoon } from '@tabler/icons-react'
import { useTheme } from '../../store'

const ThemeToggleButton = () => {
  const { colorScheme, toggleColorScheme } = useTheme()

  return (
    <ActionIcon
      variant="transparent"
      onClick={toggleColorScheme}
      title="Cambiar tema"
      size={18}
    >
      {colorScheme === 'dark' ? <IconSun /> : <IconMoon />}
    </ActionIcon>
  )
}

export default ThemeToggleButton
