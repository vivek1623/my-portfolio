import Grid from "@mui/material/Grid"

import { PORTFOLIO } from "../../data/config/info"

import ProjectCard from "../../components/ProjectCard"

const Portfolio = () => {
  return (
    <Grid container display="flex" justifyContent="center">
      {PORTFOLIO.map((project, index) => (
        <Grid item xs={12} md={6} key={index} mb={4}>
          <ProjectCard project={project} />
        </Grid>
      ))}
    </Grid>
  )
}

export default Portfolio
