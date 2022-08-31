import { cyan, purple } from "@mui/material/colors"

const dark = "#1f1f1f"

const theme = (primary = cyan["A400"], secondary = purple["A700"]) => ({
  palette: {
    primary: {
      main: primary,
    },
    secondary: {
      main: secondary,
    },
    text: {
      primary: dark,
    },
  },
})

export default theme
