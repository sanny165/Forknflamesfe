import React from 'react';
import './Contactus.css';

const ContactUs = () => {
  return (
    <div className="contactus-container">
      <h2>Contact Us</h2>
      <p><strong>Address:</strong> 123 Flavor Street, Bangalore, India</p>
      <p><strong>Phone:</strong> +91-9876543210</p>
      <p><strong>Email:</strong> support@forknflame.com</p>
      <iframe
        src="https://www.google.com/maps/embed?..."
        width="100%"
        height="300"
        allowFullScreen=""
        loading="lazy"
        title="Fork & Flame Map"
      ></iframe>
    </div>
  );
};

export default ContactUs;
