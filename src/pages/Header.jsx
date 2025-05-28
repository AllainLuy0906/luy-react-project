import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Container, Box, IconButton, Link as MuiLink, Button } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import Brightness4Icon from '@mui/icons-material/Brightness4'; // Moon icon
import Brightness7Icon from '@mui/icons-material/Brightness7'; // Sun icon
import LogoutIcon from '@mui/icons-material/Logout'; // Logout icon
import MenuIcon from '@mui/icons-material/Menu'; // For mobile menu
import CloseIcon from '@mui/icons-material/Close'; // For mobile menu

function Header({ darkMode, toggleDarkMode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false); // State for mobile menu
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = () => {
      const authStatus = sessionStorage.getItem('isAuthenticated') === 'true';
      setIsLoggedIn(authStatus);
    };

    checkAuth();
    window.addEventListener('storage', checkAuth);
    window.addEventListener('authChange', checkAuth);

    return () => {
      window.removeEventListener('storage', checkAuth);
      window.removeEventListener('authChange', checkAuth);
    };
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem('isAuthenticated');
    setIsLoggedIn(false);
    window.dispatchEvent(new Event('authChange'));
    navigate('/');
    setMobileOpen(false); // Close mobile menu on logout
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Me' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <AppBar position="sticky" sx={{ bgcolor: 'background.paper', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" component="div" sx={{ color: 'text.primary' }}>
            <MuiLink component={NavLink} to="/" color="inherit" underline="none" sx={{ '&:hover': { color: 'primary.main' }}}>
              Allain B. Luy
            </MuiLink>
          </Typography>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 2 }}>
            <Box component="nav" sx={{ display: 'flex', gap: 3 }}>
              {navLinks.map(link => (
                <MuiLink
                  component={NavLink}
                  to={link.path}
                  key={link.label}
                  className={({ isActive }) => isActive ? 'active' : ''}
                >
                  {link.label}
                </MuiLink>
              ))}
            </Box>
            <IconButton
              sx={{ color: 'text.primary' }}
              onClick={toggleDarkMode}
              aria-label="toggle dark mode"
            >
              {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
            {isLoggedIn && (
              <Button
                startIcon={<LogoutIcon />}
                onClick={handleLogout}
                variant="outlined"
                color="primary"
                size="small"
              >
                Logout
              </Button>
            )}
          </Box>

          {/* Mobile Navigation Burger Icon */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
             <IconButton
              sx={{ color: 'text.primary', ml: 1 }} // Added margin for spacing from potential logout button
              onClick={toggleDarkMode}
              aria-label="toggle dark mode"
            >
              {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
            {isLoggedIn && ( // Show logout button next to theme toggle on mobile if logged in, before burger
              <Button
                onClick={handleLogout}
                variant="outlined"
                color="primary"
                size="small"
                sx={{ml: 1, p:0.5, minWidth: 'auto' }} // Make it compact
              >
                <LogoutIcon fontSize="small"/>
              </Button>
            )}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ color: 'text.primary' }}
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </Box>
        </Toolbar>

        {/* Mobile Navigation Menu */}
        {mobileOpen && (
          <Box
            sx={{
              display: { xs: 'flex', md: 'none' },
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              py: 2,
              borderTop: theme => `1px solid ${theme.palette.divider}`,
              bgcolor: 'background.paper', // Ensure it has a background
            }}
          >
            {navLinks.map(link => (
              <MuiLink
                component={NavLink}
                to={link.path}
                key={link.label}
                className={({ isActive }) => isActive ? 'active' : ''}
                onClick={handleDrawerToggle} // Close menu on link click
                sx={{ py: 1, fontSize: '1rem' }}
              >
                {link.label}
              </MuiLink>
            ))}
            {/* Mobile logout button already handled near theme toggle, or can be placed here as well */}
            {/* {isLoggedIn && (
              <Button
                startIcon={<LogoutIcon />}
                onClick={handleLogout} // handleLogout already closes menu if open
                variant="text" // Use text for less emphasis in mobile dropdown
                color="primary"
                size="small"
                sx={{ mt: 1 }}
              >
                Logout
              </Button>
            )} */}
          </Box>
        )}
      </Container>
    </AppBar>
  );
}

export default Header;