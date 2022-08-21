import { useState } from "react"
import {
  makeStyles,
  ThemeProvider,
  createTheme,
} from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import Paper from "@material-ui/core/Paper"

import { LOCAL_STORAGE } from "../data/config/constants"
import { getDataFromLocalStorage } from "../data/config/utils"

import light from "../data/theme/light"
import dark from "../data/theme/dark"

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
      <Paper className={classes.appContainer} elevation={0} square>
        hello
      </Paper>
    </ThemeProvider>
  )
}

export default App
