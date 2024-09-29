import React from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row w-full h-full p-6">
      {/* Left side - Contact Form */}
      <div className="w-full md:w-1/2 p-4">
        <Typography variant="h4" className="mb-4">
          Contact Us
        </Typography>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          className="flex flex-col space-y-4"
        >
          <TextField
            label="Full Name"
            variant="outlined"
            fullWidth
            required
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            required
          />
          <TextField
            label="Message"
            variant="outlined"
            fullWidth
            required
            multiline
            rows={4}
          />
          <Button
            variant="contained"
            color="primary"
            size="large"
            type="submit"
          >
            Submit
          </Button>
        </Box>
      </div>

      {/* Right side - Map */}
      <div className="w-full md:w-1/2 p-4">
        <Typography variant="h4" className="mb-4">
          Find Us Here
        </Typography>
        <div className="w-full h-[300px] md:h-full">
          <iframe
            title="Map"
            className="w-full h-full border-none"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093673!2d144.95373541531702!3d-37.81627974202181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577ac1ec3e4f725!2sGoogle!5e0!3m2!1sen!2sau!4v1636441335523!5m2!1sen!2sau"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
