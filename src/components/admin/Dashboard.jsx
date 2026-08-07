import React, { useContext, useState } from 'react';
import { Row, Col, Card, Table, Badge, Form, Button, Dropdown } from 'react-bootstrap';
import { 
  FaThLarge, FaFileAlt, FaFolder, FaTags, FaPhotoVideo, FaCopy, 
  FaComments, FaUsers, FaEnvelope, FaAd, FaChartLine, FaSearch, 
  FaCog, FaUser, FaExternalLinkAlt, FaBell, FaPlus, FaUpload, 
  FaPlusSquare, FaEye, FaEdit, FaTrash, FaArrowUp, FaArrowRight,
  FaUserPlus, FaCommentAlt, FaChevronDown, FaSignOutAlt
} from 'react-icons/fa';

import logo from '../../assets/logo.png';
import { AdminAuthContext } from '../context/AdminAuth';

const Dashboard = () => {
  const {logout} = useContext(AdminAuthContext)
  return (
    <div className="d-flex dashboard-wrapper">
      
      {/* ================= SIDEBAR ================= */}
      <aside className="sidebar d-flex flex-column justify-content-between p-3">
        <div>
          {/* Logo Only (Text removed) */}
          <div className="d-flex align-items-center mb-4 px-2 pt-2">
            <img src={logo} alt="Logo" height={40} />
          </div>

          {/* Navigation Links */}
          <nav className="sidebar-menu overflow-y-auto" style={{ maxHeight: 'calc(100vh - 160px)' }}>
            <a href="#dashboard" className="nav-item-link active"><FaThLarge /> Dashboard</a>
            <a href="#posts" className="nav-item-link"><FaFileAlt /> Posts</a>
            <a href="#categories" className="nav-item-link"><FaFolder /> Categories</a>
            <a href="#tags" className="nav-item-link"><FaTags /> Tags</a>
            <a href="#media" className="nav-item-link"><FaPhotoVideo /> Media Library</a>
            <a href="#pages" className="nav-item-link"><FaCopy /> Pages</a>
            <a href="#comments" className="nav-item-link"><FaComments /> Comments</a>
            <a href="#users" className="nav-item-link"><FaUsers /> Users</a>
            <a href="#newsletter" className="nav-item-link"><FaEnvelope /> Newsletter</a>
            <a href="#ads" className="nav-item-link"><FaAd /> Ads</a>
            <a href="#analytics" className="nav-item-link"><FaChartLine /> Analytics</a>
            <a href="#seo" className="nav-item-link"><FaSearch /> SEO</a>
            <a href="#settings" className="nav-item-link"><FaCog /> Settings</a>
            <a href="#profile" className="nav-item-link"><FaUser /> Profile</a>
          </nav>
        </div>

        {/* View Website Button */}
        <div className="pt-3 border-top">
          <Button variant="light" className="w-100 d-flex align-items-center justify-content-between text-primary fw-semibold rounded-3 py-2 px-3 border border-light-subtle">
            <span className="d-flex align-items-center gap-2"><FaExternalLinkAlt /> View Website</span>
            <FaExternalLinkAlt size={12} />
          </Button>
        </div>
      </aside>

      {/* ================= MAIN CONTENT ================= */}
      <main className="flex-grow-1 overflow-hidden">
        
        {/* Top Header */}
        <div className="d-flex justify-content-between align-items-center bg-white p-4 border-bottom">
          <h4 className="fw-bold m-0">Dashboard</h4>

          <div className="d-flex align-items-center gap-3">
            <div className="position-relative" style={{ width: '250px' }}>
              <FaSearch className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted" />
              <Form.Control type="text" placeholder="Search..." className="search-input" />
            </div>

            <div className="position-relative bg-white p-2 rounded-circle border cursor-pointer">
              <FaBell size={16} className="text-secondary" />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-circle" style={{ fontSize: '9px', padding: '3px 5px', backgroundColor: 'var(--primary-color)' }}>
                3
              </span>
            </div>

            {/* Admin Dropdown Menu */}
            <Dropdown align="end">
              <Dropdown.Toggle as="div" className="d-flex align-items-center gap-2 ms-2 cursor-pointer border-0 bg-transparent p-0 shadow-none">
                <div className="text-white rounded-circle d-flex align-items-center justify-content-center fw-bold fs-6" style={{ width: 38, height: 38, backgroundColor: 'var(--primary-color)' }}>
                  A
                </div>
                <div className="d-none d-md-block text-start">
                  <div className="fw-bold fs-7 lh-1">Admin</div>
                  <small className="text-muted" style={{ fontSize: '11px' }}>Super Admin</small>
                </div>
              </Dropdown.Toggle>

              <Dropdown.Menu className="shadow-sm border-0 rounded-3 mt-2 p-1">
                <Dropdown.Item href="#profile" className="d-flex align-items-center gap-2 fs- py-2 rounded-2">
                  <FaUser className="text-muted" /> Profile
                </Dropdown.Item>
                <Dropdown.Divider className="my-1" />
                <Dropdown.Item onClick={logout} className="d-flex align-items-center gap-2 fs-7 py-2 rounded-2 text-danger">
                  <FaSignOutAlt /> Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>

        {/* ================= STAT CARDS ================= */}
        <Row className="g-3 p-4">
          <Col md={3}>
            <Card className="border-0 shadow-sm rounded-4 p-3 bg-white">
              <div className="d-flex align-items-center gap-3">
                <div className="stat-icon icon-purple">
                  <FaFileAlt />
                </div>
                <div>
                  <small className="text-muted fw-medium fs-7">Total Posts</small>
                  <h3 className="fw-bold my-0">1,245</h3>
                  <small className="text-success fw-semibold fs-8"><FaArrowUp size={9} /> 12% <span className="text-muted fw-normal">from last month</span></small>
                </div>
              </div>
            </Card>
          </Col>

          <Col md={3}>
            <Card className="border-0 shadow-sm rounded-4 p-3 bg-white">
              <div className="d-flex align-items-center gap-3">
                <div className="stat-icon icon-green">
                  <FaFolder />
                </div>
                <div>
                  <small className="text-muted fw-medium fs-7">Categories</small>
                  <h3 className="fw-bold my-0">18</h3>
                  <small className="text-success fw-semibold fs-8"><FaArrowUp size={9} /> 8% <span className="text-muted fw-normal">from last month</span></small>
                </div>
              </div>
            </Card>
          </Col>

          <Col md={3}>
            <Card className="border-0 shadow-sm rounded-4 p-3 bg-white">
              <div className="d-flex align-items-center gap-3">
                <div className="stat-icon icon-blue">
                  <FaUsers />
                </div>
                <div>
                  <small className="text-muted fw-medium fs-7">Total Users</small>
                  <h3 className="fw-bold my-0">12,540</h3>
                  <small className="text-success fw-semibold fs-8"><FaArrowUp size={9} /> 15% <span className="text-muted fw-normal">from last month</span></small>
                </div>
              </div>
            </Card>
          </Col>

          <Col md={3}>
            <Card className="border-0 shadow-sm rounded-4 p-3 bg-white">
              <div className="d-flex align-items-center gap-3">
                <div className="stat-icon icon-yellow">
                  <FaEye />
                </div>
                <div>
                  <small className="text-muted fw-medium fs-7">Total Views</small>
                  <h3 className="fw-bold my-0">345,678</h3>
                  <small className="text-success fw-semibold fs-8"><FaArrowUp size={9} /> 10% <span className="text-muted fw-normal">from last month</span></small>
                </div>
              </div>
            </Card>
          </Col>
        </Row>

        {/* ================= CHARTS & QUICK ACTIONS ================= */}
        <Row className="g-3 p-4">
          
          {/* Views Overview Chart */}
          <Col lg={5}>
            <Card className="border-0 shadow-sm rounded-4 p-3 bg-white h-100">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h6 className="fw-bold m-0">Views Overview</h6>
                <Form.Select size="sm" style={{ width: '120px', fontSize: '12px' }} className="rounded-3 border-light-subtle bg-light shadow-none">
                  <option>Last 30 Days</option>
                </Form.Select>
              </div>
              
              <div className="position-relative mt-2">
                <svg viewBox="0 0 500 150" className="w-100 overflow-visible mt-2">
                  <defs>
                    <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="var(--primary-color)" stopOpacity="0.2"/>
                      <stop offset="100%" stopColor="var(--primary-color)" stopOpacity="0.0"/>
                    </linearGradient>
                  </defs>

                  <line x1="0" y1="20" x2="500" y2="20" stroke="#f0f0f3" strokeDasharray="3 3"/>
                  <line x1="0" y1="55" x2="500" y2="55" stroke="#f0f0f3" strokeDasharray="3 3"/>
                  <line x1="0" y1="90" x2="500" y2="90" stroke="#f0f0f3" strokeDasharray="3 3"/>
                  <line x1="0" y1="125" x2="500" y2="125" stroke="#f0f0f3" strokeDasharray="3 3"/>

                  <path d="M 10 110 Q 50 120, 80 95 T 150 100 T 220 60 T 290 85 T 360 40 T 430 80 T 490 50 L 490 130 L 10 130 Z" fill="url(#chartGradient)"/>
                  <path d="M 10 110 Q 50 120, 80 95 T 150 100 T 220 60 T 290 85 T 360 40 T 430 80 T 490 50" fill="none" stroke="var(--primary-color)" strokeWidth="3"/>

                  {[
                    {x: 10, y: 110}, {x: 50, y: 120}, {x: 80, y: 95}, {x: 120, y: 98},
                    {x: 150, y: 100}, {x: 180, y: 115}, {x: 220, y: 60}, {x: 250, y: 75},
                    {x: 290, y: 85}, {x: 320, y: 65}, {x: 360, y: 40}, {x: 400, y: 78},
                    {x: 430, y: 80}, {x: 490, y: 50}
                  ].map((pt, i) => (
                    <circle key={i} cx={pt.x} cy={pt.y} r="4" fill="var(--primary-color)" stroke="#ffffff" strokeWidth="2" />
                  ))}
                </svg>

                <div className="d-flex justify-content-between text-muted fs-8 mt-2 px-1">
                  <span>May 1</span>
                  <span>May 6</span>
                  <span>May 11</span>
                  <span>May 16</span>
                  <span>May 21</span>
                  <span>May 26</span>
                  <span>May 31</span>
                </div>
              </div>
            </Card>
          </Col>

          {/* Top Categories Donut Chart */}
          <Col lg={4}>
            <Card className="border-0 shadow-sm rounded-4 p-3 bg-white h-100">
              <h6 className="fw-bold mb-3">Top Categories</h6>
              <div className="d-flex align-items-center justify-content-between h-100 my-auto">
                <div style={{ width: '120px', height: '120px' }}>
                  <svg viewBox="0 0 36 36" className="w-100 h-100">
                    <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="var(--primary-color)" strokeWidth="5" strokeDasharray="35, 100" />
                    <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#0284c7" strokeWidth="5" strokeDasharray="25, 100" strokeDashoffset="-35" />
                    <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#16a34a" strokeWidth="5" strokeDasharray="18, 100" strokeDashoffset="-60" />
                    <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#d97706" strokeWidth="5" strokeDasharray="12, 100" strokeDashoffset="-78" />
                    <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#cbd5e1" strokeWidth="5" strokeDasharray="10, 100" strokeDashoffset="-90" />
                  </svg>
                </div>

                <div className="d-flex flex-column gap-2 flex-grow-1 ms-3">
                  <div className="d-flex justify-content-between align-items-center fs-7"><span className="text-muted"><span style={{ color: 'var(--primary-color)' }}>●</span> Freelancing</span> <strong className="text-dark">520</strong></div>
                  <div className="d-flex justify-content-between align-items-center fs-7"><span className="text-muted"><span style={{ color: '#0284c7' }}>●</span> Remote Jobs</span> <strong className="text-dark">420</strong></div>
                  <div className="d-flex justify-content-between align-items-center fs-7"><span className="text-muted"><span style={{ color: '#16a34a' }}>●</span> AI Tools</span> <strong className="text-dark">280</strong></div>
                  <div className="d-flex justify-content-between align-items-center fs-7"><span className="text-muted"><span style={{ color: '#d97706' }}>●</span> Crypto</span> <strong className="text-dark">180</strong></div>
                  <div className="d-flex justify-content-between align-items-center fs-7"><span className="text-muted"><span style={{ color: '#94a3b8' }}>●</span> Online Income</span> <strong className="text-dark">140</strong></div>
                </div>
              </div>
            </Card>
          </Col>

          {/* Quick Actions */}
          <Col lg={3}>
            <Card className="border-0 shadow-sm rounded-4 p-3 bg-white h-100">
              <h6 className="fw-bold mb-3">Quick Actions</h6>
              <div className="d-flex flex-column gap-2">
                <button className="btn btn-quick-action"><FaPlus /> Add New Post</button>
                <button className="btn btn-quick-action"><FaPlus /> Add New Category</button>
                <button className="btn btn-quick-action"><FaUpload /> Upload Media</button>
                <button className="btn btn-quick-action"><FaPlusSquare /> Create Page</button>
              </div>
            </Card>
          </Col>
        </Row>

        {/* ================= RECENT POSTS TABLE & ACTIVITY ================= */}
        <Row className="g-3 p-4">
          
          {/* Table Area */}
          <Col lg={8}>
            <Card className="border-0 shadow-sm rounded-4 p-3 bg-white">
              <h6 className="fw-bold mb-3">Recent Posts</h6>
              
              <Table responsive borderless className="align-middle post-table mb-0">
                <thead>
                  <tr>
                    <th>TITLE</th>
                    <th>CATEGORY</th>
                    <th>STATUS</th>
                    <th>VIEWS</th>
                    <th>PUBLISHED AT</th>
                    <th className="text-end">ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  
                  {/* Row 1 */}
                  <tr>
                    <td>
                      <div className="d-flex align-items-center gap-2">
                        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=100&q=80" alt="post" className="post-thumb" />
                        <span className="fw-semibold text-dark fs-7">How to Find High Paying Remote Jobs in 2026</span>
                      </div>
                    </td>
                    <td><Badge className="badge-remote border-0 p-2 rounded-2">Remote Jobs</Badge></td>
                    <td><Badge className="badge-published border-0 p-2 rounded-2">Published</Badge></td>
                    <td className="fw-medium">12,540</td>
                    <td><span className="text-dark d-block fs-8">May 30, 2026</span><small className="text-muted fs-8">10:30 AM</small></td>
                    <td className="text-end">
                      <div className="d-inline-flex gap-1">
                        <span className="table-action-btn"><FaEye size={12} /></span>
                        <span className="table-action-btn"><FaEdit size={12} /></span>
                        <span className="table-action-btn"><FaTrash size={12} /></span>
                      </div>
                    </td>
                  </tr>

                  {/* Row 2 */}
                  <tr>
                    <td>
                      <div className="d-flex align-items-center gap-2">
                        <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=100&q=80" alt="post" className="post-thumb" />
                        <span className="fw-semibold text-dark fs-7">Best AI Tools You Must Use in 2026</span>
                      </div>
                    </td>
                    <td><Badge className="badge-ai border-0 p-2 rounded-2">AI Tools</Badge></td>
                    <td><Badge className="badge-published border-0 p-2 rounded-2">Published</Badge></td>
                    <td className="fw-medium">8,756</td>
                    <td><span className="text-dark d-block fs-8">May 29, 2026</span><small className="text-muted fs-8">09:15 AM</small></td>
                    <td className="text-end">
                      <div className="d-inline-flex gap-1">
                        <span className="table-action-btn"><FaEye size={12} /></span>
                        <span className="table-action-btn"><FaEdit size={12} /></span>
                        <span className="table-action-btn"><FaTrash size={12} /></span>
                      </div>
                    </td>
                  </tr>

                  {/* Row 3 */}
                  <tr>
                    <td>
                      <div className="d-flex align-items-center gap-2">
                        <img src="https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=100&q=80" alt="post" className="post-thumb" />
                        <span className="fw-semibold text-dark fs-7">Beginner's Guide to Bitcoin and Crypto</span>
                      </div>
                    </td>
                    <td><Badge className="badge-crypto border-0 p-2 rounded-2">Crypto</Badge></td>
                    <td><Badge className="badge-published border-0 p-2 rounded-2">Published</Badge></td>
                    <td className="fw-medium">6,980</td>
                    <td><span className="text-dark d-block fs-8">May 28, 2026</span><small className="text-muted fs-8">04:20 PM</small></td>
                    <td className="text-end">
                      <div className="d-inline-flex gap-1">
                        <span className="table-action-btn"><FaEye size={12} /></span>
                        <span className="table-action-btn"><FaEdit size={12} /></span>
                        <span className="table-action-btn"><FaTrash size={12} /></span>
                      </div>
                    </td>
                  </tr>

                  {/* Row 4 */}
                  <tr>
                    <td>
                      <div className="d-flex align-items-center gap-2">
                        <img src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=100&q=80" alt="post" className="post-thumb" />
                        <span className="fw-semibold text-dark fs-7">How I Earned $1000 From Upwork in One Month</span>
                      </div>
                    </td>
                    <td><Badge className="badge-freelance border-0 p-2 rounded-2">Freelancing</Badge></td>
                    <td><Badge className="badge-published border-0 p-2 rounded-2">Published</Badge></td>
                    <td className="fw-medium">5,432</td>
                    <td><span className="text-dark d-block fs-8">May 27, 2026</span><small className="text-muted fs-8">11:45 AM</small></td>
                    <td className="text-end">
                      <div className="d-inline-flex gap-1">
                        <span className="table-action-btn"><FaEye size={12} /></span>
                        <span className="table-action-btn"><FaEdit size={12} /></span>
                        <span className="table-action-btn"><FaTrash size={12} /></span>
                      </div>
                    </td>
                  </tr>

                  {/* Row 5 */}
                  <tr>
                    <td>
                      <div className="d-flex align-items-center gap-2">
                        <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=100&q=80" alt="post" className="post-thumb" />
                        <span className="fw-semibold text-dark fs-7">10 Passive Income Ideas to Start in 2026</span>
                      </div>
                    </td>
                    <td><Badge className="badge-income border-0 p-2 rounded-2">Online Income</Badge></td>
                    <td><Badge className="badge-draft border-0 p-2 rounded-2">Draft</Badge></td>
                    <td className="fw-medium">4,210</td>
                    <td><span className="text-dark d-block fs-8">May 26, 2026</span><small className="text-muted fs-8">08:10 AM</small></td>
                    <td className="text-end">
                      <div className="d-inline-flex gap-1">
                        <span className="table-action-btn"><FaEye size={12} /></span>
                        <span className="table-action-btn"><FaEdit size={12} /></span>
                        <span className="table-action-btn"><FaTrash size={12} /></span>
                      </div>
                    </td>
                  </tr>

                </tbody>
              </Table>

              <div className="mt-3">
                <a href="#all-posts" className="fw-bold text-decoration-none d-inline-flex align-items-center gap-1 fs-7" style={{ color: 'var(--primary-color)' }}>
                  View all posts <FaArrowRight size={11} />
                </a>
              </div>
            </Card>
          </Col>

          {/* Activity Sidebar Area */}
          <Col lg={4}>
            <Card className="border-0 shadow-sm rounded-4 p-3 bg-white h-100 d-flex flex-column justify-content-between">
              <div>
                <h6 className="fw-bold mb-3">Recent Activity</h6>
                
                <div className="d-flex flex-column gap-3">
                  
                  {/* Item 1 */}
                  <div className="d-flex gap-3 align-items-start">
                    <div className="p-2 rounded-circle icon-purple">
                      <FaFileAlt size={14} />
                    </div>
                    <div>
                      <h6 className="m-0 fs-7 fw-bold">New post published</h6>
                      <small className="text-muted d-block fs-8">How to Find High Paying Remote Jobs</small>
                      <small className="text-secondary fs-8">2 min ago</small>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="d-flex gap-3 align-items-start">
                    <div className="p-2 rounded-circle icon-green">
                      <FaUserPlus size={14} />
                    </div>
                    <div>
                      <h6 className="m-0 fs-7 fw-bold">New user registered</h6>
                      <small className="text-muted d-block fs-8">john.doe@email.com</small>
                      <small className="text-secondary fs-8">15 min ago</small>
                    </div>
                  </div>

                  {/* Item 3 */}
                  <div className="d-flex gap-3 align-items-start">
                    <div className="p-2 rounded-circle icon-yellow">
                      <FaCommentAlt size={14} />
                    </div>
                    <div>
                      <h6 className="m-0 fs-7 fw-bold">New comment added</h6>
                      <small className="text-muted d-block fs-8">On: Best AI Tools for 2026</small>
                      <small className="text-secondary fs-8">1 hour ago</small>
                    </div>
                  </div>

                  {/* Item 4 */}
                  <div className="d-flex gap-3 align-items-start">
                    <div className="p-2 rounded-circle icon-blue">
                      <FaEnvelope size={14} />
                    </div>
                    <div>
                      <h6 className="m-0 fs-7 fw-bold">New subscriber joined</h6>
                      <small className="text-muted d-block fs-8">sarah@gmail.com</small>
                      <small className="text-secondary fs-8">2 hours ago</small>
                    </div>
                  </div>

                </div>
              </div>

              <div className="pt-3 mt-3">
                <a href="#all-activity" className="fw-bold text-decoration-none d-inline-flex align-items-center gap-1 fs-7" style={{ color: 'var(--primary-color)' }}>
                  View all activity <FaArrowRight size={11} />
                </a>
              </div>
            </Card>
          </Col>

        </Row>

      </main>
    </div>
  );
};

export default Dashboard;