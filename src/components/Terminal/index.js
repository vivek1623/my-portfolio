import React from "react"
import PropTypes from "prop-types"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { green, yellow, red, grey } from "@mui/material/colors"

function Terminal({ children, title }) {
  return (
    <Box
      component="section"
      width={{ xs: "100%", md: "60%" }}
      borderRadius={2}
      mb={{ xs: 2, sm: 6 }}
      boxShadow={4}
    >
      <Box
        display="flex"
        p={1.5}
        sx={{
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
          backgroundColor: grey[600],
        }}
      >
        <Box
          component="span"
          height="16px"
          width="16px"
          borderRadius="50%"
          backgroundColor={red[500]}
          mr={1}
        />
        <Box
          component="span"
          height="16px"
          width="16px"
          borderRadius="50%"
          backgroundColor={yellow[600]}
          mr={1}
        />
        <Box
          component="span"
          height="16px"
          width="16px"
          borderRadius="50%"
          backgroundColor={green[500]}
          mr={1}
        />
        <Typography component="span" variant="subtitle2" lineHeight={1.2}>
          about-me/{title}
        </Typography>
      </Box>
      <Box
        p={{ xs: 2, sm: 6 }}
        borderRadius={"0 0 8px 8px"}
        sx={{ backgroundColor: grey[900] }}
        fontSize={{ xs: "1rem", sm: "1.5rem" }}
        fontFamily="Courier New, Courier, monospace"
      >
        {children}
      </Box>
    </Box>
  )
}

Terminal.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

Terminal.defaultProps = {
  title: "",
  children: null,
}

export default Terminal
