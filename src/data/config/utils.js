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
  localStorage.removeItem(LOCAL_STORAGE.IS_DARK_THEME)
}

export const getDataFromLocalStorage = (key, defaultValue) => {
  const data = localStorage.getItem(key)
  return data && data !== undefined ? JSON.parse(data) : defaultValue
}

export const setDataInLocalStorage = (key, data) => {
  const json_data = JSON.stringify(data)
  localStorage.setItem(key, json_data)
}
