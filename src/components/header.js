import React from 'react'
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import WbIncandescentIcon from '@mui/icons-material/WbIncandescent';

function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };



  return (
    <Box>
    <Grid container sx={{ borderBottom: '1px solid rgb(232, 234, 238)' }}>

      <Grid size={4} sx={{display:'flex', alignItems:'center', justifyContent:'left'}}>
        <Button
        id="basic-menu" 
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{ borderRadius:'50%', ml:'1em'}}>
          <MenuIcon sx={{ 
            fontSize:'3em',
            color:'black'
            }}/>
        </Button>
        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Placeholders</MenuItem>
        <MenuItem onClick={handleClose}>no funcionales</MenuItem>
        <MenuItem onClick={handleClose}>puede que cambie<br/>esto por un Drawer</MenuItem>
        <MenuItem onClick={handleClose}>puede que no</MenuItem>
        <MenuItem onClick={handleClose}>tambien puede que<br/>haga que esto sea<br/>un componente<br/>separado porque me<br/>parece mucho para<br/>poner en el componente<br/>header</MenuItem>
        <MenuItem onClick={handleClose}><WbIncandescentIcon/>Light/dark</MenuItem>
      </Menu>
      </Grid>


      <Grid size={4} sx={{
        fontSize: '5em',
        textAlign:'center'
        }} className='title'>
        PCbudget
        </Grid>
      

      <Grid size={4} sx={{ display:'flex', alignItems:'center', justifyContent:'right'}}>
        <nav>

          <Link to="/">
            <Button sx={{ borderRadius:'50%'}}>
              <HomeIcon sx={{ fontSize:'3em', color:'black'}}/>
            </Button>
          </Link>

          <Link to="/carrito">
            <Button sx={{ borderRadius:'50%', mr:'1em'}}>
              <ShoppingCartIcon sx={{ fontSize:'3em', color:'black'}}/>
            </Button>
          </Link>

        </nav>   
      </Grid>
      
    </Grid>
    </Box>
  )
}

export default Header