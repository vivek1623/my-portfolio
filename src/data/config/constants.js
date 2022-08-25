export const ROUTE_PATH = {
  HOME: "/",
  PORTFOLIO: "/portfolio",
  ABOUT: "/about-me",
}

export const APP_PAGE = {
  HOME: "Home",
  PORTFOLIO: "Portfolio",
  ABOUT: "About me",
}

export const THEME_TYPE = {
  DARK: "dark",
  LIGHT: "light",
}

export const LOCAL_STORAGE = {
  THEME: "portfolioTheme",
}

export const NAV_BAR = [
  {
    name: APP_PAGE.HOME,
    route: ROUTE_PATH.HOME,
  },
  {
    name: APP_PAGE.ABOUT,
    route: ROUTE_PATH.ABOUT,
  },
  {
    logo: require("../assets/img/logo.png"),
    route: ROUTE_PATH.HOME,
  },
  {
    name: APP_PAGE.PORTFOLIO,
    route: ROUTE_PATH.PORTFOLIO,
  },
]
