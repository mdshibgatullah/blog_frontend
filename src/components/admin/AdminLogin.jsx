import React, { useContext, useState } from 'react';
import { Card, Form, Button, InputGroup } from 'react-bootstrap';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaArrowRight } from 'react-icons/fa';
import Layouts from '../common/Layouts';
import { apiUrl } from '../common/http';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AdminAuthContext } from '../context/AdminAuth';

const AdminLogin = () => {

  const navigate = useNavigate();
  const {login} = useContext(AdminAuthContext)

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '', rememberMe: false });

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post(`${apiUrl}/admin/login`, formData)
      .then((res) => {
        if (res.status === 200) {
            const adminInfo = {
                token: res.data.token,
                id: res.data.id,
                name: res.data.name
            }
            localStorage.setItem('adminInfo', JSON.stringify(adminInfo))
            toast.success(res.data.message);
            login(adminInfo);
            navigate('/admin/dashboard');
        } else {
          toast.error(res.data.message);
        }
      })
      .catch((err) => {
        toast.error(err.response?.data?.message || 'Something went wrong!');
      });
  };

  return (
    <Layouts>
      <div className="py-5 d-flex align-items-center justify-content-center" style={{ backgroundColor: 'var(--bg-main, #f8f9fb)' }}>
        <div style={{ width: '100%', maxWidth: '420px', padding: '0 15px' }}>
          
          {/* Card Wrapper */}
          <Card className="border-0 shadow-sm rounded-4 px-4 py-3 bg-white">
            <Card.Body className="p-0">

              <div className="text-center mb-3">
                <h5 className="fw-bold text-dark m-0">Admin Login</h5>
              </div>
              
              {/* Login Form */}
              <Form onSubmit={handleSubmit}>
              
                {/* Email Input */}
                <Form.Group className="mb-4">
                  <Form.Label className="fw-semibold fs-7 text-dark mb-1">Email Address</Form.Label>
                  <InputGroup>
                    <InputGroup.Text className="bg-light border-end-0 text-muted rounded-start-3 pe-1">
                      <FaEnvelope size={14} />
                    </InputGroup.Text>
                    <Form.Control
                      type="email" 
                      placeholder="abc@gmail.com" 
                      required
                      className="bg-light border-start-0 fs-7 shadow-none rounded-end-3 ps-2"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </InputGroup>
                </Form.Group>

                {/* Password Input */}
                <Form.Group className="mb-4">
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <Form.Label className="fw-semibold fs-7 text-dark m-0">Password</Form.Label>
                    <a href="#forgot" className="fs-8 fw-semibold text-decoration-none" style={{ color: 'var(--primary-color)' }}>
                      Forgot?
                    </a>
                  </div>
                  <InputGroup>
                    <InputGroup.Text className="bg-light border-end-0 text-muted rounded-start-3 pe-1">
                      <FaLock size={14} />
                    </InputGroup.Text>
                    <Form.Control
                      type={showPassword ? 'text' : 'password'}
                      required
                      className="bg-light border-start-0 border-end-0 fs-7 shadow-none ps-2"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    />
                    <InputGroup.Text 
                      className="bg-light border-start-0 text-muted rounded-end-3 cursor-pointer ps-2"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FaEyeSlash size={14} /> : <FaEye size={14} />}
                    </InputGroup.Text>
                  </InputGroup>
                </Form.Group>

                {/* Remember Me */}
                <Form.Group className="mb-3 d-flex align-items-center">
                  <Form.Check
                    type="checkbox"
                    id="remember-me"
                    label={<span className="fs-8 text-muted">Remember me on this device</span>}
                    checked={formData.rememberMe}
                    onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
                    className="shadow-none"
                  />
                </Form.Group>

                {/* Submit Button */}
                <Button type="submit" className="btn-primary-custom w-100 d-flex align-items-center justify-content-center gap-2 py-2">
                  <span>Sign In</span>
                  <FaArrowRight size={12} />
                </Button>

              </Form>

            </Card.Body>
          </Card>

        </div>
      </div>
    </Layouts>
  );
};

export default AdminLogin;