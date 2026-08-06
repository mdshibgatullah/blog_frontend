import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';
import background from '../../assets/background.png';
import heroImg from '../../assets/hero.png';

const Hero = () => {
  return (
    <section 
      className="w-100 py-5" 
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100vw'
      }}
    >
      <Container>
        <Row className="align-items-center flex-column-reverse flex-lg-row gy-5">
          
          {/* Left Side: Content */}
          <Col lg={6} className="text-start">
            <span className="badge-custom mb-3">LATEST GUIDE</span>
            
            <h1 className="fw-extrabold display-5 text-dark mb-3" style={{ fontWeight: 800, lineHeight: 1.2 }}>
              How to Start Freelancing and Earn <span className="highlight-text">$1000/Month</span>
            </h1>
            
            <p className="text-muted fs-5 mb-4" style={{ maxWidth: '480px' }}>
              A complete roadmap for beginners to start freelancing, find clients, and grow your online income.
            </p>
            
            <div className="d-flex flex-wrap gap-3 mb-4">
              <Button className="btn-primary-custom d-flex align-items-center gap-2">
                Read Full Guide <FaArrowRight size={16} />
              </Button>
              <Button className="btn-outline-custom">
                Browse All Articles
              </Button>
            </div>

            {/* Social Proof Avatars */}
            <div className="d-flex align-items-center gap-3 pt-2">
              <div className="d-flex align-items-center">
                <img 
                  src="https://i.pravatar.cc/40?img=1" 
                  alt="user" 
                  className="rounded-circle border border-2 border-white" 
                  style={{ width: '36px', height: '36px', marginRight: '-10px' }} 
                />
                <img 
                  src="https://i.pravatar.cc/40?img=2" 
                  alt="user" 
                  className="rounded-circle border border-2 border-white" 
                  style={{ width: '36px', height: '36px', marginRight: '-10px' }} 
                />
                <img 
                  src="https://i.pravatar.cc/40?img=3" 
                  alt="user" 
                  className="rounded-circle border border-2 border-white" 
                  style={{ width: '36px', height: '36px', marginRight: '-10px' }} 
                />
                <img 
                  src="https://i.pravatar.cc/40?img=4" 
                  alt="user" 
                  className="rounded-circle border border-2 border-white" 
                  style={{ width: '36px', height: '36px', marginRight: '-10px' }} 
                />
                <img 
                  src="https://i.pravatar.cc/40?img=5" 
                  alt="user" 
                  className="rounded-circle border border-2 border-white" 
                  style={{ width: '36px', height: '36px' }} 
                />
              </div>
              <div className="text-muted small fw-semibold">
                Join <span className="text-dark fw-bold">25,000+ learners</span> <br />
                and earners growing together
              </div>
            </div>
          </Col>

          {/* Right Side: Hero Image (Responsive: Screen soto hole upore chole jabe) */}
          <Col lg={6} className="text-center">
            <img 
              src={heroImg} 
              alt="Freelancer working on laptop" 
              className="img-fluid"
              style={{ maxHeight: '480px', objectFit: 'contain' }}
            />
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default Hero;