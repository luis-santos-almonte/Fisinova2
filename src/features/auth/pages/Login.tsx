import { Container, Paper, Title } from '@mantine/core'
import classes from '../styles/Auth.module.css'
import logo from '../../../assets/ico.png'
import CustomButton from '../../../components/button/CustomButton'
import { CustomForm } from '../../../components/forms/CustomForm'
import { CustomInput } from '../../../components/inputs/CustomInput'
import { useCustomMutation } from '../../../hooks/UseCustomMutation'
import auth from '../services/auth'
import { showNotification } from '../../../components/notification/showNotification'
import { useNavigate } from 'react-router-dom'
import { PATH_MAIN } from '../../../routes/PathsRoutes'

export default function Login() {
  const navigate = useNavigate()

  const { mutate: loginUser, isPending } = useCustomMutation({
    execute: auth.login,
    onSuccess: () => {
      navigate(PATH_MAIN)
    },
    onError: (err) => {
      console.log(err)
      showNotification({
        type: 'error',
        message: `${err.response.data.message}`,
      })
    },
  })

  return (
    <Container size={420} my={40}>
      <Title ta="center" className={classes.title}>
        <img width={'25%'} src={logo} />
      </Title>
      <Title ta="center" className={classes.title}>
        FISINOVA
      </Title>
      <Paper withBorder shadow="sm" p={22} mt={30} radius="md">
        <CustomForm
          validationSchema={{
            email: {
              label: 'Correo',
              rules: {
                required: true,
              },
            },
            password: {
              label: 'Contraseña',
              rules: {
                required: true,
                minLength: 4,
              },
            },
          }}
          onSubmit={(values) => loginUser(values)}
        >
          <CustomInput
            name="email"
            placeholder="Tu correo aqui"
            label="Correo"
            type="email"
            rules={{
              required: true,
            }}
          />
          <CustomInput
            name="password"
            placeholder="Tu contraseña aqui"
            label="Contraseña"
            type="password"
            rules={{
              required: true,
            }}
          />
          <CustomButton
            disabled={isPending}
            fullWidth
            mt="xl"
            radius="md"
            type="submit"
          >
            Iniciar Sesión
          </CustomButton>
        </CustomForm>
      </Paper>
    </Container>
  )
}
