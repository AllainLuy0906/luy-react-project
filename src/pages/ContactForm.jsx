import React, { useState } from 'react';
import { Box, TextField, Button, Alert, CircularProgress } from '@mui/material';

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' }); // 'success' or 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
    setSubmitStatus({ type: '', message: '' }); // Clear previous submission status
  };

  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;
    if (!formData.name.trim()) {
      tempErrors.name = 'Name is required';
      isValid = false;
    }
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email is invalid';
      isValid = false;
    }
    if (!formData.message.trim()) {
      tempErrors.message = 'Message is required';
      isValid = false;
    }
    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      setSubmitStatus({ type: '', message: '' });

      // Simulate API call / email sending
      console.log("Form Data Submitted:", formData);
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitStatus({ type: 'success', message: 'Your message has been sent successfully! (Simulated)' });
        setFormData({ name: '', email: '', message: '' }); // Reset form
      }, 1500);

      // If there was an actual backend, you might handle errors:
      // .catch((error) => {
      //   setIsSubmitting(false);
      //   setSubmitStatus({ type: 'error', message: 'Failed to send message. Please try again. (Simulated)' });
      // });
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      {submitStatus.message && (
        <Alert severity={submitStatus.type} sx={{ mb: 2 }} variant="filled">
          {submitStatus.message}
        </Alert>
      )}
      <TextField
        fullWidth
        label="Your Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        error={!!errors.name}
        helperText={errors.name}
        margin="normal"
        required
        variant="outlined"
      />
      <TextField
        fullWidth
        label="Your Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        error={!!errors.email}
        helperText={errors.email}
        margin="normal"
        required
        variant="outlined"
      />
      <TextField
        fullWidth
        label="Your Message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        error={!!errors.message}
        helperText={errors.message}
        margin="normal"
        required
        multiline
        rows={4}
        variant="outlined"
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        size="large"
        fullWidth
        disabled={isSubmitting}
        sx={{ mt: 3, py: 1.5 }}
        startIcon={isSubmitting ? <CircularProgress size={20} color="inherit" /> : null}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </Box>
  );
}

export default ContactForm;