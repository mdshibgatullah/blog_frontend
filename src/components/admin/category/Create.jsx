import React, { useState } from 'react';
import { Row, Col, Card, Form, Button, Spinner } from 'react-bootstrap';
import { FaSave, FaArrowLeft } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import AdminLayout from '../adminCommon/AdminLayout';
import axios from 'axios';
import { apiUrl, adminToken } from '../../common/http';
import { toast } from 'react-toastify';

const Create = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);


  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    
    axios.post(`${apiUrl}/categories`, formData, {
      headers: {
        'Authorization': `Bearer ${adminToken()}`
      }
    })
    .then((res) => {
      if (res.data.status) {
        toast.success(res.data.message || "Category created successfully!");
        navigate('/admin/categories'); 
      } else {
        toast.error(res.data.message || "Failed to create category");
      }
    })
    .catch((error) => {
      console.error("Error creating category:", error);
      toast.error(error.response?.data?.message || "Something went wrong!");
    })
    .finally(() => {
      setLoading(false);
    });
  };

  return (
    <AdminLayout pageTitle={"Create Category"}>
      <div className="p-4">
        
        {/* Header Bar */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <Link to="/admin/categories" className="btn btn-outline-secondary d-flex align-items-center gap-2 rounded-3 fs-7">
            <FaArrowLeft /> Back to Categories
          </Link>
        </div>

        <Row className="justify-content-center">
          <Col lg={8}>
            <Card className="border-0 shadow-sm rounded-4 p-4 bg-white">
              <h6 className="fw-bold mb-4">Create New Category</h6>

              <Form onSubmit={handleSubmit}>
                {/* 1. Category Name */}
                <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold fs-7">Category Name</Form.Label>
                  <Form.Control 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    placeholder="Enter category name"
                    className="rounded-3"
                    required
                  />
                </Form.Group>

                {/* 2. Status */}
                <Form.Group className="mb-4">
                  <Form.Label className="fw-semibold fs-7">Status</Form.Label>
                  <Form.Select 
                    name="status" 
                    value={formData.status} 
                    onChange={handleChange}
                    className="rounded-3"
                  >
                    <option value="1">Active</option>
                    <option value="0">Block</option>
                  </Form.Select>
                </Form.Group>

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  disabled={loading}
                  className="btn-primary d-flex align-items-center justify-content-center gap-2 rounded-3 py-2 px-4"
                >
                  {loading ? (
                    <>
                      <Spinner animation="border" size="sm" /> Saving...
                    </>
                  ) : (
                    <>
                      <FaSave /> Save Category
                    </>
                  )}
                </Button>
              </Form>
            </Card>
          </Col>
        </Row>

      </div>
    </AdminLayout>
  );
};

export default Create;