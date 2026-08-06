import React from 'react';
import { Container, Row, Col, Card, Form, Button, Badge } from 'react-bootstrap';
import { FaArrowRight, FaRedoAlt, FaFire, FaTag, FaBookOpen, FaBook, FaStar, FaBriefcase, FaBuilding, FaThLarge, FaGlobe } from 'react-icons/fa';
import Sidebar from './common/Sidebar';
import Layouts from './common/Layouts';
import remoteBg from '../assets/remote.png'; 
import Articles from './common/Articles';




const Remote = () => {
  return (
    <Layouts>
      <div className="position-relative overflow-hidden d-flex align-items-center justify-content-center py-5">
      
        {/* Background Image */}
        <img 
          src={remoteBg} 
          alt="Remote Jobs Background" 
          className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
        />

        {/* Hero Content */}
        <div className="text-center position-relative px-3">
          <h1 className="fw-bold text-dark display-5 mb-3">
            Remote Jobs
          </h1>
          <p className="text-secondary fs-5 mb-4 mx-auto col-11 col-md-10">
            Discover hand-picked remote jobs from top companies and work from anywhere in the world.
          </p>

          {/* Stats Section */}
          <Row className="justify-content-center align-items-center g-3 mt-2">
            
            <Col xs="auto">
              <div className="stat-card">
                <div className="stat-icon icon-purple">
                  <FaBriefcase />
                </div>
                <div className="text-start">
                  <h6 className="fw-bold mb-0 text-dark">600+</h6>
                  <small className="text-muted">Active Jobs</small>
                </div>
              </div>
            </Col>

            <Col xs="auto">
              <div className="stat-card">
                <div className="stat-icon icon-green">
                  <FaBuilding />
                </div>
                <div className="text-start">
                  <h6 className="fw-bold mb-0 text-dark">120+</h6>
                  <small className="text-muted">Companies</small>
                </div>
              </div>
            </Col>

            <Col xs="auto">
              <div className="stat-card">
                <div className="stat-icon icon-blue">
                  <FaThLarge />
                </div>
                <div className="text-start">
                  <h6 className="fw-bold mb-0 text-dark">40+</h6>
                  <small className="text-muted">Categories</small>
                </div>
              </div>
            </Col>

            <Col xs="auto">
              <div className="stat-card">
                <div className="stat-icon icon-purple">
                  <FaGlobe />
                </div>
                <div className="text-start">
                  <h6 className="fw-bold mb-0 text-dark">100%</h6>
                  <small className="text-muted">Remote</small>
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

export default Remote;