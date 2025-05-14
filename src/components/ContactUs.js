import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* Contact Details + Google Map (Left) */}
        <div className="contact-left">
          <div className="contact-card">
            <h2 className="section-title">Shrash-Tech</h2>
            <p className="company-description">Empowering your business with tailored tech solutions.</p>

            <div className="contact-info">
              <p><strong>Address:</strong><br />91, MG Road, Bangalore, Karnataka, India</p>
              <p><strong>Email:</strong><br />support@shrashtech.com</p>
              <p><strong>Phone:</strong><br />+91 98765 43210</p>
              <p><strong>Working Hours:</strong><br />Mon - Fri: 9:00 AM – 6:00 PM</p>
            </div>
          </div>

          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.457472517945!2d77.60504977503417!3d12.974678387345395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670e6a3e195%3A0x9d3b52db577d50ee!2sMG%20Road%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1715685505044"
              width="100%"
              height="250"
              allowFullScreen=""
              loading="lazy"
              title="Shrash Tech Location"
            ></iframe>
          </div>
        </div>

        {/* Contact Form (Right) */}
        <div className="contact-right">
          <div className="contact-card">
            <h2 className="section-title">Send Us a Message</h2>
            <form className="contact-form">
              <input type="text" placeholder="Your Name" name="name" required />
              <input type="email" placeholder="Your Email" name="email" required />
              <input type="text" placeholder="Subject" name="subject" required />
              <textarea placeholder="Your Message" rows="6" name="message" required></textarea>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
