import { cyan, deepPurple, yellow, blueGrey } from "@mui/material/colors"

const theme = {
  palette: {
    mode: "dark",
    primary: {
      main: cyan["A400"],
    },
    secondary: {
      main: deepPurple["A400"],
    },
    warning: {
      main: yellow["600"],
    },
    background: {
      default: blueGrey["900"],
    },
  },
}

export default theme
