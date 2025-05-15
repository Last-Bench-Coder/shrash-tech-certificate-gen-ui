import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./CertificateSearch.css";

const CertificateSearch = () => {
  const [certificateId, setCertificateId] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!certificateId.trim()) return;

    setLoading(true);
    setError("");

    try {
      const res = await axios.get(
        `https://certificate-dunia-api.vercel.app/api/certificates/by-certificate-id/${certificateId}`
      );
      const { _id } = res.data;
      navigate(`/certificate/${_id}`);
    } catch (err) {
      setError("Certificate not found. Please check the ID and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="cert-search-container">
      <h2>🔍 Search Your Certificate</h2>
      <p>Enter your Certificate ID to view and download your certificate.</p>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter Certificate ID"
          value={certificateId}
          onChange={(e) => setCertificateId(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          {loading ? "Searching..." : "Search"}
        </button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default CertificateSearch;
