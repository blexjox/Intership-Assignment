import React, { useState } from "react";
import {
  TextField,
  Button,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
  Checkbox,
  MenuItem,
  Select,
  InputLabel,
  Typography,
  Paper,
} from "@mui/material";
import "./StudentForm.css";

export default function StudentForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    dob: "",
    gender: "",
    course: "",
    address: "",
    file: null,
    agree: false,
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  return (
    <div className="form-container">
      <Paper elevation={4} className="form-wrapper">
        <Typography variant="h5" className="form-title">
          Student Registration Form
        </Typography>

        <form onSubmit={handleSubmit} className="form-grid">
          {/* Name */}
          <TextField
            label="Full Name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            fullWidth
          />

          {/* Email */}
          <TextField
            label="Email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            fullWidth
          />

          {/* Password */}
          <TextField
            label="Password"
            name="password"
            type="password"
            required
            value={formData.password}
            onChange={handleChange}
            fullWidth
          />

          {/* DOB */}
          <TextField
            label="Date of Birth"
            name="dob"
            type="date"
            required
            value={formData.dob}
            onChange={handleChange}
            fullWidth
            InputLabelProps={{ shrink: true }}
          />

          {/* File Upload */}
          <div className="file-input">
            <label>Upload Student ID:</label>
            <input type="file" name="file" required onChange={handleChange} />
          </div>

          {/* Gender */}
          <FormControl>
            <FormLabel>Gender</FormLabel>
            <RadioGroup
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              row
            >
              <FormControlLabel value="Male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="Female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="Other" control={<Radio />} label="Other" />
            </RadioGroup>
          </FormControl>

          {/* Course Dropdown */}
          <FormControl fullWidth>
            <InputLabel>Select Course</InputLabel>
            <Select
              name="course"
              value={formData.course}
              label="Select Course"
              required
              onChange={handleChange}
            >
              <MenuItem value="BCA">BCA</MenuItem>
              <MenuItem value="BBA">BBA</MenuItem>
              <MenuItem value="BCom">BCom</MenuItem>
              <MenuItem value="BA">BA</MenuItem>
            </Select>
          </FormControl>

          {/* Address */}
          <TextField
            label="Address"
            name="address"
            multiline
            rows={3}
            required
            value={formData.address}
            onChange={handleChange}
            fullWidth
          />

          {/* Checkbox */}
          <FormControlLabel
            control={
              <Checkbox
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
                required
              />
            }
            label="I confirm that all information is correct"
          />

          {/* Submit */}
          <Button variant="contained" type="submit" className="submit-btn">
            Submit
          </Button>
        </form>
      </Paper>

      {/* Display Submitted Data */}
      {submittedData && (
        <Paper elevation={3} className="result-box">
          <Typography variant="h6">Submitted Information</Typography>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Password:</strong> {submittedData.password}</p>
          <p><strong>Date of Birth:</strong> {submittedData.dob}</p>
          <p><strong>Gender:</strong> {submittedData.gender}</p>
          <p><strong>Course:</strong> {submittedData.course}</p>
          <p><strong>Address:</strong> {submittedData.address}</p>
          <p><strong>File:</strong> {submittedData.file?.name}</p>
        </Paper>
      )}
    </div>
  );
}
/**
 * 
 */