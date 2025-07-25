import {
  Burger,
  Flex,
  Group,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core'
import ThemeToggleButton from '../theme-toggle/ThemeToggleButton'
import { useCustomMutation } from '../../hooks/UseCustomMutation'
import auth from '../../features/auth/services/auth'
import { useNavigate } from 'react-router-dom'
import { PATH_LOGIN } from '../../routes/PathsRoutes'
import logo from '../../assets/ico.png'
import { getSessionInfo } from '../../utils/getSessionInfo'
import { CustomActionIcon } from '../ActionIcon/CustomActionIcon'

interface HeaderProps {
  toggleDesktop: () => void
  desktopOpened: boolean
  toggleMobile: () => void
  mobileOpened: boolean
}

export default function Header({
  toggleDesktop,
  desktopOpened,
  toggleMobile,
  mobileOpened,
}: HeaderProps) {
  const navigate = useNavigate()
  const theme = useMantineTheme()

  const { mutate: handledLogout, isPending } = useCustomMutation({
    execute: auth.logout,
    onSuccess: () => {
      navigate(PATH_LOGIN, { replace: true })
    },
  })
  const user = getSessionInfo()
  return (
    <Flex
      justify="space-between"
      align="center"
      px="md"
      py="sm"
      style={{ backgroundColor: theme.colors[theme.primaryColor][-1] }}
    >
      <Group>
        <Burger
          opened={mobileOpened}
          onClick={toggleMobile}
          hiddenFrom="sm"
          size="sm"
        />
        <Burger
          opened={desktopOpened}
          onClick={toggleDesktop}
          visibleFrom="sm"
          size="sm"
        />
        <img src={logo} alt="Logo" width="30" height="auto" />
        <Title style={{ marginLeft: '-20px', fontSize: '25px' }}>
          FISINOVA
        </Title>
      </Group>
      <Group>
        <Group>
          <CustomActionIcon variant="transparent" icon="user" />
          <Text style={{ marginLeft: '-15px' }}>{user?.name}</Text>
        </Group>
        <ThemeToggleButton />
        <CustomActionIcon
          icon="logout"
          loading={isPending}
          variant="transparent"
          title="Cerrar sesión"
          onClick={handledLogout}
        />
      </Group>
    </Flex>
  )
}
