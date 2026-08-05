import React from 'react';
import { Container, Row, Col, Card, Form, Button, Badge } from 'react-bootstrap';
import { FaArrowRight, FaRedoAlt, FaFire, FaTag, FaBookOpen, FaBook, FaStar } from 'react-icons/fa';
import Sidebar from './Sidebar';
import Layouts from './Layouts';
import freelancingBg from '../assets/freelancing.png'; 
import Articles from './Articles';



const Freelancing = () => {
  return (
    <Layouts>

      <div className="position-relative overflow-hidden d-flex align-items-center justify-content-center py-5">
      
      {/* Background Image */}
      <img 
        src={freelancingBg} 
        alt="Freelancing Background" 
        className=" position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
      />

      {/* Hero Content */}
      <div className="text-center position-relative px-3">
        <h1 className="fw-bold text-dark display-5 mb-3">
          Freelancing
        </h1>
        <p className="text-secondary fs-5 mb-4 mx-auto col-11 col-md-10">
          Master freelancing skills, find clients, and grow your independent career.
        </p>

        {/* Stats Section */}
        <Row className="justify-content-center align-items-center g-3 mt-2">
          
          <Col xs="auto">
            <div className="stat-card">
              <div className="stat-icon icon-purple">
                <FaBookOpen />
              </div>
              <div className="text-start">
                <h6 className="fw-bold mb-0 text-dark">120+</h6>
                <small className="text-muted">Articles</small>
              </div>
            </div>
          </Col>

          <Col xs="auto">
            <div className="stat-card">
              <div className="stat-icon icon-green">
                <FaBook />
              </div>
              <div className="text-start">
                <h6 className="fw-bold mb-0 text-dark">25K+</h6>
                <small className="text-muted">Readers</small>
              </div>
            </div>
          </Col>

          <Col xs="auto">
            <div className="stat-card">
              <div className="stat-icon icon-yellow">
                <FaStar />
              </div>
              <div className="text-start">
                <h6 className="fw-bold mb-0 text-dark">4.8</h6>
                <small className="text-muted">Avg. Rating</small>
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

export default Freelancing;