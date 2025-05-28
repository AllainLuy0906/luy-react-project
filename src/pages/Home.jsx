import React from 'react';
import { Container, Box, Typography, Button, Grid, Paper } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import profileImage from '../assets/profile.jpg'; // Allain's profile image

import CodeIcon from '@mui/icons-material/Code';
import WebIcon from '@mui/icons-material/Web';
import StorageIcon from '@mui/icons-material/Storage';
import PhoneIcon from '@mui/icons-material/Phone';
import InfoIcon from '@mui/icons-material/Info';
import ContactForm from './ContactForm'; // Ensure ContactForm.jsx is in the same 'pages' folder

function Home() {
  const techStack = [
    { name: 'React', icon: <WebIcon fontSize="large" color="primary"/> },
    { name: 'JavaScript', icon: <CodeIcon fontSize="large" color="primary"/> },
    { name: 'HTML5', icon: <WebIcon fontSize="large" color="primary"/> },
    { name: 'CSS3', icon: <WebIcon fontSize="large" color="primary"/> },
    // { name: 'Node.js', icon: <CodeIcon fontSize="large" color="primary"/> }, // Optional
    // { name: 'SQL', icon: <StorageIcon fontSize="large" color="primary"/> }, // Optional
  ];

  return (
    <>
      {/* Hero Section */}
      <Box sx={{ 
        py: 8, 
        background: theme => `linear-gradient(to right, ${theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light}1A, ${theme.palette.mode === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.light}1A)`,
        textAlign: 'center' // Ensures all inline or inline-block children are centered
      }}>
        <Container maxWidth="lg">
          {/* Image will be at the top and centered due to Box's textAlign and mx: 'auto' on image Box */}
          <Box
            component="img"
            src={profileImage} // Ensure 'profileImage' is imported correctly
            alt="Allain B. Luy"
            sx={{
              width: { xs: 200, sm: 280, md: 300 }, // Slightly adjusted max size
              height: { xs: 200, sm: 280, md: 300 },
              borderRadius: '50%',
              objectFit: 'cover',
              border: theme => `5px solid ${theme.palette.background.paper}`,
              boxShadow: theme => theme.shadows[4],
              mx: 'auto', // Centers the image block itself
              mb: 4 // Margin below the image before text starts
            }}
          />
          
          {/* Text content, will also be centered due to parent Box's textAlign */}
          <Box>
            <Typography variant="h3" component="h1" gutterBottom>
              Hello, I'm <Typography component="span" variant="h3" color="primary">Allain</Typography>
            </Typography>
            <Typography variant="h5" color="secondary.main" gutterBottom>
              Aspiring Web Developer
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, maxWidth: '700px', mx: 'auto' }}> {/* Constrain text width for readability */}
              A passionate and developing programmer from Lumbia, Cagayan de Oro City, focused on building user-friendly web applications and continuously learning new technologies.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}> {/* Explicitly center buttons */}
              <Button component={RouterLink} to="/about" variant="contained" color="primary" size="large" startIcon={<InfoIcon />}>
                Learn More
              </Button>
              <Button component={RouterLink} to="/contact" variant="outlined" color="primary" size="large" startIcon={<PhoneIcon />}>
                Contact Me
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* About Preview Section */}
      <Box sx={{ py: 6, bgcolor: 'background.paper' }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="h4" component="h2" gutterBottom>A Bit About Me</Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            I'm a 21-year-old aspiring developer from Cagayan de Oro City with a background in customer service and a strong interest in technology. I'm currently honing my skills in web development, particularly with React.
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Beyond coding, I enjoy basketball, gaming, exploring new places, and watching documentaries. These interests fuel my creativity and problem-solving approach.
          </Typography>
          <Button component={RouterLink} to="/about" variant="contained" color="secondary">
            Read More About Me
          </Button>
        </Container>
      </Box>

      {/* Tech Stack Section */}
       <Box sx={{ py: 6 }}>
         <Container maxWidth="lg">
           <Typography variant="h4" component="h2" gutterBottom align="center">My Tech Stack</Typography>
           <Grid container spacing={3} justifyContent="center" sx={{ mt: 3 }}>
             {techStack.map((tech) => (
               <Grid item key={tech.name}>
                 <Paper elevation={2} sx={{ p: {xs: 2, sm: 3}, textAlign: 'center', width: {xs: 120, sm: 150}, height: {xs: 120, sm: 150}, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', transition: 'transform 0.3s ease, box-shadow 0.3s ease', '&:hover': { transform: 'translateY(-5px)', boxShadow: (theme) => theme.shadows[6] } }}>
                   {tech.icon}
                   <Typography variant="subtitle1" sx={{ mt: 1, fontWeight: 'medium' }}>{tech.name}</Typography>
                 </Paper>
               </Grid>
             ))}
           </Grid>
         </Container>
       </Box>

      {/* Contact Form Section */}
      <Box sx={{ py: 6, bgcolor: 'background.paper' }}>
        <Container maxWidth="md"> {/* Changed to md for better form appearance */}
           <Typography variant="h4" component="h2" gutterBottom align="center">Get In Touch</Typography>
          <Paper elevation={3} sx={{ p: {xs: 2, sm: 3, md: 4}, mt: 2 }}>
            <ContactForm />
          </Paper>
        </Container>
      </Box>
    </>
  );
}

export default Home;