import React from 'react';
import { Box, Container, Typography, Link as MuiLink, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';

function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', py: 3, mt: 'auto' }}>
      <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
        <Typography variant="body2" color="text.secondary" textAlign="center">
          &copy; {new Date().getFullYear()} Allain B. Luy. All rights reserved.
        </Typography>
        <Box>
          <IconButton component={MuiLink} href="https://github.com/AllainLuy0906" aria-label="GitHub" color="inherit" target="_blank" rel="noopener noreferrer" sx={{ '&:hover': { color: 'primary.main' }}}>
            <GitHubIcon />
          </IconButton>
          <IconButton component={MuiLink} href="https://www.facebook.com/allain.luy.2025" aria-label="Facebook" color="inherit" target="_blank" rel="noopener noreferrer" sx={{ '&:hover': { color: 'primary.main' }}}>
            <FacebookIcon />
          </IconButton> 
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;