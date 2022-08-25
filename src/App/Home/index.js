import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import { INFO } from "../../data/config/constants"

import { IMG_PROFILE } from "../../data/assets"

const Home = () => {
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
        alt="Profile Pic"
        component="img"
        src={IMG_PROFILE}
        width={{ xs: "35vh", md: "40vh" }}
        height={{ xs: "35vh", md: "40vh" }}
        maxWidth={{ xs: "300px", md: "350px" }}
        maxHeight={{ xs: "300px", md: "350px" }}
        borderRadius="15%"
        p={2}
        m={{ xs: 2, sm: 3, md: 4 }}
        boxShadow={5}
        sx={{
          backgroundImage: (theme) =>
            `-webkit-linear-gradient(139deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
        }}
      />
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
            {INFO.firstName}
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
          {INFO.subheading}
        </Typography>
        <Box p={2}>
          {INFO.bio.map((item, index) => (
            <Box
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
        {INFO.socials.map((social, index) => (
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
