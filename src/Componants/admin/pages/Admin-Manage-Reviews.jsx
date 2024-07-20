import React, { Fragment } from 'react';
import { Container, Col, Row, ProgressBar } from 'react-bootstrap';
import AdminHeader from '../Admin-Header';
import AdminSidebar from '../Admin-Sidebar';
import AdminFooter from '../Admin-Footer';

export default function AdminManageReviews() {
  return (
    <Fragment>
      <Container fluid="true">
        <Col className='admin-layout-left'>
          {/* sidebar */}
          <AdminSidebar />
        </Col>
        <Col className='admin-layout-right'>
          {/* header */}
          <AdminHeader />

          <Container fluid="true" id='admin-content'>
            {/* manage review */}
            <Container fluid="true" className='mb-5' id='manage-review'>
              <Col className='my-3'>
                <h1 className='text-center pt-1'>Manage Review</h1>
                <hr className='border border-2 border-info w-25 mx-auto' />
              </Col>
              <Container className='mt-4'>
                <h3 className='text-center'>Customer Reviews</h3>
                <Row className='mt-4 p-3'>
                  <Col md={3} lg={3} align="center">
                    <div>
                      <h2>4.8 / 5</h2>
                      <span>
                        <i className='fa fa-star fs-3 text-warning'></i> &nbsp;
                        <i className='fa fa-star fs-3 text-warning'></i> &nbsp;
                        <i className='fa fa-star fs-3 text-warning'></i> &nbsp;
                        <i className='fa fa-star fs-3 text-warning'></i> &nbsp;
                        <i className='fa fa-star-half-empty fs-3 text-warning'></i>
                      </span>
                    </div>
                    <div className='mt-3'>
                      <h2>100%</h2>
                      <p>Would recomanded to a friend</p>
                    </div>
                  </Col>
                  <Col md={9} lg={9}>
                    <Row>
                      <Col sm={12} md={4} lg={4}>
                        <div>
                          <div className='d-flex'>
                            <h5>4.8/5</h5>
                            <p className='ms-3'>Build quality</p>
                          </div>
                          <ProgressBar variant="warning" now={60} />
                        </div>
                      </Col>
                      <Col sm={12} md={4} lg={4}>
                        <div>
                          <div className='d-flex'>
                            <h5>4.8/5</h5>
                            <p className='ms-3'>Build quality</p>
                          </div>
                          <ProgressBar variant="warning" now={60} />
                        </div>
                      </Col>
                      <Col sm={12} md={4} lg={4}>
                        <div>
                          <div className='d-flex'>
                            <h5>4.8/5</h5>
                            <p className='ms-3'>Build quality</p>
                          </div>
                          <ProgressBar variant="warning" now={60} />
                        </div>
                      </Col>
                      <Col sm={12} md={4} lg={4} className=' mt-md-4 mt-lg-4'>
                        <div>
                          <div className='d-flex'>
                            <h5>4.8/5</h5>
                            <p className='ms-3'>Build quality</p>
                          </div>
                          <ProgressBar variant="warning" now={60} />
                        </div>
                      </Col>
                      <Col sm={12} md={4} lg={4} className='mt-md-4 mt-lg-4'>
                        <div>
                          <div className='d-flex'>
                            <h5>4.8/5</h5>
                            <p className='ms-3'>Build quality</p>
                          </div>
                          <ProgressBar variant="warning" now={60} />
                        </div>
                      </Col>
                      <Col sm={12} md={4} lg={4} className='mt-md-4 mt-lg-4'>
                        <div>
                          <div className='d-flex'>
                            <h5>4.8/5</h5>
                            <p className='ms-3'>Build quality</p>
                          </div>
                          <ProgressBar variant="warning" now={60} />
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Col className='text-center'>
                  <b>Show All 75 Reviews <i className='fa fa-angle-right fw-bold'></i></b>
                </Col>
              </Container>
            </Container>

            {/* footer */}
            <AdminFooter />
          </Container>
        </Col>
      </Container>
    </Fragment>
  )
}
