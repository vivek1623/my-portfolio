import { cyan, deepPurple, yellow, blueGrey } from "@mui/material/colors"

const theme = (primary = cyan["A400"], secondary = deepPurple["A400"]) => ({
  palette: {
    mode: "dark",
    primary: {
      main: primary,
    },
    secondary: {
      main: secondary,
    },
    warning: {
      main: yellow["600"],
    },
    background: {
      default: blueGrey["900"],
    },
  },
})

export default theme
