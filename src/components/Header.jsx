import React, { useState } from 'react';
import { Navbar, Nav, Container, Button, Offcanvas } from 'react-bootstrap';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Header = () => {
  const [show, setShow] = useState(false);

  const [activeNav, setActiveNav] = useState('home');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const handleNavClick = (navItem) => {
    setActiveNav(navItem);
    handleClose(); 
  };

  const navItems = [
    { id: 'home', label: 'Home', href: '/' },
    { id: 'freelancing', label: 'Freelancing', href: '/freelancing' },
    { id: 'remote-jobs', label: 'Remote Jobs', href: '/remote' },
    { id: 'crypto', label: 'Crypto', href: '/crypto' },
    { id: 'ai-tools', label: 'AI Tools', href: '#ai-tools' },
    { id: 'online-income', label: 'Online Income', href: '#online-income' },
    { id: 'more', label: 'More', href: '#more' },
  ];

  return (
    <Navbar expand="lg" className="bg-white py-3 sticky-top">
      <Container>
        {/* Brand Logo */}
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <img
            src={logo}
            alt="Blogora Logo"
            height="40"
            className="d-inline-block align-top me-2"
          />
        </Navbar.Brand>

        {/* Right side icons & buttons */}
        <div className="d-flex align-items-center order-lg-3 gap-3">
          <button className="btn btn-link text-dark p-0 me-2" aria-label="Search">
            <FaSearch size={20} />
          </button>
          
          <Button className="btn-primary-custom d-none d-lg-block">
            Subscribe
          </Button>

          {/* Mobile Hamburger Toggle Button */}
          <button 
            className="navbar-toggler border-0 p-0 shadow-none d-lg-none" 
            onClick={handleShow}
            aria-label="Toggle Navigation"
          >
            <FaBars size={24} className="text-dark" />
          </button>
        </div>

        {/* Desktop Navigation Menu */}
        <Navbar.Collapse id="basic-navbar-nav" className="d-none d-lg-flex justify-content-center">
          <Nav className="gap-4 fw-semibold align-items-center">
            {navItems.map((item) => (
              <Nav.Link
                key={item.id}
                href={item.href}
                onClick={() => handleNavClick(item.id)}
                className={
                  activeNav === item.id
                    ? 'active text-primary border-bottom border-primary border-2 pb-1'
                    : 'text-dark'
                }
              >
                {item.label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>

        {/* Mobile Animated Right-Side Offcanvas Menu */}
        <Offcanvas show={show} onHide={handleClose} placement="end" className="d-lg-none">
          <Offcanvas.Header className="justify-content-between align-items-center border-bottom">
            <img src={logo} alt="Blogora Logo" height="32" />
            <button className="btn btn-link text-dark p-0" onClick={handleClose}>
              <FaTimes size={24} />
            </button>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="flex-column gap-3 fw-semibold my-3">
              {navItems.map((item) => (
                <Nav.Link
                  key={item.id}
                  href={item.href}
                  onClick={() => handleNavClick(item.id)}
                  className={
                    activeNav === item.id
                      ? 'text-primary fw-bold'
                      : 'text-dark'
                  }
                >
                  {item.label}
                </Nav.Link>
              ))}
            </Nav>
            <div className="pt-3 border-top">
              <Button className="btn-primary-custom w-100" onClick={handleClose}>
                Subscribe
              </Button>
            </div>
          </Offcanvas.Body>
        </Offcanvas>

      </Container>
    </Navbar>
  );
};

export default Header;