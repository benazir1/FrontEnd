import { Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import {Box} from '@mui/system';

const Home = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography varient="h2">BOOK STORE MERN APPLICATION</Typography>
       <Button LinkComponent={Link} to="/books" sx={{marginTop:15,background:"orangered"}} varient="contained">
        <Typography varient="h3">View All Products</Typography>
        <img src="https://png.pngtree.com/thumb_back/fh260/background/20210902/pngtree-the-background-photography-of-the-empty-library-bookstore-indoors-image_785539.jpg"></img>
       </Button>
      </Box>
    </div>
  )
}

export default Home