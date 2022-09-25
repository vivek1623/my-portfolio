import { lazy, Suspense, useState, useMemo } from "react"
import { Routes, Route, BrowserRouter as Router } from "react-router-dom"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import CircularProgress from "@mui/material/CircularProgress"
import Link from "@mui/material/Link"

import "./index.scss"

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
const primary = getDataFromLocalStorage(LOCAL_STORAGE.PRIMARY, undefined)
const secondary = getDataFromLocalStorage(LOCAL_STORAGE.SECONDARY, undefined)

const App = () => {
  const [themeMode, setThemeMode] = useState(themeType)
  const [primaryColor, setPrimaryColor] = useState(primary)
  const [secondaryColor, setSecondaryColor] = useState(secondary)

  const themeHandler = useMemo(
    () => ({
      changeThemeMode: (mode) => {
        if (mode) {
          setThemeMode(mode)
          setDataInLocalStorage(LOCAL_STORAGE.THEME, mode, 24 * 3600 * 1000)
        }
      },
      changePrimaryColor: (color) => {
        if (color) {
          setPrimaryColor(color)
          setDataInLocalStorage(LOCAL_STORAGE.PRIMARY, color)
        }
      },
      changeSecondaryColor: (color) => {
        if (color) {
          setSecondaryColor(color)
          setDataInLocalStorage(LOCAL_STORAGE.SECONDARY, color)
        }
      },
    }),
    []
  )
  const theme = useMemo(
    () => createTheme(themeConfig[themeMode](primaryColor, secondaryColor)),
    [themeMode, primaryColor, secondaryColor]
  )

  return (
    <ThemeModeContext.Provider value={themeHandler}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Box display="flex" flexDirection="column" minHeight="100vh">
            <AppNavbar />
            <Box flexGrow={1} position="relative">
              <Suspense
                fallback={
                  <Box
                    p={10}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    position="absolute"
                    top="0"
                    bottom="0"
                    left="0"
                    right="0"
                  >
                    <CircularProgress />
                  </Box>
                }
              >
                <Routes>
                  <Route index path={ROUTE_PATH.HOME} element={<Home />} />
                  <Route path={ROUTE_PATH.PORTFOLIO} element={<Portfolio />} />
                  <Route path={ROUTE_PATH.ABOUT} element={<About />} />
                  <Route path="*" element={<PageNotFound />} />
                </Routes>
              </Suspense>
            </Box>
            <Typography
              align="center"
              mt={1}
              sx={{ color: "text.secondary", fontSize: "0.75rem" }}
            >
              created with &hearts; by{" "}
              <Link href="#" color="inherit" underline="hover">
                Vivek Vaibhav
              </Link>
            </Typography>
            <Typography
              align="center"
              mb={1}
              sx={{ color: "text.secondary", fontSize: "0.6rem" }}
            >
              {`🚀 version ${process.env.REACT_APP_VERSION}`}
            </Typography>
          </Box>
        </Router>
      </ThemeProvider>
    </ThemeModeContext.Provider>
  )
}

export default App
