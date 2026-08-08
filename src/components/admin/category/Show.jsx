import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Table, Badge, Form, Button, Spinner } from 'react-bootstrap';
import { 
  FaFolder, FaFileAlt, FaEdit, FaTrash, FaPlus, 
  FaSearch, FaCheckCircle 
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import AdminLayout from '../adminCommon/AdminLayout';
import axios from 'axios';
import { apiUrl, adminToken } from '../../common/http';

const Show = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCategories = () => {
    setLoading(true);
    axios.get(`${apiUrl}/categories`, {
      headers: {
        'Authorization': `Bearer ${adminToken()}`
      }
    })
    .then((res) => {
      let fetchedData = [];
      if (res.data && res.data.data) {
        fetchedData = res.data.data;
      } else if (Array.isArray(res.data)) {
        fetchedData = res.data;
      }

      // sort
      const sortedCategories = [...fetchedData].sort((a, b) => a.id - b.id);
      setCategories(sortedCategories);
    })
    .catch((error) => {
      console.error("Error fetching categories:", error);
    })
    .finally(() => {
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      axios.delete(`${apiUrl}/categories/${id}`, {
        headers: {
          'Authorization': `Bearer ${adminToken()}`
        }
      })
      .then(() => {
        fetchCategories(); 
      })
      .catch((error) => {
        console.error("Error deleting category:", error);
      });
    }
  };

  return (
    <AdminLayout pageTitle="Categories Overview">
      
      {/* Top Stats Cards */}
      <Row className="g-3 p-4">
        <Col md={4}>
          <Card className="border-0 shadow-sm rounded-4 p-3 bg-white">
            <div className="d-flex align-items-center gap-3">
              <div className="stat-icon icon-purple">
                <FaFolder />
              </div>
              <div>
                <small className="text-muted fw-medium fs-7">Total Categories</small>
                <h3 className="fw-bold my-0">{categories.length}</h3>
              </div>
            </div>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="border-0 shadow-sm rounded-4 p-3 bg-white">
            <div className="d-flex align-items-center gap-3">
              <div className="stat-icon icon-green">
                <FaCheckCircle />
              </div>
              <div>
                <small className="text-muted fw-medium fs-7">Active Categories</small>
                <h3 className="fw-bold my-0">
                  {categories.filter(cat => cat.status === 1 || cat.status === 'Active' || cat.status === 'active').length}
                </h3>
              </div>
            </div>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="border-0 shadow-sm rounded-4 p-3 bg-white">
            <div className="d-flex align-items-center gap-3">
              <div className="stat-icon icon-blue">
                <FaFileAlt />
              </div>
              <div>
                <small className="text-muted fw-medium fs-7">Total Posts Linked</small>
                <h3 className="fw-bold my-0">1,540</h3>
              </div>
            </div>
          </Card>
        </Col>
      </Row>

      {/* Main Categories Table Card */}
      <div className="px-4 pb-4">
        <Card className="border-0 shadow-sm rounded-4 p-4 bg-white">
          <div className="d-flex flex-wrap justify-content-between align-items-center mb-3 gap-2">
            <h5 className="fw-bold m-0">All Categories</h5>

            <div className="d-flex align-items-center gap-2">
              <div className="position-relative" style={{ width: '220px' }}>
                <FaSearch className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted" />
                <Form.Control type="text" placeholder="Search categories..." className="search-input ps-5 fs-7 rounded-3" />
              </div>

              <Button as={Link} to="/admin/categories/create" className="btn-primary d-flex align-items-center gap-2 fs-7 rounded-3 px-3">
                <FaPlus /> Add Category
              </Button>
            </div>
          </div>

          {loading ? (
            <div className="text-center py-5">
              <Spinner animation="border" variant="primary" />
              <p className="mt-2 text-muted fs-7">Loading categories...</p>
            </div>
          ) : (
            <Table responsive borderless className="align-middle post-table mb-0">
              <thead>
                <tr>
                  <th style={{ width: '10%' }}>ID</th>
                  <th style={{ width: '50%' }}>NAME</th>
                  <th style={{ width: '15%' }}>POSTS</th>
                  <th style={{ width: '15%' }}>STATUS</th>
                  <th style={{ width: '10%' }} className="text-end">ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {categories.length > 0 ? (
                  categories.map((cat, index) => (
                    <tr key={cat.id || index}>
                      <td className="fw-bold text-muted fs-7">{cat.id}</td>
                      <td className="fw-semibold text-dark fs-7">{cat.name}</td>
                      <td className="fw-medium">{cat.posts_count || cat.posts || 0}</td>
                      <td>
                        {cat.status === 1 || cat.status === 'Active' || cat.status === 'active' ? (
                          <Badge bg="success-subtle" className="text-success border-0 p-2 rounded-2 fs-8">Active</Badge>
                        ) : (
                          <Badge bg="secondary-subtle" className="text-secondary border-0 p-2 rounded-2 fs-8">Inactive</Badge>
                        )}
                      </td>
                      
                      <td className="text-end">
                        <div className="d-inline-flex gap-1">
                          <Button as={Link} to={`/admin/categories/edit/${cat.id}`} variant="light" size="sm" className="table-action-btn">
                            <FaEdit size={12} />
                          </Button>
                          <Button onClick={() => handleDelete(cat.id)} variant="light" size="sm" className="table-action-btn text-danger">
                            <FaTrash size={12} />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="text-center text-muted py-4">No categories found.</td>
                  </tr>
                )}
              </tbody>
            </Table>
          )}
        </Card>
      </div>

    </AdminLayout>
  );
};

export default Show;