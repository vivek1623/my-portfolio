import React, { useState, useRef } from "react"
import PropTypes from "prop-types"
import Box from "@mui/material/Box"

import useIntersection from "../../data/hooks/useIntersection"

const LazyImageLoader = ({ src, placeholderSrc, alt, containerSx }) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)

  const imgRef = useRef()

  useIntersection(imgRef, () => {
    setIsInView(true)
  })

  const handleOnLoad = () => setIsLoaded(true)

  return (
    <Box
      ref={imgRef}
      width={1}
      position="relative"
      minHeight={300}
      sx={containerSx}
    >
      {isInView && (
        <>
          <Box
            component="img"
            src={src}
            alt={alt}
            width={1}
            display={isLoaded ? "block" : "none"}
            onLoad={handleOnLoad}
          />
          <Box
            component="img"
            src={placeholderSrc}
            alt={alt}
            width={1}
            display={isLoaded ? "none" : "block"}
            sx={{
              transition: "opacity 1s ease-in-out",
              opacity: isLoaded ? 0 : 1,
            }}
          />
        </>
      )}
    </Box>
  )
}

LazyImageLoader.propTypes = {
  src: PropTypes.string,
  placeholderSrc: PropTypes.string,
  alt: PropTypes.string,
  containerSx: PropTypes.object,
}

LazyImageLoader.defaultProps = {
  containerSx: {},
}

export default LazyImageLoader
