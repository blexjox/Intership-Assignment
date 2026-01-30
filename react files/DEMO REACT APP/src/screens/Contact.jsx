import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Grid,
  CircularProgress,
  Alert,
  IconButton,
  Stack,
  Paper,
} from "@mui/material";

import { LinkedIn, GitHub, Instagram, Twitter } from "@mui/icons-material";
import "./Contact.css"; // external CSS file

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Validation Logic
  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);
    setSubmitted(false);

    // Fake API delay
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <Box className="contact-container">
      <Typography variant="h3" className="contact-title">
        Contact Me
      </Typography>

      <Typography variant="subtitle1" className="contact-subtitle">
        Let’s build something amazing together 🚀
      </Typography>

      {/* Social Icons */}
      <Stack direction="row" spacing={2} justifyContent="center" mt={2}>
        <IconButton href="https://linkedin.com" target="_blank" color="primary">
          <LinkedIn fontSize="large" />
        </IconButton>

        <IconButton href="https://github.com" target="_blank" color="primary">
          <GitHub fontSize="large" />
        </IconButton>

        <IconButton href="https://instagram.com" target="_blank" color="primary">
          <Instagram fontSize="large" />
        </IconButton>

        <IconButton href="https://twitter.com" target="_blank" color="primary">
          <Twitter fontSize="large" />
        </IconButton>
      </Stack>

      <Grid container justifyContent="center" mt={4}>
        <Grid item xs={12} md={6}>
          <Paper elevation={4} className="contact-form-box">
            <form onSubmit={handleSubmit}>
              <TextField
                label="Your Name"
                fullWidth
                variant="outlined"
                margin="normal"
                value={formData.name}
                error={!!errors.name}
                helperText={errors.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />

              <TextField
                label="Your Email"
                fullWidth
                variant="outlined"
                margin="normal"
                value={formData.email}
                error={!!errors.email}
                helperText={errors.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />

              <TextField
                label="Message"
                fullWidth
                margin="normal"
                variant="outlined"
                multiline
                rows={4}
                value={formData.message}
                error={!!errors.message}
                helperText={errors.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />

              <Box textAlign="center" mt={2}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={loading}
                  className="submit-btn"
                >
                  {loading ? (
                    <CircularProgress size={26} color="inherit" />
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </Box>
            </form>

            {/* Success Message */}
            {submitted && (
              <Alert severity="success" className="success-alert" sx={{ mt: 2 }}>
                Your message has been sent successfully! 🎉
              </Alert>
            )}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
