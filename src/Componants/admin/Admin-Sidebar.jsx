import React, { Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function AdminSidebar() {
  return (
    <Fragment>
      <Container fluid="true" id='admin-sidebar' className='admin-sidebar shadow'>
        <Row className='sidebar-row h-100'>
          <Col className='profile'>
            <Row className='p-4 pb-0'>
              <Col className=''>
                <h1><Link to="/admin-login/admin-dashboard">HexaShop</Link></h1>
                <b className='text-success'> <span className='blinking'>bo</span> Online</b>
              </Col>
            </Row>
          </Col>
          <Col className='category p-4'>
            <div className='category-head'>
              <h2 className=' text-center text-info'>Category</h2>
              <hr className='w-50 border-5 mx-auto rounded-pill border-warning' />
            </div>
            <div className='category-list'>
              <ul className='p-0'>
                <li>
                  <Link to="/admin-login/admin-manage-customer">
                    <i className='fa fa-handshake-o category-icons me-3 shadow rounded-3 '></i>
                    Manage Customer
                  </Link>
                </li>

                <li className='dropdown '><Link to="/" data-bs-toggle="dropdown" className=' dropdown-toggle'>
                  <i className='fa fa-list-alt category-icons me-3 shadow rounded-3 '></i>
                  Add Category</Link>
                  <ul className='dropdown-menu py-3 px-2' style={{ width: "215px" }}>
                    <li><Link to="/admin-login/admin-add-category" className='text-black'>Add Category</Link></li>
                    <li><Link to="/admin-login/admin-manage-category" className='text-black'>
                      Manage Category </Link></li>
                    <li><Link to="/admin-login/admin-add-subcategory" className='text-black'>Add Sub-category</Link></li>
                    <li><Link to="/admin-login/admin-manage-subcategory" className='text-black'>
                      Manage Sub-category </Link></li>
                  </ul>
                </li>

                <li className='dropdown'><Link to="/" data-bs-toggle="dropdown" className=' dropdown-toggle'>
                  <i className=' fa fa-product-hunt category-icons me-3 shadow rounded-3 '></i>
                  Add Product</Link>
                  <ul className='dropdown-menu p-3' style={{ width: "190px" }}>
                    <li><Link to="/admin-login/admin-add-products" className='text-black'>Add Product</Link></li>
                    <li><Link to="/admin-login/admin-manage-products" className='text-black'>Manage Products</Link></li>
                  </ul>
                </li>

                <li><Link to="/admin-login/admin-manage-orders">
                  <i className=' fa fa-first-order category-icons me-3 shadow rounded-3'></i>
                  Manage Orders</Link></li>

                <li><Link to="/admin-login/admin-manage-reviews">
                  <i className=' fa fa-commenting category-icons me-3 shadow rounded-3'></i>
                  Manage Reviews</Link></li>

                <li><Link to="/admin-login/admin-manage-contact">
                  <i className=' fa fa-user category-icons me-3 shadow rounded-3'></i>
                  Manage Contact</Link></li>

                <li className='dropdown'><Link to="/" data-bs-toggle="dropdown" className=' dropdown-toggle'>
                  <i className=' fa fa-image category-icons me-3 shadow rounded-3'></i>
                  Add Slider</Link>
                  <ul className='dropdown-menu p-3' style={{ width: "190px" }}>
                    <li><Link to="/admin-login/admin-add-slider" className='text-black'>Add Slider</Link></li>
                    <li><Link to="/admin-login/admin-manage-slider" className='text-black'>Manage Slider </Link></li>
                  </ul>
                </li>

                <li className='dropdown'><Link to="/" data-bs-toggle="dropdown" className=' dropdown-toggle'>
                  <i className=' fa fa-globe category-icons me-3 shadow rounded-3'></i>
                  Add State</Link>
                  <ul className='dropdown-menu p-3' style={{ width: "190px" }}>
                    <li><Link to="/admin-login/admin-add-state" className='text-black'>Add State</Link></li>
                    <li><Link to="/admin-login/admin-manage-state" className='text-black'>Manage State </Link></li>
                  </ul>
                </li>

                <li className='dropdown'><Link to="/" data-bs-toggle="dropdown" className=' dropdown-toggle'>
                  <i className=' fa fa-building category-icons me-3 shadow rounded-3'></i>
                  Add City</Link>
                  <ul className='dropdown-menu p-3' style={{ width: "190px" }}>
                    <li><Link to="/admin-login/admin-add-city" className='text-black'>Add City</Link></li>
                    <li><Link to="/admin-login/admin-manage-city" className='text-black'>Manage City </Link></li>
                  </ul>
                </li>

                <li><Link to="/admin-login/admin-manage-footer">
                  <i className=' fa fa-pencil category-icons me-3 shadow rounded-3'></i>
                  Manage Footer</Link></li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  )
}
