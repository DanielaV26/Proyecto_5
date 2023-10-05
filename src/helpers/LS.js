

export const saveToLS = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data))
  return (`${key} guardado exitosamente en localStorage`)
}

export const getFromLS = (key) => {
  const fromLS = localStorage.getItem(key)
  return JSON.parse(fromLS)
}