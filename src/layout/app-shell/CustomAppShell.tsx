import { AppShell, Burger } from '@mantine/core'
import Header from '../../components/header/Header'
import { useDisclosure } from '@mantine/hooks'
import type { ReactNode } from 'react'

interface CustomAppShellProps {
  children: ReactNode
}
export default function CustomAppShell({ children }: CustomAppShellProps) {
  const [opened, { toggle }] = useDisclosure()
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 200,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
    >
      <AppShell.Header>
        <>
          <Header />
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        </>
      </AppShell.Header>
      <AppShell.Navbar>Navbar</AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  )
}
