import { Routes, Route, Navigate } from 'react-router-dom'
import { PATH_INICIAL, PATH_LOGIN, PATH_NOT_FOUND } from './PathsRoutes'
import Login from '../pages/login/Login'

export default function InterRoutes() {
  return (
    <Routes>
      <Route path={PATH_LOGIN} element={<Login />} />
      <Route
        path={PATH_INICIAL}
        element={<Navigate to={PATH_LOGIN} replace />}
      />
      <Route path={PATH_NOT_FOUND} element={<h1>Not Found Page</h1>} />
    </Routes>
  )
}
