import { useContext } from "react"
import { Link as RouterLink, useLocation } from "react-router-dom"
import { useTheme } from "@mui/material/styles"
import Box from "@mui/material/Box"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Link from "@mui/material/Link"
import IconButton from "@mui/material/IconButton"
import Brightness4Icon from "@mui/icons-material/Brightness4"
import Brightness7Icon from "@mui/icons-material/Brightness7"

import { NAV_BAR, THEME_TYPE } from "../../data/config/constants"
import { ThemeModeContext } from "../../data/config/context"

const AppNavBar = () => {
  const theme = useTheme()
  const location = useLocation()
  const themeHandler = useContext(ThemeModeContext)
  console.log("location", location, theme.palette.mode)

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar sx={{ justifyContent: "center" }}>
        {NAV_BAR.map((item, index) => {
          if (item.logo)
            return (
              <Box key={index} component="nav" mx={{ xs: 1, sm: 6, md: 10 }}>
                <Link
                  component={RouterLink}
                  to={item.route}
                  color="inherit"
                  underline="none"
                >
                  <Box
                    component="img"
                    width={{ xs: "60px", md: "70px" }}
                    src={item.logo}
                    alt="Vv"
                  />
                </Link>
              </Box>
            )
          return (
            <Box
              key={index}
              component="nav"
              py={0.5}
              mx={{ xs: 2, sm: 4, md: 8 }}
              sx={
                location.pathname === item.route
                  ? {
                      transition: "all 250ms ease",
                      color: "primary.main",
                      borderBottom: 5,
                      borderImageSlice: 1,
                      borderImageSource: (theme) =>
                        `-webkit-linear-gradient(139deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                      "&:hover": {
                        opacity: 0.5,
                        transition: "all 250ms ease",
                        transform: "translateY(-3px)",
                      },
                    }
                  : {
                      "&:hover": {
                        opacity: 0.5,
                        transition: "all 250ms ease",
                        transform: "translateY(-3px)",
                      },
                    }
              }
            >
              <Link
                component={RouterLink}
                to={item.route}
                color="inherit"
                underline="none"
                fontWeight={500}
              >
                {item.name}
              </Link>
            </Box>
          )
        })}
        <Box
          component="nav"
          mx={{ xs: 2, sm: 4, md: 8 }}
          sx={{
            cursor: "pointer",
            transition: "all 250ms ease",
            "&:hover": {
              opacity: 0.5,
              transition: "all 250ms ease",
              transform: "translateY(-3px)",
            },
          }}
        >
          <IconButton color="inherit">
            {theme.palette.mode === THEME_TYPE.DARK ? (
              <Brightness7Icon
                color="warning"
                onClick={() => themeHandler.changeThemeMode(THEME_TYPE.LIGHT)}
              />
            ) : (
              <Brightness4Icon
                color="inherit"
                onClick={() => themeHandler.changeThemeMode(THEME_TYPE.DARK)}
              />
            )}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default AppNavBar
