import { createContext, useContext } from 'react'
import { type UseFormReturnType } from '@mantine/form'

export const FormContext = createContext<UseFormReturnType<any> | null>(null)

export const useCustomFormContext = () => {
  const ctx = useContext(FormContext)
  if (!ctx)
    throw new Error('useCustomFormContext debe usarse dentro de <CustomForm>')
  return ctx
}
