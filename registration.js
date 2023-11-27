// PharmacyRegistration.jsx
import React, { useState } from 'react';
import {
  Container,
  CssBaseline,
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';

const PharmacyRegistration = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    pharmacyName: '',
    pharmacistName: '',
    address: '',
    licenseNumber: '',
    openingHours: '',
    servicesOffered: [],
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleServiceChange = (e) => {
    const selectedServices = Array.from(e.target.selectedOptions, (option) => option.value);
    setFormData({ ...formData, servicesOffered: selectedServices });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      
      console.error("Passwords don't match");
    } else {
      console.log('Form submitted:', formData);
     
    }
  };

  return (
    <div
      style={{
        backgroundImage: 'url("https://wallpaperset.com/w/full/4/3/b/141973.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <CssBaseline />
      <Container component="main" maxWidth="xs">
        <div>
          <Typography variant="h6" align="center">
            Pharmacy Registration
          </Typography>
          <form onSubmit={handleSubmit}>
           
            <TextField
              type="text"
              label="Pharmacy Name"
              variant="outlined"
              margin="normal"
              fullWidth
              required
              name="pharmacyName"
              value={formData.pharmacyName}
              onChange={handleChange}
              InputProps={{
                style: { background: 'lightblue' },
              }}
            />
            <TextField
              type="text"
              label="Pharmacist Name"
              variant="outlined"
              margin="normal"
              fullWidth
              required
              name="pharmacistName"
              value={formData.pharmacistName}
              onChange={handleChange}
              InputProps={{
                style: { background: 'lightblue' },
              }}
            />
            <TextField
              type="text"
              label="Address"
              variant="outlined"
              margin="normal"
              fullWidth
              required
              name="address"
              value={formData.address}
              onChange={handleChange}
              InputProps={{
                style: { background: 'lightblue' },
              }}
            />
            <TextField
              type="text"
              label="License Number"
              variant="outlined"
              margin="normal"
              fullWidth
              required
              name="licenseNumber"
              value={formData.licenseNumber}
              onChange={handleChange}
              InputProps={{
                style: { background: 'lightblue' },
              }}
            />
            <TextField
              type="text"
              label="Opening Hours"
              variant="outlined"
              margin="normal"
              fullWidth
              required
              name="openingHours"
              value={formData.openingHours}
              onChange={handleChange}
              InputProps={{
                style: { background: 'lightblue' },
              }}
            />
            <FormControl fullWidth margin="normal">
              <InputLabel id="services-label">Services Offered</InputLabel>
              <Select
                labelId="services-label"
                id="services"
                multiple
                value={formData.servicesOffered}
                onChange={handleServiceChange}
                label="Services Offered"
              >
                <MenuItem value="prescription">Prescription Filling</MenuItem>
                <MenuItem value="overTheCounter">Over-the-Counter Medications</MenuItem>
                <MenuItem value="vaccinations">Vaccinations</MenuItem>
                
              </Select>
            </FormControl>

           
            <TextField
              type="password"
              label="Password"
              variant="outlined"
              margin="normal"
              fullWidth
              required
              name="password"
              value={formData.password}
              onChange={handleChange}
              InputProps={{
                style: { background: 'lightblue' },
              }}
            />
            <TextField
              type="password"
              label="Confirm Password"
              variant="outlined"
              margin="normal"
              fullWidth
              required
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              InputProps={{
                style: { background: 'lightblue' },
              }}
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
            >
              Register
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default PharmacyRegistration;
