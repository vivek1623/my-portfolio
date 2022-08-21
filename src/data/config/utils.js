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

export const checkDevice = {
  screenOrientation: function () {
    if (window.matchMedia("(orientation:landscape)").matches) {
      return "landscape"
    } else {
      return "portrait"
    }
  },
  screenType: function () {
    if (window.innerWidth <= 480) {
      return "xs"
    } else if (window.innerWidth <= 768) {
      return "sm"
    } else if (window.innerWidth <= 992) {
      return "md"
    } else if (window.innerWidth <= 1200) {
      return "lg"
    } else if (window.innerWidth <= 1600) {
      return "hd"
    } else if (window.innerWidth <= 2560) {
      return "fhd"
    } else {
      return "uhd"
    }
  },
  deviceStatus: function () {
    return {
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight,
      screenOrientation: this.screenOrientation(),
      screenType: this.screenType(),
    }
  },
}
