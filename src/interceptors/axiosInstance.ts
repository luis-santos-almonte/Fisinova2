import axios from 'axios'
import { PATH_LOGIN } from '../routes/pathts'
import { showNotification } from '../utils/showNotification'

const serverCore = axios.create({
  baseURL: import.meta.env.VITE_SERVER_CORE_URL,
  withCredentials: true,
})

serverCore.interceptors.response.use(
  (res) => res,
  (err) => {
    console.log('🔍 Error interceptado:', {
      status: err.response?.status,
      url: err.config?.url,
      data: err.response?.data
    })

    if (err.response?.status === 401) {
      localStorage.removeItem('sessionUser')
      const currentPath = window.location.pathname
      if (currentPath !== PATH_LOGIN) {
        window.location.replace(PATH_LOGIN)
        showNotification({
          title: 'INFO',
          type: 'info',
          message: 'Sesión caducada',
        })
      }
    }
    return Promise.reject({ response: err.response.data, err })
  }
)

export default serverCore