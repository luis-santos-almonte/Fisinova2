import { ActionIcon, Flex, Group, Text, useMantineTheme } from '@mantine/core'
import { IconLogout, IconUser } from '@tabler/icons-react'
import ThemeToggleButton from '../theme-toggle/ThemeToggleButton'
import { useCustomMutation } from '../../hooks/UseCustomMutation'
import auth from '../../features/auth/services/auth'
import { useNavigate } from 'react-router-dom'
import { PATH_LOGIN } from '../../routes/PathsRoutes'

export default function Header() {
  const navigate = useNavigate()
  const theme = useMantineTheme()

  const { mutate: handledLogout } = useCustomMutation({
    execute: auth.logout,
    onSuccess: () => {
      navigate(PATH_LOGIN, { replace: true })
    },
  })
  return (
    <Flex
      justify="end"
      align="center"
      px="md"
      py="sm"
      style={{ backgroundColor: theme.colors[theme.primaryColor][-1] }}
    >
      <Group>
        <IconUser size={20} />
        <Text>User Name</Text>
        <ThemeToggleButton />
        <ActionIcon variant="transparent">
          <IconLogout onClick={() => handledLogout()} size={20} />
        </ActionIcon>
      </Group>
    </Flex>
  )
}
