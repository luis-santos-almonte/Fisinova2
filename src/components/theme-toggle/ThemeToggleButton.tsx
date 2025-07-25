import { useTheme } from '../../store'
import { CustomActionIcon } from '../ActionIcon/CustomActionIcon'

const ThemeToggleButton = () => {
  const { colorScheme, toggleColorScheme } = useTheme()

  return (
    <CustomActionIcon
      icon={colorScheme === 'dark' ? 'sun' : 'moon'}
      variant="transparent"
      onClick={toggleColorScheme}
      title="Cambiar tema"
      size={22}
    />
  )
}

export default ThemeToggleButton
