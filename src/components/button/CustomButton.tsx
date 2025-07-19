import { Button, type ButtonProps } from '@mantine/core'

type CustomButtonProps = ButtonProps & {
  type?: 'button' | 'submit' | 'reset'
}

export default function CustomButton({
  variant = 'filled',
  radius = 'lg',
  size = 'sm',
  type = 'button',
  ...props
}: CustomButtonProps) {
  return (
    <Button
      type={type}
      style={{ margin: '7px' }}
      variant={variant}
      radius={radius}
      size={size}
      {...props}
    />
  )
}
