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

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar sx={{ justifyContent: "center" }}>
        {NAV_BAR.map((item, index) => {
          if (item.logo)
            return (
              <Box
                key={index}
                component="nav"
                mx={{ xs: 1, sm: 6, md: 10 }}
                sx={{
                  transition: "all 250ms ease",
                  "&:hover": {
                    opacity: 0.5,
                    transition: "all 250ms ease",
                    transform: "translateY(-3px)",
                  },
                }}
              >
                <Link
                  component={RouterLink}
                  to={item.route}
                  color="inherit"
                  underline="none"
                  sx={{
                    fontSize: "3rem",
                    fontWeight: 600,
                    lineHeight: 1.2,
                  }}
                >
                  V
                </Link>
              </Box>
            )
          return (
            <Box
              key={index}
              component="nav"
              pt={1}
              pb={0.5}
              mx={{ xs: 1.5, sm: 4, md: 8 }}
              alignSelf="baseline"
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
          alignSelf="baseline"
          pt={1}
          mx={{ xs: 1.5, sm: 4, md: 8 }}
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
          {theme.palette.mode === THEME_TYPE.DARK ? (
            <IconButton
              color="inherit"
              onClick={() => themeHandler.changeThemeMode(THEME_TYPE.LIGHT)}
            >
              <Brightness7Icon color="warning" />
            </IconButton>
          ) : (
            <IconButton
              color="inherit"
              onClick={() => themeHandler.changeThemeMode(THEME_TYPE.DARK)}
            >
              <Brightness4Icon color="inherit" />
            </IconButton>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default AppNavBar
