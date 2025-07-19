/* eslint-disable */
//@ts-nocheck
import { useForm, type UseFormReturnType } from '@mantine/form'
import { type ReactNode } from 'react'
import {
  getMantineValidations,
  ValidationRules,
} from '../../utils/validationResolver'
import { FormContext } from '../../store/form/FormContext'

interface CustomFormProps<T extends Record<string, any>> {
  onSubmit?: (values: T) => void
  initialValues?: T
  children: ReactNode
  validationSchema?: Record<keyof T, { label: string; rules: ValidationRules }>
  readonly?: boolean
  disabled?: boolean
}

export function CustomForm<T extends Record<string, any>>({
  onSubmit,
  initialValues = {} as T,
  validationSchema = {},
  readonly = false,
  disabled = false,
  children,
}: CustomFormProps<T>) {
  const form = useForm<T>({
    initialValues,
    validateInputOnBlur: true,
    validate: (values) => {
      const errors: Partial<Record<keyof T, string>> = {}

      for (const key in validationSchema) {
        const { rules, label } = validationSchema[key]
        const validateFn = getMantineValidations(rules, label)
        const error = validateFn(values[key])
        if (error) errors[key] = error
      }

      return errors
    },
  })

  return (
    <FormContext.Provider value={form}>
      <form
        onSubmit={form.onSubmit((values) => {
          onSubmit?.(values)
        })}
      >
        {children}
      </form>
    </FormContext.Provider>
  )
}
