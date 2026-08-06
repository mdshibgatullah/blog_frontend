import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-light pt-5 mt-5 border-top">
      {/* Top Footer Main Links Section */}
      <Container className="pb-5">
        <Row className="g-4">
          
          {/* Column 1: Brand Info & Social Icons */}
          <Col lg={3} md={6}>
            <div className="d-flex align-items-center mb-3">
              <img src={logo} alt="Blogora Logo" height="36" />
            </div>
            <p className="text-muted small mb-4" style={{ lineHeight: '1.6', fontSize: '14px' }}>
              Your go-to platform to learn freelancing, find remote jobs, explore crypto, AI tools, and ways to earn online.
            </p>
            
            {/* Social Icons */}
            <div className="d-flex gap-2">
              <a href="#facebook" className="social-icon-btn">
                <FaFacebookF size={14} />
              </a>
              <a href="#twitter" className="social-icon-btn">
                <FaTwitter size={14} />
              </a>
              <a href="#instagram" className="social-icon-btn">
                <FaInstagram size={14} />
              </a>
              <a href="#youtube" className="social-icon-btn">
                <FaYoutube size={14} />
              </a>
              <a href="#linkedin" className="social-icon-btn">
                <FaLinkedinIn size={14} />
              </a>
            </div>
          </Col>

          {/* Column 2: Quick Links */}
          <Col lg={2} md={6} sm={6}>
            <h6 className="fw-bold text-dark mb-3">Quick Links</h6>
            <ul className="list-unstyled d-flex flex-column gap-2 small text-muted">
              <li><a href="#home" className="footer-link">Home</a></li>
              <li><a href="#about" className="footer-link">About Us</a></li>
              <li><a href="#categories" className="footer-link">All Categories</a></li>
              <li><a href="#sitemap" className="footer-link">Sitemap</a></li>
              <li><a href="#privacy" className="footer-link">Privacy Policy</a></li>
              <li><a href="#terms" className="footer-link">Terms of Service</a></li>
            </ul>
          </Col>

          {/* Column 3: Categories */}
          <Col lg={2} md={6} sm={6}>
            <h6 className="fw-bold text-dark mb-3">Categories</h6>
            <ul className="list-unstyled d-flex flex-column gap-2 small text-muted">
              <li><a href="#freelancing" className="footer-link">Freelancing</a></li>
              <li><a href="#remote-jobs" className="footer-link">Remote Jobs</a></li>
              <li><a href="#crypto" className="footer-link">Crypto</a></li>
              <li><a href="#ai-tools" className="footer-link">AI Tools</a></li>
              <li><a href="#online-income" className="footer-link">Online Income</a></li>
              <li><a href="#payoneer" className="footer-link">Payoneer Guides</a></li>
            </ul>
          </Col>

          {/* Column 4: Resources */}
          <Col lg={2} md={6} sm={6}>
            <h6 className="fw-bold text-dark mb-3">Resources</h6>
            <ul className="list-unstyled d-flex flex-column gap-2 small text-muted">
              <li><a href="#blog" className="footer-link">Blog</a></li>
              <li><a href="#guides" className="footer-link">Guides</a></li>
              <li><a href="#tools" className="footer-link">Tools</a></li>
              <li><a href="#templates" className="footer-link">Templates</a></li>
              <li><a href="#courses" className="footer-link">Courses</a></li>
              <li><a href="#submit" className="footer-link">Submit Article</a></li>
            </ul>
          </Col>

          {/* Column 5: Contact Us */}
          <Col lg={3} md={6} sm={6}>
            <h6 className="fw-bold text-dark mb-3">Contact Us</h6>
            <ul className="list-unstyled d-flex flex-column gap-2 small text-muted mb-0">
              <li><strong className="text-dark">Email:</strong> hello@blogora.com</li>
              <li><strong className="text-dark">Phone:</strong> +880 1234-567890</li>
              <li><strong className="text-dark">Address:</strong> Dhaka, Bangladesh</li>
            </ul>
          </Col>

        </Row>
      </Container>

      {/* Bottom Footer Bar */}
      <div style={{ backgroundColor: '#0F172A', color: '#94A3B8' }} className="py-3">
        <Container>
          <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center gap-2 small">
            <div>
              &copy; 2026 Blogora. All rights reserved.
            </div>
            <div className="d-flex gap-4">
              <a href="#privacy" className="bottom-link">Privacy Policy</a>
              <a href="#terms" className="bottom-link">Terms of Service</a>
              <a href="#disclaimer" className="bottom-link">Disclaimer</a>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;