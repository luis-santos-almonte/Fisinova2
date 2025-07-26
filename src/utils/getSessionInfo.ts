export const getSessionInfo = () => {
  const userStored = localStorage.getItem('sessionUser')

  return userStored ? JSON.parse(userStored) : null
}
