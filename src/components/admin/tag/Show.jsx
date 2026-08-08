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
  const [tags, settags] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchtags = () => {
    setLoading(true);
    axios.get(`${apiUrl}/tags`, {
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
      const sortedtags = [...fetchedData].sort((a, b) => a.id - b.id);
      settags(sortedtags);
    })
    .catch((error) => {
      console.error("Error fetching tags:", error);
    })
    .finally(() => {
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchtags();
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this tag?")) {
      axios.delete(`${apiUrl}/tags/${id}`, {
        headers: {
          'Authorization': `Bearer ${adminToken()}`
        }
      })
      .then(() => {
        fetchtags(); 
      })
      .catch((error) => {
        console.error("Error deleting tag:", error);
      });
    }
  };

  return (
    <AdminLayout pageTitle="tags Overview">
      
      {/* Top Stats Cards */}
      <Row className="g-3 p-4">
        <Col md={4}>
          <Card className="border-0 shadow-sm rounded-4 p-3 bg-white">
            <div className="d-flex align-items-center gap-3">
              <div className="stat-icon icon-purple">
                <FaFolder />
              </div>
              <div>
                <small className="text-muted fw-medium fs-7">Total tags</small>
                <h3 className="fw-bold my-0">{tags.length}</h3>
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
                <small className="text-muted fw-medium fs-7">Active tags</small>
                <h3 className="fw-bold my-0">
                  {tags.filter(cat => cat.status === 1 || cat.status === 'Active' || cat.status === 'active').length}
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

      {/* Main tags Table Card */}
      <div className="px-4 pb-4">
        <Card className="border-0 shadow-sm rounded-4 p-4 bg-white">
          <div className="d-flex flex-wrap justify-content-between align-items-center mb-3 gap-2">
            <h5 className="fw-bold m-0">All tags</h5>

            <div className="d-flex align-items-center gap-2">
              <div className="position-relative" style={{ width: '220px' }}>
                <FaSearch className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted" />
                <Form.Control type="text" placeholder="Search tags..." className="search-input ps-5 fs-7 rounded-3" />
              </div>

              <Button as={Link} to="/admin/tags/create" className="btn-primary d-flex align-items-center gap-2 fs-7 rounded-3 px-3">
                <FaPlus /> Add tag
              </Button>
            </div>
          </div>

          {loading ? (
            <div className="text-center py-5">
              <Spinner animation="border" variant="primary" />
              <p className="mt-2 text-muted fs-7">Loading tags...</p>
            </div>
          ) : (
            <Table responsive borderless className="align-middle post-table mb-0">
              <thead>
                <tr>
                  <th style={{ width: '10%' }}>ID</th>
                  <th style={{ width: '50%' }}>NAME</th>
                  <th style={{ width: '10%' }} className="text-end">ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {tags.length > 0 ? (
                  tags.map((cat, index) => (
                    <tr key={cat.id || index}>
                      <td className="fw-bold text-muted fs-7">{cat.id}</td>
                      <td className="fw-semibold text-dark fs-7">{cat.name}</td>                      
                      
                      <td className="text-end">
                        <div className="d-inline-flex gap-1">
                          <Button as={Link} to={`/admin/tags/edit/${cat.id}`} variant="light" size="sm" className="table-action-btn">
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
                    <td colSpan="5" className="text-center text-muted py-4">No tags found.</td>
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