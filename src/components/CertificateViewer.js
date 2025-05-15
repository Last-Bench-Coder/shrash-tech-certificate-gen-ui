import React, { useEffect, useState } from "react";
import axios from "axios";
import "./CertificateViewer.css";
import html2pdf from "html2pdf.js";
import { useParams, Link } from "react-router-dom";

const CertificateViewer = () => {
  const { id } = useParams();
  const [certificate, setCertificate] = useState(null);

  useEffect(() => {
    axios
      .get(`https://certificate-dunia-api.vercel.app/api/certificates/${id}`)
      .then((res) => setCertificate(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  const handleDownload = () => {
    const element = document.getElementById("certificate");
    const opt = {
      margin: 0,
      filename: `${certificate.studentName}_certificate.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2, scrollY: 0 },
      jsPDF: { unit: "in", format: "letter", orientation: "landscape" },
    };
    html2pdf().set(opt).from(element).save();
  };

  if (!certificate) return <div>Loading...</div>;

  const formattedDate = new Date(certificate.date).toLocaleDateString();
  const signatureWidth = `${certificate.signatureName.length * 12}px`;

  return (
    <div className="cert-wrapper">
      <div className="certificate" id="certificate">
        <div className="cert-border">
          <img
            src={certificate.instituteLogo}
            alt="Institute Logo"
            className="cert-logo"
            crossOrigin="anonymous"
          />
          <div className="cert-header">
            <h1>🎓 Certificate of Completion</h1>
            <p className="cert-subtitle">
              This is to proudly recognize
            </p>
            <h2>{certificate.studentName}</h2>
            <p className="cert-desc">
              has successfully completed the course
            </p>
            <h3>{certificate.courseName}</h3>
            <p className="cert-date">Awarded on {formattedDate}</p>
            <p className="cert-id">Certificate ID: {certificate.certificateId}</p>
          </div>

          <div className="cert-footer">
            <div className="footer-info">
              {certificate.instituteName} • {certificate.instituteAddress} •{" "}
              {certificate.instituteEmail}
            </div>
            <div className="signature-block">
              <div className="signature-name">{certificate.signatureName}</div>
              <div
                className="signature-line"
                style={{ width: signatureWidth }}
              ></div>
              <div className="signature-title">Authorized Signature</div>
            </div>
          </div>
        </div>
      </div>

      <button className="download-btn" onClick={handleDownload}>
        Download Certificate
      </button>

      <div className="alt-template-note">
        <p>
          💡 Not happy with this template?{" "}
          <Link to={`/choose-template/${certificate._id}`}>
            Click here to try a different design.
          </Link>
        </p>
      </div>
    </div>
  );
};

export default CertificateViewer;
