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
    <Container h={h} fluid={fluid} {...rest}>
      {children}
    </Container>
  )
}
