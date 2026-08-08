import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Form, Dropdown } from 'react-bootstrap';
import { 
  FaThLarge, FaFileAlt, FaFolder, FaTags, FaPhotoVideo, FaCopy, 
  FaComments, FaUsers, FaEnvelope, FaAd, FaChartLine, FaSearch, 
  FaCog, FaUser, FaExternalLinkAlt, FaBell, FaSignOutAlt 
} from 'react-icons/fa';

import logo from '../../../assets/logo.png';
import { AdminAuthContext } from '../../context/AdminAuth';

const AdminLayout = ({ children, pageTitle = "Dashboard" }) => {
  const { logout } = useContext(AdminAuthContext);

  return (
    <div className="d-flex dashboard-wrapper">
      
      {/* ================= SIDEBAR ================= */}
      <aside className="sidebar d-flex flex-column justify-content-between p-3">
        <div>
          {/* Logo */}
          <div className="d-flex align-items-center mb-4 px-2 pt-2">
            <img src={logo} alt="Logo" height={40} />
          </div>

          {/* Navigation Links (NavLink ব্যবহার করা হয়েছে) */}
          <nav className="sidebar-menu overflow-y-auto" style={{ maxHeight: 'calc(100vh - 160px)' }}>
            <NavLink to="/admin/dashboard" className="nav-item-link"><FaThLarge /> Dashboard</NavLink>
            <NavLink to="/admin/posts" className="nav-item-link"><FaFileAlt /> Posts</NavLink>
            <NavLink to="/admin/categories" className="nav-item-link"><FaFolder /> Categories</NavLink>
            <NavLink to="/admin/tags" className="nav-item-link"><FaTags /> Tags</NavLink>
            <NavLink to="/admin/media" className="nav-item-link"><FaPhotoVideo /> Media Library</NavLink>
            <NavLink to="/admin/pages" className="nav-item-link"><FaCopy /> Pages</NavLink>
            <NavLink to="/admin/comments" className="nav-item-link"><FaComments /> Comments</NavLink>
            <NavLink to="/admin/users" className="nav-item-link"><FaUsers /> Users</NavLink>
            <NavLink to="/admin/newsletter" className="nav-item-link"><FaEnvelope /> Newsletter</NavLink>
            <NavLink to="/admin/ads" className="nav-item-link"><FaAd /> Ads</NavLink>
            <NavLink to="/admin/analytics" className="nav-item-link"><FaChartLine /> Analytics</NavLink>
            <NavLink to="/admin/seo" className="nav-item-link"><FaSearch /> SEO</NavLink>
            <NavLink to="/admin/settings" className="nav-item-link"><FaCog /> Settings</NavLink>
            <NavLink to="/admin/profile" className="nav-item-link"><FaUser /> Profile</NavLink>
          </nav>
        </div>

        {/* View Website Button */}
        <div className="pt-3 border-top">
          <Link to={'/'} className="w-100 d-flex align-items-center justify-content-between text-primary fw-semibold rounded-3 py-2 px-3 border border-light-subtle text-decoration-none">
            <span className="d-flex align-items-center gap-2"><FaExternalLinkAlt /> View Website</span>
            <FaExternalLinkAlt size={12} />
          </Link>
        </div>
      </aside>

      {/* ================= MAIN WRAPPER & TOPBAR ================= */}
      <main className="flex-grow-1 overflow-auto" style={{ maxHeight: '100vh' }}>
        
        {/* Top Header */}
        <div className="d-flex justify-content-between align-items-center bg-white p-4 border-bottom sticky-top">
          <h4 className="fw-bold m-0">{pageTitle}</h4>

          <div className="d-flex align-items-center gap-3">
            <div className="position-relative" style={{ width: '250px' }}>
              <FaSearch className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted" />
              <Form.Control type="text" placeholder="Search..." className="search-input ps-5" />
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
                <Dropdown.Item as={Link} to="/admin/profile" className="d-flex align-items-center gap-2 fs-7 py-2 rounded-2">
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

        {/* Dynamic Page Content */}
        {children}

      </main>
    </div>
  );
};

export default AdminLayout;