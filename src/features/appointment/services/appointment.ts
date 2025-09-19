import serverCore from "../../../interceptors/axiosInstance";
import type {
  CreateAppointmentRequest,
  AppointmentFilters,
} from "../models/appointment";

class AppointmentService {
  async getAppointments(filters: AppointmentFilters = {}) {
    const params = new URLSearchParams();

    Object.entries(filters).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== "") {
        params.append(key, value.toString());
      }
    });

    const res = await serverCore.get(`/appointments?${params.toString()}`);
    return res.data;
  }

  async getAppointment(id: number) {
    const res = await serverCore.get(`/appointments/${id}`);
    return res.data;
  }

  async createAppointment(data: CreateAppointmentRequest) {
    const res = await serverCore.post("/appointments", data);
    return res.data;
  }

  async updateAppointment(id: number, data: Partial<CreateAppointmentRequest>) {
    const res = await serverCore.put(`/appointments/${id}`, data);
    return res.data;
  }

  async deleteAppointment(id: number) {
    const res = await serverCore.delete(`/appointments/${id}`);
    return res.data;
  }

  // Obtener empleados para el select
  async getEmployees() {
    const res = await serverCore.get("/employees");
    return res.data;
  }

  // Obtener pacientes para el select (básico)
  async getPatients(search?: string) {
    const params = search ? `?search=${search}` : "";
    const res = await serverCore.get(`/patients${params}`);
    return res.data;
  }
}

export default new AppointmentService();
