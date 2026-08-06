import React from 'react';
import { Col, Card, Badge, Container, Row } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaLink, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Sidebar from './Sidebar';
import Layouts from './Layouts';

const SingleArticle = () => {
  return (
    <Layouts>
      <section className="py-4">
        <Container>
          <Row className="g-4">

            {/* Breadcrumb Navigation */}
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb small text-muted mb-0">
                  <li className="breadcrumb-item">
                    <a href="#home" className="text-decoration-none text-muted">Home</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#freelancing" className="text-decoration-none text-muted">Freelancing</a>
                  </li>
                  <li className="breadcrumb-item active text-truncate" aria-current="page" style={{ maxWidth: '250px' }}>
                    Upwork Proposal Writing: Get 90% More Replies
                  </li>
                </ol>
              </nav>

            {/* LEFT SIDE: Latest Articles */}
            <Col lg={8} className="mb-4">
              

              <Card className="border rounded-4 p-3 p-md-4 bg-white shadow-sm">
                {/* Category Badge */}
                <div>
                  <Badge bg="primary" className="bg-opacity-10 text-primary fw-semibold px-3 py-2 rounded-2 mb-3" style={{ fontSize: '12px' }}>
                    FREELANCING
                  </Badge>
                </div>

                {/* Title */}
                <h1 className="fw-bold text-dark mb-4 display-6" style={{ lineHeight: '1.2' }}>
                  Upwork Proposal Writing: <br />
                  Get 90% More Replies
                </h1>

                {/* Author Meta Info */}
                <div className="d-flex align-items-center gap-3 mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" 
                    alt="Mehedi Hasan" 
                    className="rounded-circle object-fit-cover"
                    style={{ width: '40px', height: '40px' }}
                  />
                  <div className="small">
                    <span className="fw-bold text-dark d-block">By Mehedi Hasan</span>
                    <span className="text-muted" style={{ fontSize: '12px' }}>May 15, 2024 &bull; 5 min read</span>
                  </div>
                </div>

                {/* Main Cover Image */}
                <div className="mb-4 rounded-4 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format&fit=crop&q=60" 
                    alt="Freelancer working on laptop" 
                    className="img-fluid w-100 object-fit-cover rounded-4"
                    style={{ maxHeight: '420px' }}
                  />
                </div>

                {/* Article Body Content */}
                <div className="article-body text-dark" style={{ lineHeight: '1.8', fontSize: '15px' }}>
                  <p>
                    Writing a winning Upwork proposal is both an art and a science. Freelancers often spend hours finding the right job but get disappointed when clients don't reply. The truth? It's not about luck — it's about strategy.
                  </p>
                  <p className="mb-4">
                    In this guide, I'll share proven techniques to help you write proposals that stand out and get 90% more replies.
                  </p>

                  {/* Section 1 */}
                  <h5 className="fw-bold text-dark mt-4 mb-2">1. Understand the Client's Needs</h5>
                  <p>
                    Before writing a single word, read the job post carefully. Identify the client's pain points, requirements, and what they really want. Show them in your proposal that you truly understand their needs.
                  </p>
                  
                  {/* Quote Block */}
                  <div className="p-3 my-3 border-start border-primary border-4 bg-light rounded-end" style={{ backgroundColor: '#F8FAFC' }}>
                    <p className="mb-0 text-muted fst-italic small">
                      "Clients love freelancers who listen and understand."
                    </p>
                  </div>

                  {/* Section 2 */}
                  <h5 className="fw-bold text-dark mt-4 mb-2">2. Start with a Strong Opening</h5>
                  <p>
                    Your first two lines decide whether the client will read more or skip your proposal. Personalize your opening and mention something specific about their project.
                  </p>

                  {/* Example Box */}
                  <div className="p-3 mb-4 rounded-3" style={{ backgroundColor: '#EEF2FF' }}>
                    <span className="fw-bold text-primary small d-block mb-1">Example:</span>
                    <p className="mb-0 text-secondary small fst-italic">
                      "I noticed you need a Frontend developer who can build a fast, responsive website. I've helped similar businesses like yours increase speed by 40%."
                    </p>
                  </div>

                  {/* Section 3 */}
                  <h5 className="fw-bold text-dark mt-4 mb-2">3. Highlight Relevant Experience</h5>
                  <p>
                    Don't just list your skills. Share relevant experience with results. Use numbers and outcomes to build trust.
                  </p>

                  {/* Section 4 */}
                  <h5 className="fw-bold text-dark mt-4 mb-2">4. Keep It Short and Clear</h5>
                  <p>
                    Clients get tons of proposals. Keep yours concise, focused, and easy to read. Avoid long paragraphs.
                  </p>

                  {/* Section 5 */}
                  <h5 className="fw-bold text-dark mt-4 mb-2">5. End with a Call to Action</h5>
                  <p>
                    Always end your proposal with a question or suggestion that encourages the client to reply.
                  </p>

                  {/* Pro Tip Box */}
                  <div className="p-3 my-4 rounded-3 border-start border-success border-4" style={{ backgroundColor: '#F0FDF4' }}>
                    <span className="fw-bold text-success small d-block mb-1">💡 Pro Tip:</span>
                    <p className="mb-0 text-muted small">
                      Save time by creating proposal templates and customizing them for each job. <br />
                      <strong>Consistency + Personalization = More Replies!</strong>
                    </p>
                  </div>

                  <p className="mt-4">
                    Follow these steps consistently and you'll see a huge difference in your reply rate. Happy freelancing! 🚀
                  </p>
                </div>

                {/* Share Section */}
                <div className="d-flex align-items-center justify-content-end gap-3 my-4 pt-3 border-top">
                  <span className="small text-muted fw-semibold">Share this article</span>
                  <div className="d-flex gap-2">
                    <button className="btn btn-light rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px' }}>
                      <FaFacebookF size={12} className="text-secondary" />
                    </button>
                    <button className="btn btn-light rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px' }}>
                      <FaTwitter size={12} className="text-secondary" />
                    </button>
                    <button className="btn btn-light rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px' }}>
                      <FaLinkedinIn size={12} className="text-secondary" />
                    </button>
                    <button className="btn btn-light rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px' }}>
                      <FaLink size={12} className="text-secondary" />
                    </button>
                  </div>
                </div>

                {/* Bottom Pagination Links (Previous & Next Article) */}
                <div className="p-3 rounded-4 bg-light d-flex flex-column flex-sm-row justify-content-between align-items-center gap-3 mt-2">
                  
                  {/* Previous Post */}
                  <div className="d-flex align-items-center gap-3 cursor-pointer w-100 w-sm-auto">
                    <img 
                      src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=100&auto=format&fit=crop&q=60" 
                      alt="Previous Article" 
                      className="rounded-3 object-fit-cover flex-shrink-0"
                      style={{ width: '56px', height: '56px' }}
                    />
                    <div>
                      <span className="text-muted d-flex align-items-center gap-1" style={{ fontSize: '11px' }}>
                        <FaArrowLeft size={9} /> Previous Article
                      </span>
                      <h6 className="fw-bold text-dark m-0 small text-truncate" style={{ maxWidth: '180px' }}>
                        Best AI Tools for Content Writing in 2024
                      </h6>
                    </div>
                  </div>

                  <div className="vr d-none d-sm-block my-2" />

                  {/* Next Post */}
                  <div className="d-flex align-items-center gap-3 text-end cursor-pointer w-100 w-sm-auto justify-content-end">
                    <div>
                      <span className="text-muted d-flex align-items-center justify-content-end gap-1" style={{ fontSize: '11px' }}>
                        Next Article <FaArrowRight size={9} />
                      </span>
                      <h6 className="fw-bold text-dark m-0 small text-truncate" style={{ maxWidth: '180px' }}>
                        Top 10 Remote Job Websites to Find Legit Jobs
                      </h6>
                    </div>
                    <img 
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=100&auto=format&fit=crop&q=60" 
                      alt="Next Article" 
                      className="rounded-3 object-fit-cover flex-shrink-0"
                      style={{ width: '56px', height: '56px' }}
                    />
                  </div>

                </div>

              </Card>
            </Col>

            {/* RIGHT SIDE: Sidebar Widgets */}           
                <Sidebar />
          </Row>
        </Container>
      </section>
    </Layouts>
  );
};

export default SingleArticle;