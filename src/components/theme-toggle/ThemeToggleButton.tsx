import { ActionIcon } from '@mantine/core'
import { IconSun, IconMoon } from '@tabler/icons-react'
import { useTheme } from '../../store'

const ThemeToggleButton = () => {
  //   const theme = useMantineTheme()
  const { colorScheme, toggleColorScheme } = useTheme()

  return (
    <ActionIcon
      variant="outline"
      color={colorScheme === 'dark' ? 'yellow' : 'blue'}
      onClick={() => toggleColorScheme()}
      title="Cambiar tema"
    >
      {colorScheme === 'dark' ? <IconSun size={18} /> : <IconMoon size={18} />}
    </ActionIcon>
  )
}

export default ThemeToggleButton
