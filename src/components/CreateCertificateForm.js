import React, { useState } from 'react';
import axios from 'axios';
import './CreateCertificateForm.css';

const CreateCertificateForm = () => {
  const [studentName, setStudentName] = useState('');
  const [courseName, setCourseName] = useState('');
  const [date, setDate] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  
  // Institute details (constants)
  const [instituteName] = useState('Shrash Tech Academy');
  const [instituteAddress] = useState('123 Tech Street, Innovation City');
  const [institutePhone] = useState('9876543210');
  const [instituteEmail] = useState('info@shrashtech.com');
  const [instituteLogo] = useState('https://i.imgur.com/3sVGZsi.png');
  const [signatureName] = useState('Chakrapani U');

  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!studentName || !courseName || !date || !email || !phone) {
      setErrorMessage('Please fill in all fields.');
      return;
    }

    const certificateData = {
      studentName,
      courseName,
      date,
      email,
      phone,
      instituteName,
      instituteAddress,
      institutePhone,
      instituteEmail,
      instituteLogo,
      signatureName,
      htmlContent: '',
    };

    try {
      const response = await axios.post('https://certificate-dunia-api.vercel.app/api/certificates', certificateData);
      if (response.data) {
        alert('Certificate created successfully!');
        // Optionally, reset the form
        setStudentName('');
        setCourseName('');
        setDate('');
        setEmail('');
        setPhone('');
      }
    } catch (error) {
      setErrorMessage('Error creating certificate. Please try again.');
    }
  };

  return (
    <div className="certificate-form-container">
      <div className="left-side">
        <h2>Create a Certificate</h2>
        <p className="description">
          Please fill out the form below to generate a certificate for your student.
          Ensure all fields are correctly filled to receive a valid certificate.
        </p>
        <img src={instituteLogo} alt="Institute Logo" className="institute-logo" />
      </div>

      <div className="right-side">
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <form onSubmit={handleSubmit} className="certificate-form">
          <div className="form-group">
            <label htmlFor="studentName">Student Name</label>
            <input
              type="text"
              id="studentName"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              placeholder="Enter student name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="courseName">Course Name</label>
            <input
              type="text"
              id="courseName"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
              placeholder="Enter course name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="date">Date of Issue</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter phone number"
            />
          </div>

          {/* Institute Details (Static values) */}
          <div className="form-group">
            <label htmlFor="instituteName">Institute Name</label>
            <input
              type="text"
              id="instituteName"
              value={instituteName}
              readOnly
            />
          </div>

          <div className="form-group">
            <label htmlFor="instituteAddress">Institute Address</label>
            <input
              type="text"
              id="instituteAddress"
              value={instituteAddress}
              readOnly
            />
          </div>

          <div className="form-group">
            <label htmlFor="institutePhone">Institute Phone</label>
            <input
              type="tel"
              id="institutePhone"
              value={institutePhone}
              readOnly
            />
          </div>

          <div className="form-group">
            <label htmlFor="instituteEmail">Institute Email</label>
            <input
              type="email"
              id="instituteEmail"
              value={instituteEmail}
              readOnly
            />
          </div>

          <div className="form-group">
            <label htmlFor="signatureName">Signature Name</label>
            <input
              type="text"
              id="signatureName"
              value={signatureName}
              readOnly
            />
          </div>

          <button type="submit" className="submit-btn">Create Certificate</button>
        </form>
      </div>
    </div>
  );
};

export default CreateCertificateForm;
