import { Menu } from 'antd'
import { administracion } from '../../features/administrator/menu/administration'
import { useNavigate } from 'react-router-dom'
import type { MenuProps } from 'antd'
import { patient } from '../../features/patient/menu/patient'
import { filterMenuItemsByRole } from '../../utils/filterMenuByRol'
import { getSessionInfo } from '../../utils/getSessionInfo'
import type { AppMenuItem } from '../../utils/constants'

export const Navbar = () => {
  const navigate = useNavigate()

  const { rols } = getSessionInfo()
  const userRoles = rols || []

  const handleClick: MenuProps['onClick'] = (e) => {
    navigate(e.key)
  }

  const items: AppMenuItem[] = [administracion, patient]
  const filteredItems: AppMenuItem[] = filterMenuItemsByRole(
    items as never,
    userRoles
  )

  return (
    <Menu
      mode="inline"
      style={{ width: '100%' }}
      items={filteredItems}
      onClick={handleClick}
    />
  )
}
