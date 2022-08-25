import { THEME_TYPE } from "../config/constants"
import light from "./light"
import dark from "./dark"

const theme = {
  [THEME_TYPE.LIGHT]: light,
  [THEME_TYPE.DARK]: dark,
}

export default theme
