import { lazy, Suspense, useState, useMemo } from "react"
import { Routes, Route, BrowserRouter as Router } from "react-router-dom"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import Box from "@mui/material/Box"

import { LOCAL_STORAGE, THEME_TYPE, ROUTE_PATH } from "../data/config/constants"
import {
  getDataFromLocalStorage,
  setDataInLocalStorage,
} from "../data/config/utils"

import { ThemeModeContext } from "../data/config/context"
import themeConfig from "../data/theme"

import AppNavbar from "../components/AppNavbar"

const Home = lazy(() => import("../App/Home"))
const About = lazy(() => import("../App/About"))
const Portfolio = lazy(() => import("../App/Portfolio"))
const PageNotFound = lazy(() => import("../components/PageNotFound"))

const themeType = getDataFromLocalStorage(LOCAL_STORAGE.THEME, THEME_TYPE.LIGHT)

const App = () => {
  const [themeMode, setThemeMode] = useState(themeType)

  const themeHandler = useMemo(
    () => ({
      changeThemeMode: (mode) => {
        if (mode) {
          setThemeMode(mode)
          setDataInLocalStorage(LOCAL_STORAGE.THEME, mode)
        }
      },
    }),
    []
  )
  const theme = useMemo(() => createTheme(themeConfig[themeMode]), [themeMode])

  return (
    <ThemeModeContext.Provider value={themeHandler}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Router>
          <AppNavbar />
          <Suspense fallback={null}>
            <Box sx={{ my: 8 }}>
              <Routes>
                <Route index path={ROUTE_PATH.HOME} element={<Home />} />
                <Route path={ROUTE_PATH.PORTFOLIO} element={<Portfolio />} />
                <Route path={ROUTE_PATH.ABOUT} element={<About />} />
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </Box>
          </Suspense>
        </Router>
      </ThemeProvider>
    </ThemeModeContext.Provider>
  )
}

export default App
