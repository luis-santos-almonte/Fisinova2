export const getSessionInfo = () => {
  const stored = localStorage.getItem('sessionUser')
  try {
    return stored ? JSON.parse(stored) : null
  } catch (error) {
    console.error('Error parsing sessionUser:', error)
    return null
  }
}
