import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static" style={{backgroundColor:'red'}}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} align='center' style={{fontFamily:'Aria'}}>
          PRODUCT APP
        </Typography>
        <Link to ={'/home'}><Button color="inherit" style={{color:'white', fontFamily:'Aria'}}>VIEW</Button></Link>
        <Link to ={'/add'}><Button color="inherit"  style={{color:'white',fontFamily:'Aria'}}>Add</Button></Link>
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default Nav