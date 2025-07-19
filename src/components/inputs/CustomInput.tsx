/* eslint-disable */
//@ts-nocheck

import {
  TextInput,
  PasswordInput,
  NumberInput,
  Textarea,
  Select,
  Checkbox,
  type SelectProps,
} from '@mantine/core'
import { useCustomFormContext } from '../../store/form/FormContext'
import { type ValidationRules } from '../../utils/validationResolver'

type InputType =
  | 'text'
  | 'email'
  | 'password'
  | 'number'
  | 'textarea'
  | 'select'
  | 'checkbox'
  | 'date'

interface CustomInputProps {
  name: string
  label?: string
  type?: InputType
  data?: SelectProps['data']
  rules?: ValidationRules
  description?: string
  icon?: React.ReactNode
  placeholder?: string
  [key: string]: any // Soporte para props adicionales de Mantine
}

export function CustomInput({
  name,
  label,
  type = 'text',
  data,
  rules,
  description,
  icon,
  placeholder,
  ...rest
}: CustomInputProps) {
  const form = useCustomFormContext()

  const commonProps = {
    label,
    description,
    icon,
    placeholder,
    withAsterisk: rules?.required ? true : false,
    ...form.getInputProps(name),
    ...rest,
  }

  switch (type) {
    case 'text':
    case 'email':
      return <TextInput type={type} {...commonProps} />
    case 'password':
      return <PasswordInput {...commonProps} />
    case 'number':
      return <NumberInput {...commonProps} />
    case 'textarea':
      return <Textarea autosize minRows={2} {...commonProps} />
    case 'select':
      return <Select data={data || []} {...commonProps} />
    case 'checkbox':
      return <Checkbox {...commonProps} />
    default:
      return <TextInput {...commonProps} />
  }
}
