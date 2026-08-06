import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { 
  FaBriefcase, 
  FaLaptopCode, 
  FaBitcoin, 
  FaRobot, 
  FaMoneyBillWave, 
  FaCreditCard, 
  FaLightbulb 
} from 'react-icons/fa';

const categories = [
  {
    id: 1,
    title: 'Freelancing',
    subtitle: '120+ Articles',
    icon: <FaBriefcase size={22} />,
    iconBg: '#E6F9F0',
    iconColor: '#10B981',
  },
  {
    id: 2,
    title: 'Remote Jobs',
    subtitle: '90+ Articles',
    icon: <FaLaptopCode size={22} />,
    iconBg: '#EBF5FF',
    iconColor: '#3B82F6',
  },
  {
    id: 3,
    title: 'Crypto',
    subtitle: '80+ Articles',
    icon: <FaBitcoin size={22} />,
    iconBg: '#FFF3EB',
    iconColor: '#F97316',
  },
  {
    id: 4,
    title: 'AI Tools',
    subtitle: '70+ Articles',
    icon: <FaRobot size={22} />,
    iconBg: '#F3E8FF',
    iconColor: '#8B5CF6',
  },
  {
    id: 5,
    title: 'Online Income',
    subtitle: '110+ Articles',
    icon: <FaMoneyBillWave size={22} />,
    iconBg: '#E6F9F0',
    iconColor: '#10B981',
  },
  {
    id: 6,
    title: 'Payoneer',
    subtitle: 'Guides',
    icon: <FaCreditCard size={22} />,
    iconBg: '#FCE7F3',
    iconColor: '#EC4899',
  },
  {
    id: 7,
    title: 'Make Money',
    subtitle: 'Ideas & Tips',
    icon: <FaLightbulb size={22} />,
    iconBg: '#FEF3C7',
    iconColor: '#F59E0B',
  },
];

const Category = () => {
  return (
    <section className="py-4">
      <Container>
        <Row className="g-3 row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-xl-7">
          {categories.map((cat) => (
            <Col key={cat.id}>
              <Card className="category-card h-100 border-0 shadow-sm rounded-4 p-2 transition-all">
                <Card.Body className="d-flex align-items-center gap-3 p-2">
                  {/* Icon Box with Custom Rounded Background */}
                  <div
                    className="d-flex align-items-center justify-content-center flex-shrink-0"
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '14px',
                      backgroundColor: cat.iconBg,
                      color: cat.iconColor,
                    }}
                  >
                    {cat.icon}
                  </div>

                  {/* Text Details */}
                  <div className="overflow-hidden">
                    <h6 className="fw-bold mb-0 text-dark text-truncate fs-6">
                      {cat.title}
                    </h6>
                    <small className="text-muted fw-medium d-block text-truncate" style={{ fontSize: '12px' }}>
                      {cat.subtitle}
                    </small>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Category;