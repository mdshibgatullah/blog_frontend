import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Form, Button, Spinner } from 'react-bootstrap';
import { FaSave, FaArrowLeft } from 'react-icons/fa';
import { Link, useNavigate, useParams } from 'react-router-dom';
import AdminLayout from '../adminCommon/AdminLayout';
import axios from 'axios';
import { apiUrl, adminToken } from '../../common/http';
import { toast } from 'react-toastify';

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);

  const [formData, setFormData] = useState({});

 
  useEffect(() => {
    setFetching(true);
    axios.get(`${apiUrl}/categories/${id}`, {
      headers: {
        'Authorization': `Bearer ${adminToken()}`
      }
    })
    .then((res) => {
      const categoryData = res.data.data || res.data;
      if (categoryData) {
        setFormData({
          name: categoryData.name || '',
          status: categoryData.status !== undefined ? String(categoryData.status) : '1'
        });
      }
    })
    .catch((error) => {
      console.error("Error fetching category:", error);
      toast.error("Failed to fetch category data!");
    })
    .finally(() => {
      setFetching(false);
    });
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    axios.put(`${apiUrl}/categories/${id}`, formData, {
      headers: {
        'Authorization': `Bearer ${adminToken()}`
      }
    })
    .then((res) => {
      if (res.data.status) {
        toast.success(res.data.message || "Category updated successfully!");
        navigate('/admin/categories');
      } else {
        toast.error(res.data.message || "Failed to update category");
      }
    })
    .catch((error) => {
      console.error("Error updating category:", error);
      toast.error(error.response?.data?.message || "Something went wrong!");
    })
    .finally(() => {
      setLoading(false);
    });
  };

  return (
    <AdminLayout pageTitle={"Edit Category"}>
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
              <h6 className="fw-bold mb-4">Edit Category</h6>

              {fetching ? (
                <div className="text-center py-5">
                  <Spinner animation="border" variant="primary" />
                  <p className="mt-2 text-muted fs-7">Loading category details...</p>
                </div>
              ) : (
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

                  {/* Update Button */}
                  <Button 
                    type="submit" 
                    disabled={loading}
                    className="btn-primary d-flex align-items-center justify-content-center gap-2 rounded-3 py-2 px-4"
                  >
                    {loading ? (
                      <>
                        <Spinner animation="border" size="sm" /> Updating...
                      </>
                    ) : (
                      <>
                        <FaSave /> Update Category
                      </>
                    )}
                  </Button>
                </Form>
              )}
            </Card>
          </Col>
        </Row>

      </div>
    </AdminLayout>
  );
};

export default Edit;