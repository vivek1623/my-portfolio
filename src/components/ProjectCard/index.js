import React from "react"
import PropTypes from "prop-types"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Stack from "@mui/material/Stack"
import Chip from "@mui/material/Chip"
import Button from "@mui/material/Button"
import CodeIcon from "@mui/icons-material/Code"
import ExploreIcon from "@mui/icons-material/Explore"
import { LazyLoadImage } from "react-lazy-load-image-component"

import { IMG_PROJECT_PLACEHOLDER } from "../../data/assets"

const ProjectCard = ({ project }) => {
  return (
    <Box
      display="flex"
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      p={{ xs: 4, sm: 6 }}
    >
      {/* <Box
        component="img"
        src={project.image}
        alt={project.title}
        width={1}
        loading="lazy"
      /> */}
      <LazyLoadImage
        src={project.image}
        width="100%"
        alt={project.title}
        PlaceholderSrc={IMG_PROJECT_PLACEHOLDER}
        effect="blur"
      />
      <Typography variant="h4" fontWeight={600}>
        {project.title}
      </Typography>
      <Typography align="center" color="text.secondary">
        {project.description}
      </Typography>
      {project.tags?.length > 0 && (
        <Stack direction="row" spacing={1} mt={3}>
          {project.tags.map((tag, index) => (
            <Chip key={index} label={tag} variant="outlined" />
          ))}
        </Stack>
      )}
      <Stack direction={{ xs: "column", sm: "row" }} mt={3} spacing={2}>
        <Button
          color="inherit"
          variant="outlined"
          startIcon={<ExploreIcon />}
          href={project.deployedUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          LIVE DEMO
        </Button>
        <Button
          color="inherit"
          variant="outlined"
          startIcon={<CodeIcon />}
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
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
