import React from 'react';
import { Container, Box, Typography, Grid, Paper, List, ListItem, ListItemIcon, ListItemText, Link as MuiLink, IconButton, Avatar, Divider } from '@mui/material'; // Added Divider
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid'; // More specific for mobile
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
// import InstagramIcon from '@mui/icons-material/Instagram'; // Optional

import ContactForm from './ContactForm'; // The new form component

function ContactUs() {
  const contactInfo = {
    location: "Blk 9 Lot 21, Vill view Homes, Upper Palalan Lumbia, Cagayan de Oro City",
    email: "allain.luy.dev@example.com", // Placeholder email
    phone: "#09666681048"
  };

  const socialLinks = [
    { label: "GitHub", icon: <GitHubIcon />, href: "#" }, // Replace # with actual links
    { label: "LinkedIn", icon: <LinkedInIcon />, href: "#" },
    { label: "Facebook", icon: <FacebookIcon />, href: "#" },
    // { label: "Instagram", icon: <InstagramIcon />, href: "#" }
  ];

  return (
    <>
      {/* Contact Hero Section */}
      <Box sx={{ py: {xs:3, sm:4}, textAlign: 'center', bgcolor: 'background.default' }}>
        <Container maxWidth="md">
          <Typography variant="h3" component="h1" gutterBottom color="primary.main">Get In Touch</Typography>
          <Typography variant="h6" color="text.secondary" sx={{fontWeight: 'normal'}}>
            Have a question, a project idea, or just want to connect? Feel free to reach out! I'm always open to discussing new opportunities and collaborations.
          </Typography>
        </Container>
      </Box>

      {/* Contact Details & Form Section */}
      <Box sx={{ py: {xs:4, sm:6}, bgcolor: 'background.paper' }}>
         <Container maxWidth="lg">
            <Grid container spacing={5} justifyContent="center" alignItems="stretch"> {/* alignItems stretch */}

               {/* Contact Information */}
               <Grid item xs={12} md={5} sx={{ display: 'flex' }}>
                  <Paper elevation={3} sx={{ p: {xs: 2, sm: 3}, width: '100%', display: 'flex', flexDirection: 'column' }}>
                     <Typography variant="h4" component="h2" gutterBottom color="primary.dark" sx={{mb:2}}>Contact Information</Typography>
                     <List>
                        <ListItem disablePadding sx={{mb: 2}}>
                           <ListItemIcon sx={{minWidth: 40}}><LocationOnIcon color="secondary" fontSize="medium"/></ListItemIcon>
                           <ListItemText primary="Location" secondary={contactInfo.location} primaryTypographyProps={{fontWeight:'medium'}}/>
                        </ListItem>
                         <Divider component="li" sx={{my:1}}/>
                        <ListItem disablePadding sx={{mb: 2}}>
                           <ListItemIcon sx={{minWidth: 40}}><EmailIcon color="secondary" fontSize="medium"/></ListItemIcon>
                           <ListItemText primary="Email" secondary={<MuiLink href={`mailto:${contactInfo.email}`} color="inherit" underline="hover">{contactInfo.email}</MuiLink>} primaryTypographyProps={{fontWeight:'medium'}}/>
                        </ListItem>
                         <Divider component="li" sx={{my:1}}/>
                        <ListItem disablePadding sx={{mb: 2}}>
                           <ListItemIcon sx={{minWidth: 40}}><PhoneAndroidIcon color="secondary" fontSize="medium"/></ListItemIcon>
                           <ListItemText primary="Phone" secondary={<MuiLink href={`tel:${contactInfo.phone.replace(/#/g, '')}`} color="inherit" underline="hover">{contactInfo.phone}</MuiLink>} primaryTypographyProps={{fontWeight:'medium'}}/>
                        </ListItem>
                     </List>

                     <Box sx={{ mt: 'auto', pt: 2 }}> {/* Pushes social links to bottom */}
                        <Typography variant="h6" component="h3" sx={{ mb: 1.5, fontWeight:'medium' }}>Connect with me</Typography>
                        <Box sx={{ display: 'flex', justifyContent: {xs: 'center', sm:'flex-start'}, gap: 1.5 }}>
                           {socialLinks.map(link => (
                              <IconButton
                                key={link.label}
                                component={MuiLink}
                                href={link.href}
                                aria-label={link.label}
                                color="primary"
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                  bgcolor: 'action.hover',
                                  color: 'primary.main',
                                  '&:hover': { bgcolor: 'primary.main', color: 'primary.contrastText', transform: 'scale(1.1)' },
                                  transition: 'all 0.2s ease-in-out'
                                }}
                              >
                                 {link.icon}
                              </IconButton>
                           ))}
                        </Box>
                     </Box>
                  </Paper>
               </Grid>

               {/* Contact Form */}
               <Grid item xs={12} md={7} sx={{ display: 'flex' }}>
                  <Paper elevation={3} sx={{ p: {xs: 2, sm: 3, md: 4}, width: '100%', display: 'flex', flexDirection: 'column' }}>
                     <Typography variant="h4" component="h2" gutterBottom color="primary.dark" sx={{mb:1}}>Send Me a Message</Typography>
                     <ContactForm />
                  </Paper>
               </Grid>
            </Grid>
         </Container>
      </Box>
    </>
  );
}

export default ContactUs;