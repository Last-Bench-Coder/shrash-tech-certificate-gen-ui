import React, { useState } from 'react';
import './CertificateForm.css';
import { API_ENDPOINTS } from '../constants/api'; // Ensure API constants are imported
import axios from 'axios';

const CertificateForm = () => {
  const [studentName, setStudentName] = useState('');
  const [courseName, setCourseName] = useState('');
  const [date, setDate] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [instituteName] = useState('Shrash Tech Academy');
  const [instituteAddress, setInstituteAddress] = useState('');
  const [institutePhone] = useState('9876543210');
  const [instituteEmail] = useState('info@shrashtech.com');
  const [instituteLogo] = useState('https://i.imgur.com/3sVGZsi.png');
  const [signatureName] = useState('Chakrapani U');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const requestBody = {
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

    try {
      const response = await axios.post(API_ENDPOINTS.CREATE_CERTIFICATE, requestBody);
      setFormSubmitted(true);
      setLoading(false);

      // Automatically send certificate after creation
      const sendResponse = await axios.post(API_ENDPOINTS.SEND_CERTIFICATE_LINK(response.data.id), {
        downloadURL: "https://certificate-dunia.vercel.app/gen-certificate"
      });

      console.log("Certificate sent:", sendResponse.data);
    } catch (error) {
      setLoading(false);
      console.error("Error while generating certificate:", error);
    }
  };

  return (
    <div className="certificate-form-container">
      <h2 className="form-title">Generate Certificate</h2>
      <p className="form-description">Fill in the details to generate and send the certificate.</p>

      {formSubmitted ? (
        <div className="alert alert-success">
          <i className="bi bi-check-circle"></i> Certificate successfully created and sent!
        </div>
      ) : (
        <form className="certificate-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="studentName">Student Name</label>
              <input type="text" id="studentName" className="form-control" value={studentName} onChange={(e) => setStudentName(e.target.value)} required />
            </div>
            <div className="form-group">
              <label htmlFor="courseName">Course Name</label>
              <input type="text" id="courseName" className="form-control" value={courseName} onChange={(e) => setCourseName(e.target.value)} required />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="date">Completion Date</label>
              <input type="date" id="date" className="form-control" value={date} onChange={(e) => setDate(e.target.value)} required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input type="text" id="phone" className="form-control" value={phone} onChange={(e) => setPhone(e.target.value)} required />
            </div>
          </div>

          {/* Institute Information (predefined fields) */}
          <div className="form-row">
            <div className="form-group">
              <label>Institute Name</label>
              <input type="text" className="form-control" value={instituteName} readOnly />
            </div>
            <div className="form-group">
              <label>Institute Phone</label>
              <input type="text" className="form-control" value={institutePhone} readOnly />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Institute Email</label>
              <input type="email" className="form-control" value={instituteEmail} readOnly />
            </div>
            <div className="form-group">
              <label>Institute Logo URL</label>
              <input type="url" className="form-control" value={instituteLogo} readOnly />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Signature Name</label>
              <input type="text" className="form-control" value={signatureName} readOnly />
            </div>
          </div>

          {/* Address field using textarea */}
          <div className="form-row">
            <div className="form-group full-width">
              <label htmlFor="instituteAddress">Institute Address</label>
              <textarea
                id="instituteAddress"
                className="form-control"
                value={instituteAddress}
                onChange={(e) => setInstituteAddress(e.target.value)}
                required
                rows="4"
              />
            </div>
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? 'Generating...' : 'Generate Certificate'}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default CertificateForm;
