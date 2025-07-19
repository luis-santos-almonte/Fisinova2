import { notifications } from '@mantine/notifications'
import {
  IconCheck,
  IconX,
  IconInfoCircle,
  IconAlertTriangle,
} from '@tabler/icons-react'
import '@mantine/notifications/styles.css'

type NotificationType = 'success' | 'error' | 'info' | 'warning'

interface ShowNotificationProps {
  type: NotificationType
  message: string
  title?: string
}

export function showNotification({
  type,
  message,
  title,
}: ShowNotificationProps) {
  const config = {
    success: {
      color: 'green',
      icon: <IconCheck size="1.2rem" />,
      title: title ?? 'Éxito',
    },
    error: {
      color: 'red',
      icon: <IconX size="1.2rem" />,
      title: title ?? 'Error',
    },
    info: {
      color: 'blue',
      icon: <IconInfoCircle size="1.2rem" />,
      title: title ?? 'Información',
    },
    warning: {
      color: 'yellow',
      icon: <IconAlertTriangle size="1.2rem" />,
      title: title ?? 'Advertencia',
    },
  }

  const selected = config[type]

  notifications.show({
    title: selected.title,
    message,
    color: selected.color,
    icon: selected.icon,
  })
}
