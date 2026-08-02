import React from 'react';
import { Container, Row, Col, Card, Form, Button, Badge } from 'react-bootstrap';
import { FaArrowRight, FaRedoAlt, FaFire, FaTag } from 'react-icons/fa';

// Sample Data for Latest Articles
const latestArticles = [
  {
    id: 1,
    category: 'FREELANCING',
    categoryColor: '#EDE9FE',
    categoryTextColor: '#5833EF',
    title: 'Upwork Proposal Writing: Get 90% More Replies',
    desc: 'Learn how to write winning proposals that get clients to reply and hire you.',
    date: 'May 15, 2024',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&auto=format&fit=crop&q=60',
  },
  {
    id: 2,
    category: 'REMOTE JOBS',
    categoryColor: '#E0F2FE',
    categoryTextColor: '#0284C7',
    title: 'Top 10 Remote Job Websites to Find Legit Jobs',
    desc: 'Find the best platforms to discover remote jobs and work from anywhere.',
    date: 'May 14, 2024',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format&fit=crop&q=60',
  },
  {
    id: 3,
    category: 'CRYPTO',
    categoryColor: '#FFEDD5',
    categoryTextColor: '#EA580C',
    title: "What is Bitcoin? A Beginner's Guide to Crypto",
    desc: 'Understand Bitcoin, blockchain, and how to get started safely.',
    date: 'May 13, 2024',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&auto=format&fit=crop&q=60',
  },
  {
    id: 4,
    category: 'AI TOOLS',
    categoryColor: '#F3E8FF',
    categoryTextColor: '#9333EA',
    title: 'Best AI Tools for Content Writing in 2024',
    desc: 'Boost your writing productivity with these powerful AI tools.',
    date: 'May 12, 2024',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&auto=format&fit=crop&q=60',
  },
  {
    id: 5,
    category: 'ONLINE INCOME',
    categoryColor: '#DCFCE7',
    categoryTextColor: '#16A34A',
    title: 'How to Earn Money with YouTube Without Showing Your Face',
    desc: 'Step-by-step guide to start a faceless YouTube channel and earn.',
    date: 'May 11, 2024',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=500&auto=format&fit=crop&q=60',
  },
];

// Sample Data for Popular This Week
const popularArticles = [
  {
    id: 1,
    title: 'How to Create a Payoneer Account in Bangladesh',
    date: 'May 13, 2024',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=150&auto=format&fit=crop&q=60',
  },
  {
    id: 2,
    title: 'ChatGPT for Freelancers: 10 Ways to Boost Productivity',
    date: 'May 12, 2024',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=150&auto=format&fit=crop&q=60',
  },
  {
    id: 3,
    title: 'Best AI Tools Every Freelancer Should Use in 2024',
    date: 'May 11, 2024',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=150&auto=format&fit=crop&q=60',
  },
  {
    id: 4,
    title: 'How to Earn Money with YouTube Without Showing Your Face',
    date: 'May 10, 2024',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=150&auto=format&fit=crop&q=60',
  },
  {
    id: 5,
    title: 'Top 5 Crypto Wallets for Beginners',
    date: 'May 9, 2024',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=150&auto=format&fit=crop&q=60',
  },
];

// Trending Topics List
const trendingTopics = [
  'How to Start Freelancing in 2024',
  'Best AI Tools for Freelancers',
  'Payoneer to bKash Withdraw',
  'Remote Jobs for Beginners',
  'How to Invest in Cryptocurrency',
];

// Popular Tags List
const popularTags = [
  'Freelancing', 'Remote Jobs', 'Upwork', 'Fiverr', 'Payoneer',
  'Crypto', 'AI Tools', 'ChatGPT', 'Online Income', 'Make Money'
];

