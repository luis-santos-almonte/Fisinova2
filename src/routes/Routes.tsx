import { Routes, Route, Navigate } from 'react-router-dom'
import {
  PATH_INICIAL,
  PATH_LOGIN,
  PATH_MAIN,
  PATH_NOT_FOUND,
} from './PathsRoutes'
import Login from '../features/auth/pages/Login'
import PublicRouter from './PublicRouter'
import ProtectedRoutes from './ProtectedRoutes'

export default function InterRoutes() {
  return (
    <Routes>
      <Route
        path={PATH_LOGIN}
        element={
          <PublicRouter>
            <Login />
          </PublicRouter>
        }
      />
      <Route
        path={PATH_INICIAL}
        element={<Navigate to={PATH_LOGIN} replace />}
      />
      <Route
        path={PATH_MAIN}
        element={<ProtectedRoutes>Holaa desde aqui</ProtectedRoutes>}
      />
      <Route path={PATH_NOT_FOUND} element={<h1>Not Found Page</h1>} />
    </Routes>
  )
}
