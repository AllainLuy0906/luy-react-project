import React from 'react';
import { Container, Box, Typography, Grid, Paper, List, ListItem, ListItemText, Avatar, Divider, Card, CardContent, CardMedia, Chip, ListItemIcon } from '@mui/material'; // Added ListItemIcon
import PersonIcon from '@mui/icons-material/Person';
import CakeIcon from '@mui/icons-material/Cake';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import PublicIcon from '@mui/icons-material/Public';
import MaleIcon from '@mui/icons-material/Male';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import WorkIcon from '@mui/icons-material/WorkHistory';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import ExploreIcon from '@mui/icons-material/Explore';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import CodeIcon from '@mui/icons-material/Code';
import WebIcon from '@mui/icons-material/Web'; // For React

import profileImage from '../assets/profile.jpg'; // Main profile image for Allain
import aboutMeImage from '../assets/about-me.jpg'; // Secondary image for About page

function AboutUs() {
  const personalInfo = {
    name: "Allain B. Luy",
    address: "Blk 9 Lot 21, Vill view Homes, Upper Palalan Lumbia, Cagayan de Oro City",
    phone: "#09666681048",
    gender: "Male",
    nationality: "Filipino",
    birthdate: "January 9, 2004",
    age: 21, // Calculated based on Jan 9, 2004 and current date (May 2025)
  };

  const workExperience = {
    jobTitle: "Crew Member",
    company: "KFC (Fast food chain, local branch)",
    period: "July 2022 – December 2023",
    responsibilities: [
      "Provided customer service, maintained store operations, and supported kitchen duties.",
      "Assisted customers with orders and ensured a positive dining experience.",
      "Operated point-of-sale (POS) system for transactions and inventory tracking.",
      "Maintained cleanliness and food safety standards in both front and back of house.",
      "Worked in fast-paced environment and collaborated with team to meet daily targets.",
      "Handled peak-hour pressure and multitasking with efficiency."
    ],
    achievements: [
      "Consistently received positive feedback from customers and team leads.",
      "Recognized as “Employee of the Month” twice for reliability and work ethic.",
      "Helped reduce customer wait times by streamlining counter service processes."
    ]
  };

  const interests = [
    { name: 'Basketball', description: "I play regularly and enjoy the teamwork, discipline, and focus the sport teaches me.", icon: <SportsBasketballIcon color="primary" /> },
    { name: 'Gaming (Mobile & PC)', description: "Big fan of DOTA 2, CS2, MLBB, which spark my interest in game mechanics and user experience design.", icon: <SportsEsportsIcon color="primary" /> },
    { name: 'Adventures & Exploration', description: "Exploring new places, trying different foods, or joining outdoor activities helps me stay creative and curious.", icon: <ExploreIcon color="primary" /> },
    { name: 'Watching Documentaries', description: "Especially those about technology, history, and human behavior, giving me a deeper perspective.", icon: <OndemandVideoIcon color="primary" /> }
  ];

  const currentProjects = {
    title: "Personal Portfolio Website",
    description: "I'm currently developing my personal portfolio website using React. This site will include sections like About Me, Family Background, Work Experience, and Projects. I’m now working on making the site fully responsive and adding animations for better user interaction. This project is helping me practice database integration (conceptual), form handling, and component-based design.",
    technologies: ["React", "JavaScript", "HTML", "CSS", "Material UI"],
    image: aboutMeImage // Using the 'about-me.jpg' for this section's visual
  };

  const technicalSkills = [
    { category: "Frontend", skills: ["React", "JavaScript (ES6+)", "HTML5", "CSS3", "Material UI"] },
    { category: "Practicing", skills: ["Form Handling", "Component-Based Design", "Responsive Design"] },
    // { category: "Backend (Learning)", skills: ["Node.js (Basic)", "Express.js (Basic)"] },
    // { category: "Databases (Learning)", skills: ["SQL (Basic)"] }
  ];


  return (
    <>
      {/* Hero Introduction */}
      <Box sx={{ 
        py: 6, 
        bgcolor: 'background.default',
        textAlign: 'center' // Ensures all inline or inline-block children are centered
      }}>
        <Container maxWidth="lg">
          {/* Avatar will be at the top and centered */}
          <Avatar
            alt={personalInfo.name} // Ensure 'personalInfo' is accessible and has 'name'
            src={profileImage}    // Ensure 'profileImage' is imported correctly
            sx={{
              width: { xs: 180, sm: 200 }, // Adjusted sizes
              height: { xs: 180, sm: 200 },
              margin: 'auto', // Centers the Avatar
              border: theme => `4px solid ${theme.palette.primary.main}`,
              mb: 3 // Margin below the avatar
            }}
          />
          
          {/* Text content, will also be centered */}
          <Box>
            <Typography variant="h3" component="h1" gutterBottom color="primary.main">
              {personalInfo.name} {/* Ensure 'personalInfo' is accessible */}
            </Typography>
            <Typography variant="h5" component="h2" color="text.secondary" gutterBottom>
              Aspiring Web Developer
            </Typography>
            <Typography variant="body1" paragraph sx={{ maxWidth: '750px', mx: 'auto' }}> {/* Constrain text width for readability */}
              Welcome to my personal space! I am a {personalInfo.age}-year-old individual from Cagayan de Oro City, Philippines, with a growing passion for software development and technology.
              My journey into the tech world is driven by a desire to create meaningful and efficient solutions.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Personal Information Section */}
      <Box sx={{ py: 5, bgcolor: 'background.paper' }}>
        <Container maxWidth="md">
          <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ mb: 4 }}>
            <PersonIcon sx={{ verticalAlign: 'middle', mr: 1 }} /> Personal Information
          </Typography>
          <Paper elevation={3} sx={{ p: 3 }}>
            <List>
              <ListItem><ListItemIcon><PersonIcon /></ListItemIcon><ListItemText primary="Full Name" secondary={personalInfo.name} /></ListItem>
              <Divider component="li" />
              <ListItem><ListItemIcon><CakeIcon /></ListItemIcon><ListItemText primary="Birthdate" secondary={`${personalInfo.birthdate} (Age: ${personalInfo.age})`} /></ListItem>
              <Divider component="li" />
              <ListItem><ListItemIcon><MaleIcon /></ListItemIcon><ListItemText primary="Gender" secondary={personalInfo.gender} /></ListItem>
              <Divider component="li" />
              <ListItem><ListItemIcon><PublicIcon /></ListItemIcon><ListItemText primary="Nationality" secondary={personalInfo.nationality} /></ListItem>
              <Divider component="li" />
              <ListItem><ListItemIcon><LocationOnIcon /></ListItemIcon><ListItemText primary="Address" secondary={personalInfo.address} /></ListItem>
              <Divider component="li" />
              <ListItem><ListItemIcon><PhoneIcon /></ListItemIcon><ListItemText primary="Contact No." secondary={personalInfo.phone} /></ListItem>
            </List>
          </Paper>
        </Container>
      </Box>

      {/* Family Background Section */}
      <Box sx={{ py: 5, bgcolor: 'background.default' }}>
        <Container maxWidth="md">
          <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ mb: 4 }}>
             <FamilyRestroomIcon sx={{ verticalAlign: 'middle', mr: 1 }} /> Family Background
          </Typography>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="body1" paragraph>
              I come from a family of four: my parents, one younger brother, and myself. My father is a retired coordinator of Aquarius Corporation, and my mother is a homemaker. My sibling is a student currently pursuing his education.
            </Typography>
            <Typography variant="body1" paragraph>
              Growing up in a supportive family taught me the importance of discipline, humility, and perseverance – values I carry into my professional life as a developer.
            </Typography>
          </Paper>
        </Container>
      </Box>

      {/* Prior Work Experience Section */}
      <Box sx={{ py: 5, bgcolor: 'background.paper' }}>
        <Container maxWidth="md">
          <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ mb: 4 }}>
            <WorkIcon sx={{ verticalAlign: 'middle', mr: 1 }} /> Prior Work Experience
          </Typography>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" color="primary">{workExperience.jobTitle} at {workExperience.company}</Typography>
            <Typography variant="subtitle1" color="text.secondary" gutterBottom>({workExperience.period})</Typography>
            <Typography variant="body2" sx={{ mt: 1, mb: 1, fontWeight: 'bold' }}>Key Responsibilities & Skills Used:</Typography>
            <List dense sx={{ listStyleType: 'disc', pl: 2.5 }}>
              {workExperience.responsibilities.map((item, index) => (
                <ListItem key={index} sx={{ display: 'list-item', p: 0.25 }}>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
            <Typography variant="body2" sx={{ mt: 2, mb: 1, fontWeight: 'bold' }}>Achievements or Outcomes:</Typography>
            <List dense sx={{ listStyleType: 'disc', pl: 2.5 }}>
              {workExperience.achievements.map((item, index) => (
                <ListItem key={index} sx={{ display: 'list-item', p: 0.25 }}>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Container>
      </Box>

      {/* Technical Skills Section */}
      <Box sx={{ py: 5, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ mb: 4 }}>
            <CodeIcon sx={{ verticalAlign: 'middle', mr: 1 }} /> Technical Skills
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            {technicalSkills.map((skillCat) => (
              <Grid item xs={12} sm={6} md={4} key={skillCat.category}>
                <Paper elevation={2} sx={{ p: 2.5, height: '100%' }}>
                  <Typography variant="h6" color="primary" gutterBottom align="center">{skillCat.category}</Typography>
                  <List dense>
                    {skillCat.skills.map(skill => (
                      <ListItem key={skill}>
                        <ListItemIcon sx={{minWidth: '35px'}}><WebIcon fontSize="small" color="secondary"/></ListItemIcon>
                        <ListItemText primary={skill}/>
                      </ListItem>
                    ))}
                  </List>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Personal Interests Section */}
      <Box sx={{ py: 5, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ mb: 4 }}>
            Personal Interests
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            {interests.map((interest, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Paper elevation={2} sx={{ p: 3, textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', '&:hover': { transform: 'translateY(-5px)', boxShadow: (theme)=> theme.shadows[4] }, transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out' }}>
                  <Box sx={{ fontSize: '2.5rem', mb: 1.5 }}>{interest.icon}</Box>
                  <Typography variant="h6" component="h3" gutterBottom>{interest.name}</Typography>
                  <Typography variant="body2">{interest.description}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Current Project Section */}
      <Box sx={{ py: 5, bgcolor: 'background.default' }}>
        <Container maxWidth="md">
          <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ mb: 4 }}>
            Project I'm Working On
          </Typography>
          <Card elevation={3}>
            <CardMedia
              component="img"
              height="200" // Adjust as needed
              image={currentProjects.image}
              alt={currentProjects.title}
              sx={{ objectFit: 'cover' }} // Or 'contain' if the image aspect ratio is important
            />
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h5" component="h3" color="primary" gutterBottom>
                {currentProjects.title}
              </Typography>
              <Typography variant="body1" paragraph>
                {currentProjects.description}
              </Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>Technologies:</Typography>
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                {currentProjects.technologies.map(tech => (
                  <Chip key={tech} label={tech} color="secondary" size="small" />
                ))}
              </Box>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </>
  );
}

export default AboutUs;