import React, { Fragment } from 'react';
import { Container,Row, Col, Button } from 'react-bootstrap';

// explore section
import newaccessories from "../../assets/images/homepage/export-section/explore-image-01.jpg";
import shoppinggirl from "../../assets/images/homepage/export-section/explore-image-02.jpg";


export default function Exploreprojects() {
  return (
    <Fragment>
              <Container fluid="true" id='export' className='pt-md-4'>
        <Container className='py-lg-5'>
          <Row>
            <Col sm={12} md={6} lg={6} className='export-left p-5  pt-md-0 pe-md-4 pe-lg-5 p-sm-0 mb-sm-4 pb-lg-5'>
              <h1 >Explore Our Products</h1>
              <p className='mt-3 mt-lg-3 mt-sm-1 text-justify'>A product is something made in a factory; a brand is something that is bought by the customer. A product can be copied by a competitor; a brand is unique. A product can be quickly outdated; a successful brand is timeless..</p>
              <Row className='mt-3 mt-sm-1 '>
                <Col className='col-1 mt-2 mt-lg-2 mt-sm-1 '>
                  <i className="fa fa-quote-left fs-1"></i>
                </Col>
                <Col className='col-11'>
                  <p className='ps-3'>If you believe your product or service can fulfill a true need, it’s your moral obligation to sell it.</p>
                </Col>
              </Row>
              <p className='mt-3 mt-lg-2 mt-sm-1'>According to this view, democracy is a product of western culture, and it cannot be applied to the Middle East which has a different cultural, religious, sociological and historical background.</p>
              <p className='mt-3 mt-lg-2 mt-sm-1'>My feeling about work is it’s much more about the experience of doing is than the end product. Sometimes things that are really great and make lots of money are miserable to make, and vice versa.</p>
              <Button variant='outline-warning' className='mt-3  mt-sm-1 rounded-0'>Discover More</Button>
            </Col>
            <Col sm={12} md={6} lg={6} className='px-3 '>
              <Row className='export-right'>
                <Col className='d-flex justify-content-center align-items-center text-box' data-aos="zoom-in-up" data-aos-duration="1000">
                  <div className='text-center'>
                    <h3>Leather Bags</h3>
                    <p>Latest Collection</p>
                  </div>
                </Col>
                <Col className='p-0 export-right-inner' data-aos="zoom-in-up" data-aos-duration="1000">
                  <img src={newaccessories} alt="newaccessories" className='img-fluid w-100' />
                </Col>
                <Col className='p-0 export-right-inner' data-aos="zoom-in-up" data-aos-duration="1000">
                  <img src={shoppinggirl} alt="shoppinggirl" className='img-fluid w-100 ' />
                </Col>
                <Col className='d-flex justify-content-center align-items-center text-box' data-aos="zoom-in-up" data-aos-duration="1000">
                  <div className='text-center'>
                    <h3>Different Types</h3>
                    <p>Over 304 Products</p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>

    </Fragment>
  )
}
