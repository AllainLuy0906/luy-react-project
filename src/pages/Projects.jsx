import React from 'react';
import { Container, Box, Typography, Grid, Paper, Chip, Card, CardMedia, CardContent, CardActions, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom'; // If you want to link to project details

// Import your project images
import projectCinema from '../assets/project-cinema.jpg';
import projectPharmacy from '../assets/project-pharmacy.jpg';

// Reusable Project Card Component
const ProjectCard = ({ title, description, tech, image, alt, projectLink }) => (
  <Grid item xs={12} sm={6} md={6}> {/* Changed to md={6} for two items per row on larger screens */}
     <Card elevation={3} sx={{ height: '100%', display: 'flex', flexDirection: 'column', transition: 'transform 0.3s ease, box-shadow 0.3s ease', '&:hover': { transform: 'translateY(-5px)', boxShadow: (theme)=> theme.shadows[6] } }}>
        <CardMedia
            component="img"
            height="220" // Increased height
            image={image}
            alt={alt}
            sx={{ objectFit: 'cover' }}
        />
        <CardContent sx={{ flexGrow: 1, p: 2.5 }}>
           <Typography variant="h5" component="h3" color="primary.main" gutterBottom sx={{fontWeight: 'bold'}}>{title}</Typography>
           <Typography variant="body2" paragraph color="text.secondary">{description}</Typography>
           <Box sx={{ display: 'flex', gap: 0.75, flexWrap: 'wrap', mt: 'auto' }}> {/* mt: 'auto' to push chips down if content is short */}
              {tech.map((t, index) => (
                 <Chip key={index} label={t} color="secondary" size="small" variant="outlined"/>
              ))}
           </Box>
        </CardContent>
        {/* Optional: Add actions like view demo or source code
        <CardActions sx={{ p: 2, justifyContent: 'flex-start' }}>
          <Button size="small" color="primary" component={RouterLink} to={projectLink || "#"} variant="contained">
            View Details
          </Button>
        </CardActions>
        */}
     </Card>
  </Grid>
);

function Projects() {
  const projects = [
     { title: 'Cinema Reservation System', description: 'A comprehensive system for managing cinema bookings, seat allocation, and ticket sales. Developed as a foundational project to understand data handling and application logic.', tech: ['Java', 'File Handling', 'CLI'], image: projectCinema, alt: 'Cinema Reservation System Showcase' },
     { title: 'Pharmacy Inventory Management System', description: 'An efficient system for tracking medication inventory, managing orders, and monitoring expiry dates. This project focused on data structures and basic inventory control principles.', tech: ['Java', 'File Handling', 'CLI'], image: projectPharmacy, alt: 'Pharmacy Inventory Management System Showcase' }
  ];

  return (
    <>
       {/* Projects Header */}
       <Box sx={{ py: {xs: 3, sm:4}, textAlign: 'center', bgcolor: 'background.default' }}>
         <Container maxWidth="md"> {/* Changed to md */}
           <Typography variant="h3" component="h1" gutterBottom color="primary.main">My Projects</Typography>
           <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '750px', mx: 'auto', mb: {xs: 3, sm: 4}, fontWeight: 'normal' }}>
             Here are some of the projects I've worked on, demonstrating my skills in Java and fundamental programming concepts.
           </Typography>
         </Container>
       </Box>

       {/* Projects Section */}
       <Box sx={{ py: {xs:4, sm:6}, bgcolor: 'background.paper' }}>
         <Container maxWidth="lg">
            <Grid
              container
              spacing={4} // Increased spacing
              justifyContent="center"
            >
              {projects.map((project, index) => (
                 <ProjectCard key={index} {...project} />
              ))}
            </Grid>
         </Container>
       </Box>
    </>
  );
}

export default Projects;