import { TextInput, type TextInputProps } from '@mantine/core'

type varianTypeInput = 'text' | 'email' | 'password' | 'number' | 'tel'
interface CustomInputProps extends TextInputProps {
  type?: varianTypeInput
}

export default function CustomInput({
  radius = 'md',
  size = 'md',
  variant = 'default',
  type = 'text',
  ...props
}: CustomInputProps) {
  return (
    <TextInput
      radius={radius}
      size={size}
      variant={variant}
      type={type}
      {...props}
    />
  )
}
