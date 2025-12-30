import React from 'react';
import { Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch } from 'react-redux';
import authService from '../../appwrite/auth';
import { logout } from '../../store/authSlice';

function LogoutBtn() {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };

  return (
    <Button
      color="inherit"
      onClick={logoutHandler}
      variant="outlined"
      startIcon={<LogoutIcon />}
      sx={{
        borderColor: 'rgba(255,255,255,0.5)',
        '&:hover': {
          borderColor: 'white',
          backgroundColor: 'rgba(255,255,255,0.1)',
        },
      }}
    >
      Logout
    </Button>
  );
}

export default LogoutBtn;