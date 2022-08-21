import { lazy, Suspense, useState } from "react"
import { Routes, Route, BrowserRouter as Router } from "react-router-dom"
import {
  makeStyles,
  ThemeProvider,
  createTheme,
} from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import Box from "@material-ui/core/Box"

import { LOCAL_STORAGE, ROUTE_PATH } from "../data/config/constants"
import { getDataFromLocalStorage } from "../data/config/utils"

import light from "../data/theme/light"
import dark from "../data/theme/dark"

const Home = lazy(() => import("../App/Home"))
const About = lazy(() => import("../App/About"))
const Portfolio = lazy(() => import("../App/Portfolio"))
const PageNotFound = lazy(() => import("../components/PageNotFound"))

const useStyles = makeStyles((theme) => ({
  appContainer: {
    minHeight: "100vh",
  },
}))

const isDarkTheme = getDataFromLocalStorage(LOCAL_STORAGE.IS_DARK_THEME, false)

const App = () => {
  const [darkTheme, setDarkTheme] = useState(isDarkTheme)
  const classes = useStyles()
  const theme = createTheme(darkTheme ? dark : light)
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className={classes.appContainer}>
        <Suspense fallback={null}>
          <Router>
            <Routes>
              <Route index path={ROUTE_PATH.HOME} element={<Home/>} />
              <Route path={ROUTE_PATH.PORTFOLIO} element={<Portfolio/>} />
              <Route path={ROUTE_PATH.ABOUT} element={<About/>} />
              <Route path="*" element={<PageNotFound/>} />
            </Routes>
          </Router>
        </Suspense>
      </Box>
    </ThemeProvider>
  )
}

export default App
