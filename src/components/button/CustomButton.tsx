import { Button, type ButtonProps } from '@mantine/core'

export default function CustomButton({
  variant = 'filled',
  radius = 'lg',
  size = 'sm',
  ...props
}: ButtonProps) {
  return (
    <Button
      style={{ margin: '7px' }}
      variant={variant}
      radius={radius}
      size={size}
      {...props}
    />
  )
}
