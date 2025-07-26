import React from 'react'
import { Form, type FormItemProps } from 'antd'
import { generateValidationRules } from '../../utils/validationResolver'

interface CustomFormItemProps extends Omit<FormItemProps, 'rules'> {
  required?: boolean
  min?: number
  max?: number
  maxLength?: number
  rules?: FormItemProps['rules']
}

export const CustomFormItem: React.FC<CustomFormItemProps> = ({
  label,
  required,
  min,
  max,
  maxLength,
  rules,
  children,
  ...rest
}) => {
  const generatedRules = generateValidationRules({
    required,
    min,
    max,
    maxLength,
    label: label?.toString(),
  })

  return (
    <Form.Item
      label={label}
      {...rest}
      rules={rules && rules.length > 0 ? rules : generatedRules}
    >
      {children}
    </Form.Item>
  )
}
