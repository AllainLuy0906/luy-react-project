import React, { useState, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline, Box } from '@mui/material';
import Header from './pages/Header';
import Footer from './pages/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Projects from './pages/Projects';
import Login from './pages/Login';
import ProtectedRoute from './pages/ProtectedRoute';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? 'dark' : 'light',
          primary: {
            main: '#3498db',
          },
          secondary: {
            main: '#2ecc71',
          },
          background: {
            default: darkMode ? '#121212' : '#fafafa',
            paper: darkMode ? '#1e1e1e' : '#ffffff', // Changed from #fafafa to #ffffff for paper in light mode for better card distinction
          },
          text: {
             primary: darkMode ? '#f0f0f0' : '#333',
          }
        },
        typography: {
          fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                borderRadius: '5px',
              },
              containedPrimary: {
                 '&:hover': {
                    backgroundColor: 'transparent',
                    color: '#3498db', // primary.main
                    borderColor: '#3498db', // Ensure border is visible on hover
                    border: '1px solid #3498db',
                 },
              },
              outlinedPrimary: {
                 color: '#3498db', // primary.main
                 borderColor: '#3498db',
                 '&:hover': {
                    backgroundColor: '#3498db',
                    color: '#ffffff',
                 },
              },
            },
          },
           MuiLink: {
             styleOverrides: {
               root: ({ theme }) => ({
                 color: theme.palette.text.primary,
                 fontWeight: 500,
                 position: 'relative',
                 textDecoration: 'none',
                 '&::after': {
                   content: '""',
                   position: 'absolute',
                   bottom: '-5px',
                   left: 0,
                   width: 0,
                   height: '2px',
                   backgroundColor: theme.palette.primary.main,
                   transition: 'all 0.3s ease',
                 },
                 '&:hover::after, &.active::after': {
                   width: '100%',
                 },
               }),
             }
           }
        },
      }),
    [darkMode],
  );

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <Box component="main" sx={{ flexGrow: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/projects"
                element={
                  <ProtectedRoute>
                    <Projects />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </Box>
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;