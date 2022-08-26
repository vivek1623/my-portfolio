import React from "react"
import PropTypes from "prop-types"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Stack from "@mui/material/Stack"
import Button from "@mui/material/Button"
import CodeIcon from "@mui/icons-material/Code"
import ExploreIcon from "@mui/icons-material/Explore"

const ProjectCard = ({ project }) => {
  return (
    <Box
      display="flex"
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      p={2}
    >
      <Box component="img" src={project.image} alt="project" width={1} />
      <Typography variant="h4" fontWeight={600}>
        {project.title}
      </Typography>
      <Typography color="text.secondary">{project.description}</Typography>
      <Stack direction={{ xs: "column", sm: "row" }} mt={3} spacing={2}>
        <Button
          color="inherit"
          variant="outlined"
          startIcon={<ExploreIcon />}
          href={project.deployedUrl}
        >
          LIVE DEMO
        </Button>
        <Button
          color="inherit"
          variant="outlined"
          startIcon={<CodeIcon />}
          href={project.repoUrl}
        >
          SOURCE CODE
        </Button>
      </Stack>
    </Box>
  )
}

ProjectCard.propTypes = {
  project: PropTypes.object,
}

ProjectCard.defaultProps = {
  project: {},
}

export default ProjectCard
