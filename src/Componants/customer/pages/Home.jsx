import React, { Fragment, useState , useEffect } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';

// homesection
import shopping from "../../../assets/images/homepage/home-section/left-banner-image.jpg";
import menshoping from "../../../assets/images/homepage/home-section/baner-right-image-men.jpg";
import womenshoping from "../../../assets/images/homepage/home-section/baner-right-image-women.jpg";
import kidshoping from "../../../assets/images/homepage/home-section/baner-right-image-kids.jpg";
import accessories from "../../../assets/images/homepage/home-section/baner-right-image-acc.jpg";

// men section
import Menproductslider from '../Menproductslider';

// women section
import Womenproductslider from '../Womenproductslider';

// kids section
import Kidsproductslider from '../Kidsproductslider';

// social-media section
import instagram1 from "../../../assets/images/homepage/social-media-section/instagram-01.jpg";
import instagram2 from "../../../assets/images/homepage/social-media-section/instagram-02.jpg";
import instagram3 from "../../../assets/images/homepage/social-media-section/instagram-03.jpg";
import instagram4 from "../../../assets/images/homepage/social-media-section/instagram-04.jpg";
import instagram5 from "../../../assets/images/homepage/social-media-section/instagram-05.jpg";
import instagram6 from "../../../assets/images/homepage/social-media-section/instagram-06.jpg";

// footer section
import Footre from '../Footre';
import Export from '../Exportprojects';
import HomeSlider from '../HomeSlider';
import CustomerReview from '../CustomerReview';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { SOURCE_URL } from '../../../api/api';

