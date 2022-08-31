import { useState, useEffect } from "react"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import ColorLensIcon from "@mui/icons-material/ColorLens"
import ClickAwayListener from "@mui/material/ClickAwayListener"
import Fade from "@mui/material/Fade"

import { APP_PAGE } from "../../data/config/constants"
import { HOME } from "../../data/config/info"
import { IMG_PROFILE } from "../../data/assets"

const Home = () => {
  const [openColorPicker, setOpenColorPicker] = useState(false)

  useEffect(() => {
    document.title = APP_PAGE.HOME
  }, [])

  return (
    <Box
      component="main"
      display="flex"
      flexDirection={{ xs: "column", md: "row" }}
      alignItems="center"
      justifyContent="center"
      minHeight="calc(100vh - 175px)"
    >
      <Box
        className="port-hoverableWrapper"
        width={{ xs: "35vh", md: "40vh" }}
        height={{ xs: "35vh", md: "40vh" }}
        maxWidth={{ xs: "300px", md: "350px" }}
        maxHeight={{ xs: "300px", md: "350px" }}
        borderRadius="15%"
        p={2}
        m={{ xs: 2, sm: 3, md: 4 }}
        boxShadow={5}
        position="relative"
        sx={{
          backgroundImage: (theme) =>
            `-webkit-linear-gradient(139deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
        }}
      >
        <ClickAwayListener
          mouseEvent="onMouseDown"
          touchEvent="onTouchStart"
          onClickAway={() => setOpenColorPicker(false)}
        >
          <Box className="">
            <Fade in={openColorPicker}>
              <Box
                className="port-animated port-fadeIn"
                position="absolute"
                bottom="101%"
                right={0}
                boxShadow={1}
                p={2}
                borderRadius={1}
                backgroundColor="background.paper"
                width={180}
              >
                <Box display="flex" justifyContent="space-between" mb={1}>
                  <Typography>Primary</Typography>
                  <Box
                    width={60}
                    height={25}
                    borderRadius={1}
                    backgroundColor="primary.main"
                    border={2}
                    sx={{ cursor: "pointer" }}
                  />
                </Box>
                <Box display="flex" justifyContent="space-between">
                  <Typography>Secondary</Typography>
                  <Box
                    width={60}
                    height={25}
                    borderRadius={1}
                    backgroundColor="secondary.main"
                    border={2}
                    sx={{ cursor: "pointer" }}
                  />
                </Box>
              </Box>
            </Fade>
            <IconButton
              size="small"
              className={`port-animated port-zoomIn ${
                openColorPicker ? "" : "port-onWrapperHoverHidden"
              }`}
              sx={{
                position: "absolute",
                right: 15,
                top: 15,
                color: "common.white",
              }}
              onClick={() => setOpenColorPicker((prev) => !prev)}
            >
              <ColorLensIcon />
            </IconButton>
          </Box>
        </ClickAwayListener>
        <Box
          alt="Profile Pic"
          component="img"
          src={IMG_PROFILE}
          width={1}
          borderRadius="15%"
        />
      </Box>

      <Box px={2} m={{ sm: 2 }}>
        <Typography variant="h3" fontWeight={600}>
          Hi, I'm{" "}
          <Typography
            variant="inherit"
            component="span"
            sx={{
              backgroundImage: (theme) =>
                `-webkit-linear-gradient(139deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {HOME.firstName}
          </Typography>
          <Typography
            variant="inherit"
            component="span"
            ml={1}
            sx={{
              animationName: "wave",
              animationDuration: "3s",
              animationIterationCount: "infinite",
              transformOrigin: "70% 70%",
              display: "inline-block",
              "@keyframes wave": {
                "0%": { transform: "rotate( 0.0deg)" },
                "10%": { transform: "rotate(20.0deg)" },
                "20%": { transform: "rotate(-10.0deg)" },
                "30%": { transform: "rotate(20.0deg)" },
                "40%": { transform: "rotate(-10.0deg)" },
                "50%": { transform: "rotate(10.0deg)" },
                "60%": { transform: "rotate( 5.0deg)" },
                "100%": { transform: "rotate( 0.0deg)" },
              },
            }}
          >
            🤚
          </Typography>
        </Typography>
        <Typography variant="h4" fontWeight={600}>
          {HOME.subheading}
        </Typography>
        <Box p={2}>
          {HOME.bio.map((item, index) => (
            <Box
              key={index}
              fontSize="1rem"
              lineHeight={1.5}
              sx={{
                cursor: "default",
                "&:hover": {
                  opacity: 0.75,
                  transition: "all 250ms ease",
                  transform: "translateY(-3px)",
                },
              }}
            >
              <Box
                component={"span"}
                aria-label="cheese"
                role="img"
                mr={{ xs: "0.5rem", md: "1rem" }}
                fontSize={"1.5rem"}
              >
                {item.emoji}
              </Box>
              {item.text}
            </Box>
          ))}
        </Box>
        {HOME.socials.map((social, index) => (
          <IconButton
            key={index}
            aria-label={social.label}
            size="large"
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: "inherit",
            }}
          >
            {social.icon}
          </IconButton>
        ))}
      </Box>
    </Box>
  )
}

export default Home
