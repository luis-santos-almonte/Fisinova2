import { Flex, Grid, useMantineTheme } from '@mantine/core'
import CustomButton from '../../components/button/CustomButton'
import CustomInput from '../../components/inputs/CustomInput'
import logo from '@assets/Logo-white.png'
import ThemeToggleButton from '../../components/theme-toggle/ThemeToggleButton'

export default function Login() {
  const theme = useMantineTheme()
  return (
    <Grid w="100%" h="100dvh" m={0} p={0} style={{ overflow: 'hidden' }}>
      <Grid.Col
        style={{ backgroundColor: theme.colors[theme.primaryColor][6] }}
        span={{ base: 12, md: 6 }}
      >
        <ThemeToggleButton /> {/*Quitar este boton cuando (solo para prueba)*/}
        <Flex mih={'95vh'} justify="center" align="center">
          <img width={'25%'} src={logo} />
        </Flex>
      </Grid.Col>

      <Grid.Col
        span={{ base: 12, md: 6 }}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Flex direction={'column'} align="center" gap="sm" w="100%">
          <CustomInput
            label="Usuario"
            name="USER"
            placeholder="Escribe tu nombre de usuario aqui..."
            w="70%"
          />
          <CustomInput
            type="password"
            label="Contraseña"
            name="PASSWORD"
            placeholder="Escribe tu contraseña aqui..."
            w="70%"
          />
          <Flex direction="row" justify="center" gap="sm" w="70%">
            <CustomButton variant="default" fullWidth>
              Cancelar
            </CustomButton>
            <CustomButton fullWidth>Iniciar Sesión</CustomButton>
          </Flex>
        </Flex>
      </Grid.Col>
    </Grid>
  )
}
