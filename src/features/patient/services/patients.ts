import fisinovaApi from '../../../interceptors/axiosInstance'

class PacientesService {
  private baseUrl = '/patients'

  async get(params?: Record<string, any>) {
    const res = await fisinovaApi.get(this.baseUrl, { params })
    return res.data
  }

  async create(data: any) {
    const res = await fisinovaApi.post(this.baseUrl, data)
    return res.data
  }

  async update(id: string, data: any) {
    const res = await fisinovaApi.put(`${this.baseUrl}/${id}`, data)
    return res.data
  }
}

export default new PacientesService()
