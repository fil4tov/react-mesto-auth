export const setJWT = (jwt) => {
  localStorage.setItem('jwt', jwt)
}

export const getJWT = () => {
  return localStorage.getItem('jwt')
}

export const unsetJWT = () => {
  return localStorage.removeItem('jwt')
}