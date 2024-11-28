import { createContext, useState } from 'react'

export const NotificationContext = createContext(null)

export const NotificationProvider = ({ children }) => {
  const [notification, setNotification] = useState(null)
  const [notificationVariant, setNotificationVariant] = useState('primary')

  const handleNotification = (e, variant = 'primary') => {
    setNotificationVariant(variant)
    setNotification(e)
    setTimeout(() => setNotification(null), 3000)
  }

  return (
    <NotificationContext.Provider
      value={{
        notification,
        setNotification,
        notificationVariant,
        setNotificationVariant,
        handleNotification,
      }}
    >
      {children}
    </NotificationContext.Provider>
  )
}
