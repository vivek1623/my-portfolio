export const ROUTE_PATH = {
  HOME: "/",
  PORTFOLIO: "/projects",
  ABOUT: "/about-me",
}

export const APP_PAGE = {
  HOME: "Home",
  PORTFOLIO: "Portfolio",
  ABOUT: "About",
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
    logo: true,
    route: ROUTE_PATH.HOME,
  },
  {
    name: APP_PAGE.PORTFOLIO,
    route: ROUTE_PATH.PORTFOLIO,
  },
]
