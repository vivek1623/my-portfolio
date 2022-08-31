import { useContext, useState } from "react"
import { useTheme } from "@mui/material/styles"
import Box from "@mui/material/Box"
import { HexColorPicker } from "react-colorful"

import { ThemeModeContext } from "../../data/config/context"

const ThemeColorPicker = () => {
  const [control, setControl] = useState("primary")
  const theme = useTheme()
  const themeHandler = useContext(ThemeModeContext)

  const handleColorChange = (color) => {
    if (control === "primary") themeHandler.changePrimaryColor(color)
    else if (control === "secondary") themeHandler.changeSecondaryColor(color)
  }

  return (
    <>
      <HexColorPicker
        style={{ width: "100%" }}
        color={theme.palette[control].main}
        onChange={handleColorChange}
      />
      <Box display="flex" justifyContent="space-between" mt={1}>
        <Box
          width={0.45}
          height={25}
          borderRadius={1}
          backgroundColor="primary.main"
          border={2}
          sx={{ cursor: "pointer" }}
          onClick={() => setControl("primary")}
        />
        <Box
          width={0.45}
          height={25}
          borderRadius={1}
          backgroundColor="secondary.main"
          border={2}
          sx={{ cursor: "pointer" }}
          onClick={() => setControl("secondary")}
        />
      </Box>
    </>
  )
}

export default ThemeColorPicker
