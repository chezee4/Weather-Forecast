export const formatDate = (date: Date) => {
  return date.toISOString().split('T')[0]
}

const processDataFromStorage = <T>(data: string): T | string => {
  try {
    const parsedData = JSON.parse(data)

    if (typeof parsedData === 'object' && parsedData !== null) {
      return parsedData
    }
  } catch {
    /* empty */
  }

  return data || ''
}

export const formatTimeForTimer = (milliseconds: number) => {
  const totalSeconds = Math.floor(milliseconds / 1000)
  const totalMinutes = Math.floor(totalSeconds / 60)
  const totalHours = Math.floor(totalMinutes / 60)

  const days = Math.floor(totalHours / 24)
  const hours = totalHours % 24
  const minutes = totalMinutes % 60
  const seconds = totalSeconds % 60

  return { days, hours, minutes, seconds }
}

export const getFromLocalStorage = <T = string>(key: string): T => {
  const data = localStorage.getItem(key) || ''

  return processDataFromStorage<T>(data) as T
}

export const setToLocalStorage = <T>(key: string, value: T): void => {
  localStorage.setItem(key, JSON.stringify(value))
}

export const getFromSessionStorage = <T = string>(key: string): T => {
  const data = sessionStorage.getItem(key) || ''

  return processDataFromStorage<T>(data) as T
}

export const setToSessionStorage = <T>(key: string, value: T): void => {
  sessionStorage.setItem(key, JSON.stringify(value))
}
