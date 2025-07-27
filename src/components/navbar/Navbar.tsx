import { Menu } from 'antd'
import { administracion } from '../../features/administrator/menu/administration'
import { useNavigate } from 'react-router-dom'
import type { MenuProps } from 'antd'
import { patient } from '../../features/patient/menu/patient'

export const Navbar = () => {
  const navigate = useNavigate()

  const handleClick: MenuProps['onClick'] = (e) => {
    navigate(e.key)
  }

  const items = [administracion, patient]

  return (
    <Menu
      mode="inline"
      style={{ width: '100%' }}
      items={items}
      onClick={handleClick}
    />
  )
}
