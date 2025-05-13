import { Button } from '@mantine/core'
import { useTheme } from './store'

function App() {
  const { colorScheme, setColorScheme } = useTheme()
  return (
    <>
      <Button
        onClick={() =>
          setColorScheme(colorScheme === 'light' ? 'dark' : 'light')
        }
      >
        Cambiar a modo {colorScheme === 'light' ? 'oscuro' : 'claro'}
      </Button>
    </>
  )
}

export default App
