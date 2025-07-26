import type { Rule, RuleObject } from 'antd/es/form'

type RuleType = RuleObject['type']

interface RuleOptions {
  required?: boolean
  min?: number
  max?: number
  maxLength?: number
  label?: string
  type?: RuleType
}

export const generateValidationRules = ({
  required,
  min,
  max,
  maxLength,
  label = 'Este campo',
  type = 'string',
}: RuleOptions): Rule[] => {
  const rules: Rule[] = []

  if (required) {
    rules.push({ required: true, message: `${label} es requerido` })
  }

  if (min !== undefined) {
    rules.push({
      type,
      min,
      message: `${label} debe tener al menos: ${min} caracteres`,
    })
  }

  if (max !== undefined) {
    rules.push({
      type,
      max,
      message: `${label} debe tener como máximo: ${max} caracteres`,
    })
  }

  if (maxLength !== undefined) {
    rules.push({
      max: maxLength,
      message: `${label} debe tener como máximo: ${maxLength} caracteres`,
    })
  }

  return rules
}
