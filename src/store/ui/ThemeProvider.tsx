import type { ReactNode } from 'react'
import {
  MantineProvider,
  createTheme,
  localStorageColorSchemeManager,
  type MantineColorsTuple,
  type MantineThemeOverride,
} from '@mantine/core'

const customCyan: MantineColorsTuple = [
  '#e0fcff',
  '#bef7ff',
  '#9df1ff',
  '#7cecff',
  '#5be6ff',
  '#3ae0ff',
  '#20c7e6',
  '#169db3',
  '#0c7380',
  '#034a4e',
]

const customTheme: MantineThemeOverride = createTheme({
  fontFamily: 'Inter, sans-serif',
  primaryColor: 'cyan',
  headings: {
    fontFamily: 'Poppins, sans-serif',
    sizes: {
      h1: { fontSize: '2.5rem' },
      h2: { fontSize: '2rem' },
      h3: { fontSize: '1.5rem' },
      h4: { fontSize: '1.25rem' },
      h5: { fontSize: '1rem' },
      h6: { fontSize: '0.875rem' },
    },
  },
  colors: {
    cyan: customCyan,
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    xxl: '4rem',
  },
})

const colorSchemeManager = localStorageColorSchemeManager({
  key: 'my-app-color-scheme',
})

type Props = {
  children: ReactNode
}

export function ThemeProvider({ children }: Props) {
  return (
    <MantineProvider
      theme={customTheme}
      defaultColorScheme="auto"
      colorSchemeManager={colorSchemeManager}
    >
      {children}
    </MantineProvider>
  )
}
