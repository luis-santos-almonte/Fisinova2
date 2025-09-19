import {
  Card,
  Table,
  Row,
  Col,
  Select,
  DatePicker,
  Space,
  Tag,
  Tooltip,
} from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  PlusOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { CustomButton } from "../../../components/Button/CustomButton";
import { CustomInput } from "../../../components/input/CustomInput";
import { CustomConfirm } from "../../../components/pop-confirm/CustomConfirm";
import { useCustomMutation } from "../../../hooks/UseCustomMutation";
import { showNotification } from "../../../utils/showNotification";
import appointmentService from "../services/appointment";
import type { Appointment, AppointmentFilters } from "../models/appointment";
import type { ColumnsType } from "antd/es/table";
import dayjs from "dayjs";

const { RangePicker } = DatePicker;
const { Option } = Select;

export const ConsultAppointments = () => {
  const navigate = useNavigate();
  const [filters, setFilters] = useState<AppointmentFilters>({
    paginate: 15,
  });

  const {
    data: appointmentsData,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["appointments", filters],
    queryFn: () => appointmentService.getAppointments(filters),
  });

  const { mutate: deleteAppointment } = useCustomMutation({
    execute: appointmentService.deleteAppointment,
    onSuccess: () => {
      showNotification({
        type: "success",
        message: "Cita eliminada exitosamente",
      });
      refetch();
    },
    onError: (err) => {
      showNotification({
        type: "error",
        message: err.response?.error?.message || "Error al eliminar la cita",
      });
    },
  });

  const getStatusColor = (status?: string) => {
    switch (status) {
      case "scheduled":
        return "blue";
      case "confirmed":
        return "green";
      case "in_progress":
        return "orange";
      case "completed":
        return "success";
      case "cancelled":
        return "error";
      case "no_show":
        return "warning";
      default:
        return "default";
    }
  };

  const getStatusText = (status?: string) => {
    switch (status) {
      case "scheduled":
        return "Programada";
      case "confirmed":
        return "Confirmada";
      case "in_progress":
        return "En Progreso";
      case "completed":
        return "Completada";
      case "cancelled":
        return "Cancelada";
      case "no_show":
        return "No Asistió";
      default:
        return status;
    }
  };

  const columns: ColumnsType<Appointment> = [
    {
      title: "Fecha",
      dataIndex: "appointment_date",
      key: "appointment_date",
      render: (date: string) => dayjs(date).format("DD/MM/YYYY"),
      sorter: true,
    },
    {
      title: "Hora",
      key: "time",
      render: (_, record) => (
        <span>
          {dayjs(record.start_time, "HH:mm").format("HH:mm")} -{" "}
          {dayjs(record.end_time, "HH:mm").format("HH:mm")}
        </span>
      ),
    },
    {
      title: "Profesional",
      key: "employee",
      render: (_, record) => (
        <span>
          {record.employee
            ? `${record.employee.firstname} ${record.employee.lastname}`
            : "Sin asignar"}
        </span>
      ),
    },
    {
      title: "Paciente",
      key: "patient",
      render: (_, record) => (
        <span>
          {record.patient
            ? `${record.patient.firstname} ${record.patient.lastname}`
            : record.dni
            ? `DNI: ${record.dni}`
            : "Paciente invitado"}
        </span>
      ),
    },
    {
      title: "Estado",
      dataIndex: "status",
      key: "status",
      render: (status: string) => (
        <Tag color={getStatusColor(status)}>{getStatusText(status)}</Tag>
      ),
    },
    {
      title: "Notas",
      dataIndex: "notes",
      key: "notes",
      ellipsis: true,
      render: (notes: string) =>
        notes ? (
          <Tooltip title={notes}>
            <span>
              {notes.length > 30 ? notes.substring(0, 30) + "..." : notes}
            </span>
          </Tooltip>
        ) : (
          "-"
        ),
    },
    {
      title: "Acciones",
      key: "actions",
      width: 120,
      render: (_, record) => (
        <Space>
          <Tooltip title="Ver detalles">
            <CustomButton
              type="text"
              icon={<EyeOutlined />}
              onClick={() => navigate(`/appointments/${record.id}`)}
            />
          </Tooltip>

          <Tooltip title="Editar">
            <CustomButton
              type="text"
              icon={<EditOutlined />}
              onClick={() => navigate(`/appointments/${record.id}/edit`)}
            />
          </Tooltip>

          <CustomConfirm
            title="¿Estás seguro de eliminar esta cita?"
            onConfirm={() => deleteAppointment(record.id!)}
          >
            <Tooltip title="Eliminar">
              <CustomButton type="text" danger icon={<DeleteOutlined />} />
            </Tooltip>
          </CustomConfirm>
        </Space>
      ),
    },
  ];

  const handleFilterChange = (key: keyof AppointmentFilters, value: any) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const clearFilters = () => {
    setFilters({ paginate: 15 });
  };

  return (
    <div>
      <Row gutter={[16, 16]}>
        {/* Filtros */}
        <Col span={24}>
          <Card title="Filtros de Búsqueda">
            <Row gutter={16} align="middle">
              <Col span={6}>
                <label>Rango de fechas:</label>
                <RangePicker
                  style={{ width: "100%" }}
                  onChange={(dates) => {
                    if (dates) {
                      handleFilterChange(
                        "start_date",
                        dates[0]?.format("YYYY-MM-DD")
                      );
                      handleFilterChange(
                        "end_date",
                        dates[1]?.format("YYYY-MM-DD")
                      );
                    } else {
                      handleFilterChange("start_date", undefined);
                      handleFilterChange("end_date", undefined);
                    }
                  }}
                />
              </Col>

              <Col span={4}>
                <label>Estado:</label>
                <Select
                  style={{ width: "100%" }}
                  placeholder="Seleccionar estado"
                  allowClear
                  onChange={(value) => handleFilterChange("status", value)}
                >
                  <Option value="scheduled">Programada</Option>
                  <Option value="confirmed">Confirmada</Option>
                  <Option value="in_progress">En Progreso</Option>
                  <Option value="completed">Completada</Option>
                  <Option value="cancelled">Cancelada</Option>
                  <Option value="no_show">No Asistió</Option>
                </Select>
              </Col>

              <Col span={4}>
                <label>Activo:</label>
                <Select
                  style={{ width: "100%" }}
                  placeholder="Estado"
                  allowClear
                  onChange={(value) => handleFilterChange("active", value)}
                >
                  <Option value="true">Activo</Option>
                  <Option value="false">Inactivo</Option>
                </Select>
              </Col>

              <Col span={6}>
                <Space>
                  <CustomButton type="default" onClick={clearFilters}>
                    Limpiar Filtros
                  </CustomButton>
                </Space>
              </Col>

              <Col span={4}>
                <CustomButton
                  type="primary"
                  icon={<PlusOutlined />}
                  onClick={() => navigate("/create-appointment")}
                >
                  Nueva Cita
                </CustomButton>
              </Col>
            </Row>
          </Card>
        </Col>

        {/* Tabla */}
        <Col span={24}>
          <Card title="Lista de Citas">
            <Table
              columns={columns}
              dataSource={appointmentsData?.data || []}
              loading={isLoading}
              rowKey="id"
              pagination={{
                current: 1,
                pageSize: filters.paginate || 15,
                total: appointmentsData?.data?.length || 0,
                showSizeChanger: true,
                showQuickJumper: true,
                showTotal: (total) => `Total: ${total} citas`,
                onChange: (page, size) => {
                  handleFilterChange("paginate", size);
                },
              }}
              scroll={{ x: 1000 }}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};
