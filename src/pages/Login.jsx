import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Alert,
  InputAdornment,
  IconButton,
  Avatar // Added Avatar
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LockPersonIcon from '@mui/icons-material/LockPerson'; // Changed Icon

function Login() {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
    if (loginError) {
      setLoginError('');
    }
  };

  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    if (!credentials.username.trim()) {
      tempErrors.username = 'Username is required';
      isValid = false;
    }
    if (!credentials.password.trim()) {
      tempErrors.password = 'Password is required';
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Updated simple authentication logic for Allain Luy
      if (credentials.username === 'allainluy' && credentials.password === 'allainluy') {
        sessionStorage.setItem('isAuthenticated', 'true');
        // Dispatch custom event to notify header or other components if needed instantly
        window.dispatchEvent(new Event('authChange'));
        navigate(from, { replace: true });
      } else {
        setLoginError('Invalid username or password');
      }
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container maxWidth="xs" sx={{ py: { xs: 4, sm: 8 } }}> {/* Reduced maxwidth for typical login form */}
      <Paper elevation={4} sx={{ p: { xs: 2, sm: 3, md: 4 }, borderRadius: 2 }}>
        <Box sx={{ textAlign: 'center', mb: 3 }}>
          <Avatar sx={{ m: 'auto', bgcolor: 'primary.main', width: 56, height: 56 }}>
            <LockPersonIcon fontSize="large" />
          </Avatar>
          <Typography variant="h4" component="h1" gutterBottom sx={{mt: 2}}>
            Admin Login  (Protected Route)
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Sign in to access the projects section.
          </Typography>
        </Box>

        {loginError && <Alert severity="error" sx={{ mb: 2 }} variant="filled">{loginError}</Alert>}

        <Box component="form" onSubmit={handleSubmit} noValidate>
          <TextField
            fullWidth
            label="Username"
            name="username"
            value={credentials.username}
            onChange={handleChange}
            error={!!errors.username}
            helperText={errors.username}
            margin="normal"
            required
            autoFocus
            variant="outlined"
          />

          <TextField
            fullWidth
            label="Password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            value={credentials.password}
            onChange={handleChange}
            error={!!errors.password}
            helperText={errors.password}
            margin="normal"
            required
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            fullWidth
            sx={{ mt: 3, mb: 2, py: 1.5 }}
          >
            Sign In
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default Login;