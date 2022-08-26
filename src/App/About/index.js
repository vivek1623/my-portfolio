import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"

import { ABOUT } from "../../data/config/info"

import Terminal from "../../components/Terminal"

const About = () => {
  return (
    <Box
      p={2}
      my={{ xs: 2, sm: 4 }}
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      {ABOUT.map((aboutItem, index) => (
        <Terminal key={index} title={aboutItem.title}>
          {aboutItem.data.map((item, index) => (
            <Typography key={index} fontSize="inherit" fontFamily="inherit">
              {item.primary && (
                <Typography
                  component="span"
                  mr={2}
                  fontSize="inherit"
                  color="primary.main"
                  fontFamily="inherit"
                  fontWeight="bold"
                >
                  {item.primary}
                </Typography>
              )}
              {item.secondary && (
                <Typography
                  component="span"
                  mr={2}
                  fontSize="inherit"
                  fontFamily="inherit"
                  color="common.white"
                  // fontWeight="600"
                >
                  {item.secondary}
                </Typography>
              )}
            </Typography>
          ))}
        </Terminal>
      ))}
    </Box>
  )
}

export default About
