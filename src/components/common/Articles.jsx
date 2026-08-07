import React from 'react';
import { Col, Card, Button, Row,  } from 'react-bootstrap';
import { FaArrowRight, FaRedoAlt, FaFire, FaTag } from 'react-icons/fa';
import { Link } from 'react-router-dom';

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



const Articles = () => {
  return (


    <Col lg={8}>
            <Card className="border rounded-4 p-3 mb-4 bg-white shadow-sm">
              <div className="d-flex justify-content-between align-items-center mb-4">
              <h4 className="fw-bold m-0 text-dark">Latest Articles</h4>
              <Link to="#all-articles" className="text-primary fw-semibold text-decoration-none d-flex align-items-center gap-1">
                View All Articles <FaArrowRight size={12} />
              </Link>
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
                        <Link to="/article">{article.title}</Link>
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
            </Card>
          </Col>
  );
};

export default Articles;