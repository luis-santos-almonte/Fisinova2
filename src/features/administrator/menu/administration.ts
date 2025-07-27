import { PATH_REGISTER_PERSONAL } from './path'

export const administracion = {
  key: 'admin',
  label: 'Administración',

  children: [
    {
      key: 'rols',
      label: 'Roles',
    },
    {
      key: 'personal',
      label: 'Personal',
      children: [{ key: PATH_REGISTER_PERSONAL, label: 'Crear Personal' }],
    },
  ],
}
