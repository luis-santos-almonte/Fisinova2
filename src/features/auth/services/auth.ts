import fisinovaApi from '../../../interceptors/axiosInstance'
import type { AuthCredentials } from '../models/AuthCredentials'

class AuthService {
  async login(credentials: AuthCredentials) {
    const res = await fisinovaApi.post(`/login`, credentials)
    if (res.data) {
      localStorage.setItem('sessionUser', JSON.stringify(res?.data?.data?.user))
    }
    return res.data
  }

  async logout() {
    const res = await fisinovaApi.post(`/logout`)
    if (res.data) {
      localStorage.removeItem('sessionUser')
    }
    return res.data
  }

  async checkAuth() {
    const res = await fisinovaApi.get(`/user`)
    return res.data
  }
}

export default new AuthService()
