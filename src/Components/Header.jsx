import React, { useState } from 'react'
import {AppBar,Tab,Tabs,Toolbar,Typography} from '@mui/material'
import BookIcon from '@mui/icons-material/Book';
import {Link, NavLink, Routes} from 'react-router-dom'
const Header = () => {
  const [value,setValue] = useState(0);
  return (
    <div>
        <AppBar sx={{backgroundColor :"#232F3D"}} postion = "sticky">
          <Toolbar>
            <NavLink to="/" style={{color:"white"}}>
          <Typography><BookIcon/></Typography></NavLink>
          <Tabs sx={{ml:"auto"}} textColor="inherit" indicatorColor = "primary"
           value={value} 
            onChange={(e,val) =>setValue(val)}>
            
            <Tab LinkComponent={NavLink} to="/add" label ="Add products"  />
            <Tab LinkComponent={NavLink} to="/books" label="Books" />
            <Tab LinkComponent={NavLink} to="/about" label="About us" />

          </Tabs>
          </Toolbar>
  
   
       </AppBar>
    </div>
  )
}

export default Header
