import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"

import { IMG_404 } from "../../data/assets"

const PageNotFound = () => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        my: { xs: 4, sm: 6 },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box component="img" src={IMG_404} alt="404" width="100%" />
      <Typography variant="h3" align="center" fontWeight={500}>
        Page not found
      </Typography>
    </Container>
  )
}

export default PageNotFound
