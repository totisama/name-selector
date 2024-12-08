export const getFromLocalStorage = (key: string) => {
  const item = localStorage.getItem(key)
  return item ? JSON.parse(item) : null
}

export const setToLocalStorage = (
  key: string,
  value: string | number | string[]
) => {
  localStorage.setItem(key, JSON.stringify(value))
}

export const removeFromLocalStorage = (key: string) => {
  localStorage.removeItem(key)
}
