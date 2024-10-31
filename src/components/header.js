import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import WbIncandescentIcon from '@mui/icons-material/WbIncandescent';
import { logoutUser } from '../redux/AuthSlice';

function Header() {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const { user, isAuthenticated } = useSelector(state => state.auth);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    handleClose();
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
        
        {isAuthenticated ? (
          <MenuItem onClick={() => { handleClose(); handleLogout(); }}>Cerrar sesión</MenuItem>
        ) : ( 
          <MenuItem component={Link} to="/login" onClick={handleClose}>Iniciar sesión</MenuItem> 
        )}
          <MenuItem component={Link} to="/register" onClick={handleClose}>Registrarse</MenuItem>
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
        {isAuthenticated && (
            <div style={{ marginLeft: '1em', fontSize: '1.5em' }}>
              {`Hola, ${user.name}`}
            </div>
          )}
      </Grid>
    </Grid>
    </Box>
  )
}

export default Header