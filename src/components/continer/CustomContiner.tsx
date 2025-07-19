import { Container, type ContainerProps } from '@mantine/core'

type CustomContainerProps = ContainerProps & {
  children: React.ReactNode
}

export default function CustomContainer({
  children,
  fluid = true,
  h = '100vh',
  ...rest
}: CustomContainerProps) {
  return (
    <Container
      fluid={fluid}
      h={h}
      px="md"
      py="sm"
      style={{
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'auto',
        overflowX: 'hidden',
        boxSizing: 'border-box',
      }}
      {...rest}
    >
      {children}
    </Container>
  )
}
