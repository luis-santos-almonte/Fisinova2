import { type ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { PATH_LOGIN } from './PathsRoutes'
import { getSessionInfo } from '../utils/getSessionInfo'
import CustomAppShell from '../layout/app-shell/CustomAppShell'

interface ProtectedRoutesProps {
  children: ReactNode
}

function ProtectedRoutes({ children }: ProtectedRoutesProps) {
  const isLogged = getSessionInfo()

  return !isLogged ? (
    <Navigate to={PATH_LOGIN} replace />
  ) : (
    <CustomAppShell>{children}</CustomAppShell>
  )
}

export default ProtectedRoutes
