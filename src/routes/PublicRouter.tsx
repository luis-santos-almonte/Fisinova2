import { type ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { PATH_MAIN } from './PathsRoutes'
import { getSessionInfo } from '../utils/getSessionInfo'

interface PublicRouterProps {
  children: ReactNode
}

function PublicRouter({ children }: PublicRouterProps) {
  const isLogged = getSessionInfo()

  return isLogged ? <Navigate to={PATH_MAIN} /> : children
}

export default PublicRouter
