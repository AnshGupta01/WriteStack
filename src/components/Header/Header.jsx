import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Container,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Logo } from '../index';
import LogoutBtn from './LogoutBtn';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    {
      name: 'Home',
      slug: '/',
      active: true,
    },
    {
      name: 'Login',
      slug: '/login',
      active: !authStatus,
    },
    {
      name: 'Signup',
      slug: '/signup',
      active: !authStatus,
    },
    {
      name: 'All Posts',
      slug: '/all-posts',
      active: authStatus,
    },
    {
      name: 'Add Post',
      slug: '/add-post',
      active: authStatus,
    },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ width: 250, p: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <RouterLink to="/" style={{ textDecoration: 'none' }}>
          <Logo width="60px" />
        </RouterLink>
        <IconButton onClick={handleDrawerToggle} size="small">
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) =>
          item.active ? (
            <ListItem key={item.slug} disablePadding>
              <RouterLink to={item.slug} style={{ textDecoration: 'none', width: '100%' }}>
                <ListItemText
                  primary={item.name}
                  sx={{
                    py: 1,
                    px: 2,
                    '&:hover': {
                      backgroundColor: 'action.hover',
                    },
                  }}
                />
              </RouterLink>
            </ListItem>
          ) : null
        )}
        {authStatus && (
          <ListItem disablePadding>
            <Box sx={{ py: 1, px: 2, width: '100%' }}>
              <LogoutBtn />
            </Box>
          </ListItem>
        )}
      </List>
    </Box>
  );

  return (
    <AppBar position="sticky" elevation={2}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          {/* Logo */}
          <RouterLink to="/" style={{ textDecoration: 'none' }}>
            <Logo width="80px" />
          </RouterLink>

          {/* Desktop Navigation */}
          {!isMobile && (
            <Box sx={{ display: 'flex', gap: 2, ml: 'auto' }}>
              {navItems.map((item) =>
                item.active ? (
                  <Button
                    key={item.slug}
                    color="inherit"
                    component={RouterLink}
                    to={item.slug}
                    sx={{
                      fontWeight: 600,
                      fontSize: '1rem',
                      position: 'relative',
                      '&:after': {
                        content: '""',
                        position: 'absolute',
                        bottom: -4,
                        left: 0,
                        width: '0%',
                        height: 2,
                        backgroundColor: 'secondary.main',
                        transition: 'width 0.3s ease',
                      },
                      '&:hover:after': {
                        width: '100%',
                      },
                    }}
                  >
                    {item.name}
                  </Button>
                ) : null
              )}
              {authStatus && <LogoutBtn />}
            </Box>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerToggle}
              sx={{ ml: 'auto' }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
        {drawer}
      </Drawer>
    </AppBar>
  );
}

export default Header;