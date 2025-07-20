import { Container, Group, Text, Title } from '@mantine/core'
import classes from './NotFound.module.css'
import CustomButton from '../../components/button/CustomButton'
import { useNavigate } from 'react-router-dom'
import { PATH_MAIN } from '../../routes/PathsRoutes'

export function NotFoundPage() {
  const navigate = useNavigate()
  return (
    <div className={classes.root}>
      <Container>
        <div className={classes.label}>404</div>
        <Title className={classes.title}>
          Página no encontrada | FISINOVA WEB
        </Title>
        <Text size="lg" ta="center" className={classes.description}>
          Lo sentimos, no pudimos encontrar la página que estás buscando. Es
          posible que el enlace esté roto o que el contenido haya sido movido.
        </Text>
        <Group justify="center">
          <CustomButton
            onClick={() => navigate(PATH_MAIN, { replace: true })}
            variant="white"
            size="md"
          >
            Vamos al inicio
          </CustomButton>
        </Group>
      </Container>
    </div>
  )
}
