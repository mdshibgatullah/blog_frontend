import React from 'react';
import { Row, Col, Button, Container, Card } from 'react-bootstrap';
import { FaArrowRight, FaRedoAlt, FaChartLine, FaWallet, FaShieldAlt, FaClock, FaGlobe } from 'react-icons/fa';
import cryptoBg from '../assets/cripto.png'; 
import Layouts from './Layouts';
import Sidebar from './Sidebar';
import Articles from './Articles';




const Crypto = () => {
  return (
    <Layouts>
      <div className="position-relative overflow-hidden d-flex align-items-center justify-content-center py-5">
      
      {/* Background Image */}
      <img 
        src={cryptoBg} 
        alt="Crypto Background" 
        className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
      />

      {/* Hero Content */}
      <div className="text-center position-relative px-3">
        <h1 className="fw-bold text-dark display-5 mb-3">
          Crypto Made Simple
        </h1>
        <p className="text-secondary fs-5 mb-4 mx-auto col-11 col-md-10">
          Explore the world of crypto, track market trends, and invest in the future with confidence.
        </p>

        {/* Stats Section */}
        <Row className="justify-content-center align-items-center g-3 mt-2">
          
          <Col xs="auto">
            <div className="stat-card">
              <div className="stat-icon icon-purple">
                <FaChartLine />
              </div>
              <div className="text-start">
                <h6 className="fw-bold mb-0 text-dark">250+</h6>
                <small className="text-muted">Crypto Assets</small>
              </div>
            </div>
          </Col>

          <Col xs="auto">
            <div className="stat-card">
              <div className="stat-icon icon-green">
                <FaWallet />
              </div>
              <div className="text-start">
                <h6 className="fw-bold mb-0 text-dark">1M+</h6>
                <small className="text-muted">Users</small>
              </div>
            </div>
          </Col>

          <Col xs="auto">
            <div className="stat-card">
              <div className="stat-icon icon-blue">
                <FaShieldAlt />
              </div>
              <div className="text-start">
                <h6 className="fw-bold mb-0 text-dark">99.9%</h6>
                <small className="text-muted">Secure</small>
              </div>
            </div>
          </Col>

          <Col xs="auto">
            <div className="stat-card">
              <div className="stat-icon icon-orange">
                <FaClock />
              </div>
              <div className="text-start">
                <h6 className="fw-bold mb-0 text-dark">24/7</h6>
                <small className="text-muted">Market Tracking</small>
              </div>
            </div>
          </Col>

          <Col xs="auto">
            <div className="stat-card">
              <div className="stat-icon icon-violet">
                <FaGlobe />
              </div>
              <div className="text-start">
                <h6 className="fw-bold mb-0 text-dark">180+</h6>
                <small className="text-muted">Countries</small>
              </div>
            </div>
          </Col>

        </Row>
      </div>
    </div>


    <section className="py-5">
        <Container>
          <Row className="g-4">
            
            {/* LEFT SIDE: Latest Articles */}
            <Articles />

            {/* RIGHT SIDE: Sidebar Widgets */}
            <Sidebar />

          </Row>
        </Container>
      </section>
    </Layouts>
  );
};

export default Crypto;