const Articles = () => {
  return (
    <section className="py-4">
      <Container>
        <Row className="g-4">
          
          {/* LEFT SIDE: Latest Articles */}
          <Col lg={8}>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h4 className="fw-bold m-0 text-dark">Latest Articles</h4>
              <a href="#all-articles" className="text-primary fw-semibold text-decoration-none d-flex align-items-center gap-1">
                View All Articles <FaArrowRight size={12} />
              </a>
            </div>

            {/* Article Cards Container */}
            <div className="d-flex flex-column gap-4">
              {latestArticles.map((article) => (
                <div key={article.id} className="pb-4 border-bottom">
                  <Row className="g-3 align-items-center">
                    <Col md={4}>
                      <img 
                        src={article.image} 
                        alt={article.title} 
                        className="w-100 rounded-3 object-fit-cover"
                        style={{ height: '150px' }}
                      />
                    </Col>
                    <Col md={8}>
                      <span 
                        className="badge fw-bold mb-2" 
                        style={{ 
                          backgroundColor: article.categoryColor, 
                          color: article.categoryTextColor,
                          fontSize: '11px',
                          letterSpacing: '0.5px'
                        }}
                      >
                        {article.category}
                      </span>
                      <h5 className="fw-bold text-dark mb-2 style-title cursor-pointer">
                        {article.title}
                      </h5>
                      <p className="text-muted small mb-2 line-clamp-2">
                        {article.desc}
                      </p>
                      <small className="text-muted fw-medium" style={{ fontSize: '12px' }}>
                        {article.date} &bull; {article.readTime}
                      </small>
                    </Col>
                  </Row>
                </div>
              ))}
            </div>

            {/* Load More Button */}
            <div className="mt-4">
              <Button variant="outline-light" className="w-100 text-dark fw-semibold border py-2 d-flex align-items-center justify-content-center gap-2 rounded-3 hover-shadow">
                Load More Articles <FaRedoAlt size={14} />
              </Button>
            </div>
          </Col>

          {/* RIGHT SIDE: Sidebar Widgets */}
          <Col lg={4}>
            
            {/* Widget 1: Popular This Week */}
            <Card className="border rounded-4 p-3 mb-4 bg-white shadow-sm">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h6 className="fw-bold m-0 text-dark">Popular This Week</h6>
                <a href="#popular" className="text-primary fw-semibold small text-decoration-none d-flex align-items-center gap-1">
                  View All <FaArrowRight size={10} />
                </a>
              </div>

              <div className="d-flex flex-column gap-3">
                {popularArticles.map((item, index) => (
                  <div key={item.id} className="d-flex align-items-center gap-3 position-relative">
                    {/* Number Badge Over Image */}
                    <div className="position-relative flex-shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="rounded-3 object-fit-cover"
                        style={{ width: '64px', height: '64px' }}
                      />
                      <span 
                        className="position-absolute top-0 start-0 translate-middle badge rounded-circle bg-primary"
                        style={{ width: '22px', height: '22px', fontSize: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                      >
                        {index + 1}
                      </span>
                    </div>

                    <div>
                      <h6 className="fw-bold text-dark mb-1 small text-truncate-2 cursor-pointer" style={{ fontSize: '13px', lineHeight: '1.3' }}>
                        {item.title}
                      </h6>
                      <small className="text-muted" style={{ fontSize: '11px' }}>
                        {item.date} &bull; {item.readTime}
                      </small>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Widget 2: Stay Updated / Newsletter */}
            <Card className="border rounded-4 p-3 mb-4 bg-white shadow-sm">
              <div className="d-flex align-items-start gap-3 mb-2">
                <div className="p-2 rounded-3 bg-light text-primary flex-shrink-0">
                  <FaTag size={18} />
                </div>
                <div>
                  <h6 className="fw-bold mb-1 text-dark">Stay Updated</h6>
                  <p className="text-muted mb-0" style={{ fontSize: '12px' }}>
                    Get the latest tips, jobs, and updates straight to your inbox.
                  </p>
                </div>
              </div>

              <Form className="mt-3">
                <Form.Group className="mb-2">
                  <Form.Control 
                    type="email" 
                    placeholder="Enter your email" 
                    className="bg-light border-0 py-2 fs-6"
                    style={{ fontSize: '13px' }}
                  />
                </Form.Group>
                <Button className="btn-primary-custom w-100 py-2 fw-semibold" style={{ fontSize: '14px' }}>
                  Subscribe Now
                </Button>
              </Form>
            </Card>

            {/* Widget 3: Trending Topics */}
            <Card className="border rounded-4 p-3 mb-4 bg-white shadow-sm">
              <div className="d-flex align-items-center gap-2 mb-3">
                <FaFire className="text-danger" size={18} />
                <h6 className="fw-bold m-0 text-dark">Trending Topics</h6>
              </div>

              <div className="d-flex flex-column gap-2">
                {trendingTopics.map((topic, i) => (
                  <div key={i} className="d-flex align-items-center gap-3 py-1 cursor-pointer hover-text-primary">
                    <span className="fw-bold text-muted small">{i + 1}</span>
                    <span className="fw-medium text-dark small" style={{ fontSize: '13px' }}>{topic}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Widget 4: Popular Tags */}
            <Card className="border rounded-4 p-3 bg-white shadow-sm">
              <div className="d-flex align-items-center gap-2 mb-3">
                <FaTag className="text-primary" size={16} />
                <h6 className="fw-bold m-0 text-dark">Popular Tags</h6>
              </div>

              <div className="d-flex flex-wrap gap-2">
                {popularTags.map((tag, i) => (
                  <span 
                    key={i} 
                    className="badge bg-light text-dark border fw-normal py-2 px-3 rounded-3 cursor-pointer hover-tag"
                    style={{ fontSize: '12px' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Card>

          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default Articles;