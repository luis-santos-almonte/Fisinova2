export const getSessionInfo = () => {
  const userStored = localStorage.getItem('sessionUser')

  if (!userStored) return null

  try {
    const user = JSON.parse(userStored)
    
    return {
      ...user,
      roles: user.roles || [],
      rols: user.rols || [],
    }
  } catch (error) {
    console.error('Error parsing session data:', error)
    localStorage.removeItem('sessionUser')
    return null
  }
}