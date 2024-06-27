import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            We are a leading e-commerce platform providing a wide range of products
            to cater to all your needs. Our mission is to deliver the best online
            shopping experience.
          </p>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: support@shopping.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <p>
            <a href="#">Facebook</a> | <a href="#">Twitter</a> | <a href="#">Instagram</a>
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Shopping Website. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