export default function Home() {

  // SCROLL TOP ARROW
  const [visible, setVisible] = useState(false)
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true)
    }
    else if (scrolled <= 300) {
      setVisible(false)
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  window.addEventListener('scroll', toggleVisible);

  return (
    <Fragment>
      {/* home section start */}
      <Container fluid="true" className='py-2 pb-0 pb-sm-2 pb-md-2 pb-lg-3' id='home'>
        <Row className='p-4 g-3'>
          <Col sm={12} md={6} lg={6} className='home-left' data-aos="zoom-in" data-aos-duration="500">
            <div className='home-left-inner'>
              <div className='text-white'>
                <h1>We Are Hexashop</h1>
                <h3>New stock arrive</h3>
                <Button href='/Products' variant='outline-warning' className='rounded-0 mt-2'> Purchase Now </Button>
              </div>
            </div>
            <div className='home-left-image'>
              <img src={shopping} alt="shopping" className='img-fluid'/>
            </div>
          </Col>
          <Col size={12} sm={12} md={6} lg={6} className='home-right-main'>
            <Row className=' g-3 '>
              <Col sm={12} md={6} lg={6} className='home-right' data-aos="fade-left" data-aos-duration="1000">
                <div className='home-right-image'>
                  <img src={womenshoping} alt="shopping" className='img-fluid' />
                </div>
                <div className='home-right-inner'>
                  <div className='text-white'>
                    <h2>Women</h2>
                    <p>Best Cloths For Womens</p>
                    <Button variant='outline-warning' href='/Products#women' className='rounded-0'>Watch More</Button>
                  </div>
                </div>
              </Col>
              <Col sm={12} md={6} lg={6} className='home-right' data-aos="fade-up" data-aos-duration="1000">
                <div className='home-right-image'>
                  <img src={menshoping} alt="shopping" className='img-fluid' />
                </div>
                <div className='home-right-inner'>
                  <div className='text-white'>
                    <h2>Men</h2>
                    <p>Best Cloths For Mens</p>
                    <Button variant='outline-warning' href='/Products#men' className='rounded-0'>Watch More</Button>
                  </div>
                </div>
              </Col>
              <Col sm={6} md={6} lg={6} className='home-right' data-aos="fade-down" data-aos-duration="1000">
                <div className='home-right-image'>
                  <img src={kidshoping} alt="shopping" className='img-fluid' />
                </div>
                <div className='home-right-inner'>
                  <div>
                    <h2>Kids</h2>
                    <p>Best Cloths For Kids</p>
                    <Button variant='outline-warning' href='/Products#kid' className='rounded-0'>Watch More</Button>
                  </div>
                </div>
              </Col>
              <Col sm={6} md={6} lg={6} className='home-right' data-aos="fade-right" data-aos-duration="1000">
                <div className='home-right-image'>
                  <img src={accessories} alt="shopping" className='img-fluid' />
                </div>
                <div className='home-right-inner'>
                  <div className=''>
                    <h2>Accessories</h2>
                    <p>Best Trend Accessories</p>
                    <Button variant='outline-warning' className='rounded-0'>Watch More</Button>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      {/* slider section start */}
      <Container fluid="true" className='mt-3 mt-md-4 mt-lg-5'>
        <HomeSlider />
      </Container>

      {/* mens section start */}
      <Container fluid="true" className='py-0 pb-md-2 pb-lg-5' id='mens'>
        <Col className='product-head d-flex justify-content-between'>
          <div className='col-9'>
            <h1>Men's Latest</h1>
            <p>Best mens collection for all sesons. must visit.</p>
          </div>
          <div className='col-3 d-flex justify-content-end align-items-start'>
            <Button className='mt-2' variant='outline-dark'>Show More</Button>
          </div>
        </Col>
        {/* Menproductslider */}
        <Container fluid="true" className='product-slider-container'>
          <Menproductslider />
        </Container>
      </Container>


      {/* womens section start */}
      <Container fluid="true" className='py-0 pb-md-2 pb-lg-5' id='womens'>
        <Col className='product-head d-flex justify-content-between'>
          <div className='col-9'>
            <h1>Women's Latest</h1>
            <p>Best womens collection for all sesons. must visit.</p>
          </div>
          <div className='col-3 d-flex justify-content-end align-items-start'>
            <Button className='mt-2' variant='outline-dark'>Show More</Button>
          </div>
        </Col>
        {/* womenproductslider */}
        <Container fluid="true" className='product-slider-container'>
          <Womenproductslider />
        </Container>
      </Container>


      {/* kids section start */}
      <Container fluid="true" className='py-0 pb-md-2 pb-lg-5' id='kids'>
        <Col className='product-head d-flex justify-content-between'>
          <div className='col-9'>
            <h1>Kids's Latest</h1>
            <p>Best kids collection for all sesons. must visit.</p>
          </div>
          <div className='col-3 d-flex justify-content-end align-items-start'>
            <Button className='mt-2' variant='outline-dark'>Show More</Button>
          </div>
        </Col>
        {/* kidsproductslider */}
        <Container fluid="true" className='product-slider-container'>
          <Kidsproductslider />
        </Container>
      </Container>


      {/* explore section */}
      <Container fluid="true">
        <Export />
      </Container>


      {/* customer Review */}
      <Container fluid="true">
        <CustomerReview />
      </Container>



      {/* social-media section start */}
      <Container fluid="true" id='socialmedia' className='py-lg-5'>
        <Container className='mx-auto'>
          <Col className='social-media-head'>
            <h1>Social Media</h1>
            <p>Find the perfect gift for everyone on your list.</p>
          </Col>
          <Row className='py-4 social-media-body'>
            <Col sm={4} md={2} lg={2} className="p-0 social-media-main" data-aos="zoom-in" data-aos-duration="500">
              <img src={instagram1} alt="social-media-1" className='img-fluid w-100 ' />
            </Col>
            <Col sm={4} md={2} lg={2} className="p-0 position-relative social-media-main" data-aos="zoom-in" data-aos-duration="500" data-aos-delay="200">
              <img src={instagram2} alt="social-media-2" className='img-fluid w-100 position-absolute' />
              <div className='p-3 position-absolute h-100 w-100'>
                <div className='social-inner h-100'>
                  <i className='fa fa-instagram text-white-50 fs-2'></i>
                </div>
              </div>
            </Col>
            <Col sm={4} md={2} lg={2} className="p-0 social-media-main" data-aos="zoom-in" data-aos-duration="500" data-aos-delay="400">
              <img src={instagram3} alt="social-media-3" className='img-fluid w-100 ' />
            </Col>
            <Col sm={4} md={2} lg={2} className="p-0 position-relative social-media-main" data-aos="zoom-in" data-aos-duration="500" data-aos-delay="600">
              <img src={instagram4} alt="social-media-4" className='img-fluid w-100 position-absolute' />
              <div className='p-3 position-absolute h-100 w-100'>
                <div className='social-inner h-100'>
                  <i className='fa fa-instagram text-white-50 fs-2'></i>
                </div>
              </div>
            </Col>
            <Col sm={4} md={2} lg={2} className="p-0 social-media-main" data-aos="zoom-in" data-aos-duration="500" data-aos-delay="800">
              <img src={instagram5} alt="social-media-5" className='img-fluid w-100 ' />
            </Col>
            <Col sm={4} md={2} lg={2} className="p-0 position-relative social-media-main" data-aos="zoom-in" data-aos-duration="500" data-aos-delay="1000">
              <img src={instagram6} alt="social-media-6" className='img-fluid w-100 position-absolute' />
              <div className='p-3 position-absolute h-100 w-100'>
                <div className='social-inner h-100'>
                  <i className='fa fa-instagram text-white-50 fs-2'></i>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* footer start */}
      <Footre />

      {/* scroll top arrow */}
      <button href="#header" onClick={scrollToTop} className="scroll-top bg-dark" data-aos="zoom-in" data-aos-duration="1000"> <i className="fa fa-angle-up"></i></button>

    </Fragment>
  )
}
