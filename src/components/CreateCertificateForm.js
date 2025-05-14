import React, { useState } from 'react';
import axios from 'axios';
import API_ENDPOINTS from '../constants/api'; // Importing API constants
import './CreateCertificateForm.css';

const CreateCertificateForm = () => {
  const [studentName, setStudentName] = useState('');
  const [courseName, setCourseName] = useState('');
  const [date, setDate] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [certificateId, setCertificateId] = useState(''); // Holds the ID after creation

  const [instituteName] = useState('');
  const [instituteAddress] = useState('');
  const [institutePhone] = useState('');
  const [instituteEmail] = useState('');
  const [instituteLogo] = useState('');
  const [signatureName] = useState('');

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);

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
      htmlContent: ''
    };

    setLoading(true);
    try {
      // Create certificate API call
      const response = await axios.post(API_ENDPOINTS.CREATE_CERTIFICATE, certificateData);
      if (response.data) {
        setCertificateId(response.data.id); // Assuming the response contains the created certificate's ID
        setStudentName('');
        setCourseName('');
        setDate('');
        setEmail('');
        setPhone('');
        
        // Automatically send the certificate after creation
        const sendData = {
          downloadURL: "https://certificate-dunia.vercel.app/gen-certificate"
        };
        
        // Send certificate API call
        await axios.post(API_ENDPOINTS.SEND_CERTIFICATE_LINK(response.data.id), sendData);
        setSuccessMessage('Certificate created and sent successfully!');
      }
    } catch (error) {
      setErrorMessage('Error creating or sending certificate. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="certificate-form-container">
      <h2 className="form-header">Create and Send Certificate</h2>
      <p className="form-description">Fill in the details to create a certificate, and it will be sent automatically.</p>
      
      <form onSubmit={handleSubmit} className="certificate-form">
        {/* Form fields */}
        <div className="form-group">
          <label htmlFor="studentName">Student Name</label>
          <input
            type="text"
            id="studentName"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="courseName">Course Name</label>
          <input
            type="text"
            id="courseName"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn-create" disabled={loading}>
          {loading ? 'Creating...' : 'Create Certificate'}
        </button>
      </form>

      {/* Success or Error message */}
      {successMessage && (
        <div className="alert alert-success" role="alert">
          <i className="bi bi-check-circle-fill me-2"></i>
          {successMessage}
        </div>
      )}

      {errorMessage && (
        <div className="alert alert-danger" role="alert">
          <i className="bi bi-x-circle-fill me-2"></i>
          {errorMessage}
        </div>
      )}
    </div>
  );
};

export default CreateCertificateForm;
