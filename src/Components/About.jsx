import { Box, Typography } from '@mui/material'
import React from 'react'

 const About = () => {
  return (
    <div>
      <Box  style={{height:"100vh"}} display="flex" flexDirection="column" alignItems= "center" justifyContent="center">
        <Typography style={{fontSize:36}}  sx={{fontFamily : "fantasy"}} varient="h2" >This is Book Store Application</Typography>
        <Typography style={{fontSize:36}}  sx={{fontFamily : "fantasy"}} varient="h3">By MERN STACk</Typography>

      </Box>
    </div>
  )
}
export default About
