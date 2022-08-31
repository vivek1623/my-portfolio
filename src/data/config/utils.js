import { LOCAL_STORAGE } from "./constants"

const s4 = () =>
  Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1)

export const uniqueId = () => {
  let time = new Date().getTime()
  return `${time}${s4()}${s4()}${s4()}`
}

export const log = (...arg) => {
  if (process.env.NODE_ENV !== "production") console.log(...arg)
}

export const clearAllDataFromLocalStorage = () => {
  localStorage.removeItem(LOCAL_STORAGE.PRIMARY)
  localStorage.removeItem(LOCAL_STORAGE.SECONDARY)
  localStorage.removeItem(LOCAL_STORAGE.THEME)
}

export const getDataFromLocalStorage = (key, defaultValue) => {
  const dataStr = localStorage.getItem(key)
  try {
    if (dataStr && dataStr !== undefined) {
      const data = JSON.parse(dataStr)
      if (!(data.expiry && data.value)) {
        clearAllDataFromLocalStorage()
        return defaultValue
      }
      if (new Date().getTime() > data.expiry) {
        localStorage.removeItem(key)
        return defaultValue
      }
      return data.value
    }
    return defaultValue
  } catch (error) {
    log("ERROR", error)
    clearAllDataFromLocalStorage()
    return defaultValue
  }
}

export const setDataInLocalStorage = (key, value, ttl = 3600000) => {
  const data = {
    value,
    expiry: new Date().getTime() + ttl,
  }
  const json_data = JSON.stringify(data)
  localStorage.setItem(key, json_data)
}

export const preventDefault = (event) => event.preventDefault()
