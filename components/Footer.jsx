import React from 'react';

const Footer = () => {
  const facebookPlaceholder = "https://via.placeholder.com/24";
  const twitterPlaceholder = "https://via.placeholder.com/24";
  const youtubePlaceholder = "https://via.placeholder.com/24";
  const instagramPlaceholder = "https://via.placeholder.com/24";
  const linkedinPlaceholder = "https://via.placeholder.com/24";

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-column">
          <h3>Help</h3>
          <ul>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Shop</h3>
          <ul>
            <li><a href="#">New Arrivals</a></li>
            <li><a href="#">Best Sellers</a></li>
            <li><a href="#">Sale</a></li>
            <li><a href="#">Gift Cards</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>About Us</h3>
          <ul>
            <li><a href="#">Our Story</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="social-links">
          <a href="#"><img src={facebookPlaceholder} alt="Facebook" /></a>
          <a href="#"><img src={twitterPlaceholder} alt="Twitter" /></a>
          <a href="#"><img src={youtubePlaceholder} alt="YouTube" /></a>
          <a href="#"><img src={instagramPlaceholder} alt="Instagram" /></a>
          <a href="#"><img src={linkedinPlaceholder} alt="LinkedIn" /></a>
        </div>
        <address>
          1234 Example St, City, State, 12345<br />
          (123) 456-7890
        </address>
      </div>
    </footer>
  );
};

export default Footer;