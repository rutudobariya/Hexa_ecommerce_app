import React, { Fragment, useEffect, useState } from 'react'
import Pagebanner from '../Pagebanner'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';

// aboutus section
import aboutus from "../../../assets/images/aboutuspage/aboutus-section/about-left-image.jpg";

// our brands section
import Slider from "react-slick";

// contact section
import Aboutcontact from '../Aboutcontact';

// footer section
import Footre from '../Footre';
import axios from 'axios';
import { SOURCE_URL } from '../../../api/api';


export default function Aboutus() {

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

  // OUR TEAM DATA
  const [ourteam, setOurteam] = useState([])
  useEffect(() => {
    axios.get(SOURCE_URL+"Ourteamcarddata")
      .then((response) => {
        setOurteam(response.data)
      })
  }, [])


  // OUR BRAND SLIDER 
  var settings = {

    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    pauseOnHover: false,
    slidesToShow: 3,
    autoplay: true,
    lazyLoad : true,
    autoplaySpeed: 3000,
    speed : 1000,
    dots : true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  const [ourbrand, setOurbrand] = useState([0])
  useEffect(() => {
    axios.get(SOURCE_URL+"Ourbrands")
      .then((response) => {
        setOurbrand(response.data)
      })
  }, [])



  return (
    <Fragment>

      {/* pagebanner section*/}
      <Pagebanner headline="About Our Company" />

      {/* aboutus section */}
      <Container fluid="true" id='aboutus' className='pt-5 pb-lg-5'>
        <Container>
          <Row>
            <Col size={12} md={6} lg={6} className='px-4 px-md-0 px-lg-0' data-aos="fade-right" data-aos-duration="1000">
              <img src={aboutus} alt="about us" className='img-fluid' />
            </Col>
            <Col sm={12} md={6} lg={6} className='aboutus-right p-4  pt-md-0 pe-md-4 pe-lg-5 p-sm-4 ps-lg-5'>
              <h1 data-aos="fade-up" data-aos-duration="1000">About Us & Our Skills</h1>
              <p className='mt-3 mt-lg-3 mt-sm-1 text-justify' data-aos="fade-up" data-aos-duration="1000">A product is something made in a factory; a brand is something that is bought by the customer. </p>
              <Row className='mt-3 mt-sm-1' data-aos="fade-up" data-aos-duration="1000">
                <Col className='col-1 mt-2 mt-lg-2 mt-sm-1 '>
                  <i className="fa fa-quote-left fs-1"></i>
                </Col>
                <Col className='col-11'>
                  <p className='ps-3'>If you believe your product or service can fulfill a true need, it’s your moral obligation to sell it.</p>
                </Col>
              </Row>
              <p className='mt-3 mt-lg-2 mt-sm-1' data-aos="fade-up" data-aos-duration="1000">My feeling about work is it’s much more about the experience of doing is than the end product. Sometimes things t0hat are really great and make lots of money are miserable to make, and vice versa.</p>
              <div className='dots'></div>
              <ul className='social-icons mt-3 mt-md-2' >
                <li className='rounded-circle' data-aos="zoom-in" data-aos-duration="1000"><Link to="/" className='fa fa-facebook-f text-decoration-none fs-4 text-white m-0 p-0'></Link></li>
                <li className='rounded-circle' data-aos="zoom-in" data-aos-duration="1000"><Link to="/" className='fa fa-twitter text-decoration-none fs-4 text-white'></Link></li>
                <li className='rounded-circle' data-aos="zoom-in" data-aos-duration="1000"><Link to="/" className='fa fa-linkedin text-decoration-none fs-4 text-white'></Link></li>
                <li className='rounded-circle' data-aos="zoom-in" data-aos-duration="1000"><Link to="/" className='fa fa-behance text-decoration-none fs-4 text-white'></Link></li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* ourteam section */}
      <Container id='ourteam' fluid="true" className='py-5'>
        <Container>
          <Col size={12} className='ourteam-head text-center'>
            <h1>Our Amazing Team</h1>
            <p>"Talent wins games, but teamwork and intelligence win championships"</p>
          </Col>
        </Container>
        <Row className='container mx-auto mt-5 mt-md-5 mt-lg-5'>

          {ourteam && ourteam.map((item) => {
            return (
              <Col size={12} md={4} lg={4} data-aos="fade-up" data-aos-duration="1000" key={item.id}>
                <div className='ourteam-card position-relative'>
                  <Col className='ourteam-front position-absolute' >
                    <img src={item.photo} alt="team member-1" className='img-fluid' />
                  </Col>
                  <Col className='ourteam-back position-absolute d-flex justify-content-center align-items-center'>
                    <ul className='ourteam-social w-100 d-flex justify-content-evenly'>
                      <li className='rounded-circle'><Link to="/" className='fa fa-facebook-f text-decoration-none text-white m-0 p-0'></Link></li>
                      <li className='rounded-circle'><Link to="/" className='fa fa-twitter text-decoration-none  text-white'></Link></li>
                      <li className='rounded-circle'><Link to="/" className='fa fa-linkedin text-decoration-none text-white'></Link></li>
                      <li className='rounded-circle'><Link to="/" className='fa fa-behance text-decoration-none  text-white'></Link></li>
                    </ul>
                  </Col>
                </div>
                <div className='ourteam-info text-center mt-3'>
                  <h3>{item.name}</h3>
                  <p>{item.post}</p>
                </div>
              </Col>
            )
          })}
        </Row>
      </Container>


      {/* ourservice */}
      <Container fluid="true" id='ourservice' className='py-lg-5'>
        <Container>
          <Col className='ourservice text-center mt-4'>
            <h1>Our Services</h1>
            <p> "Great acts are made up of small deeds."</p>
          </Col>
          <Row className='mt-lg-5 servicecard-row pb-4'>
            <Col md={5} lg={5} className='col-7 mt-4 mt-lg-0 mx-auto text-center servicecard-head shadow  p-4' data-aos="fade-up" data-aos-duration="1000">
              <i className='fa fa-shopping-basket fs-1'></i>
              <h2 className='mt-lg-3'>Free Shipping</h2>
              <p className='px-lg-3' >Save money online with free shipping - Browse through our free coupons, coupen codes, and cashback offers from popular brands and leading stores in India.</p>
            </Col>
            <Col md={5} lg={5} className='col-7 mt-4 mt-lg-0 mx-auto text-center servicecard-head shadow  p-4' data-aos="fade-up" data-aos-duration="1000">
              <i className='fa fa-credit-card fs-1'></i>
              <h2 className='mt-lg-3'>Secure Payments</h2>
              <p className='px-lg-3' >try to pay by Credit-card or Debit-card via a secure payment method, and talk to the owner over the phone.</p>
            </Col>
            <Col md={5} lg={5} className='col-7 mt-4 mt-lg-5 mx-auto text-center servicecard-head shadow  p-4' data-aos="fade-up" data-aos-duration="1000">
            <sub><i className='fa fa-truck fs-3'></i></sub><i className='fa fa-map-pin fs-1'></i>
              <h2 className='mt-lg-3'>Tracking</h2>
              <p className='px-lg-3' >We allow the customer to know; whether the item has left the warehouse, where it is within the delivery process, and the estimated delivery date and time.</p>
            </Col>
            <Col md={5} lg={5} className='col-7 mt-4 mt-lg-5 mx-auto text-center servicecard-head shadow  p-4' data-aos="fade-up" data-aos-duration="1000">
              <i className='fa fa-cogs fs-1'></i>
              <h2 className='mt-lg-3'>24 x 7 Support</h2>
              <p className='px-lg-3' >These system enable customer service ans support terms to contact technicians and send them to service a product a when needed.</p>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* our brands */}
      <Container fluid="true" id='ourbrands' className=''>
        <Container>
          <Col className='ourservice text-center mt-4'>
            <h1>Our Brands</h1>
            <p>"Look the best version of yourself"</p>
          </Col>
          <Row className='mt-lg-5 servicecard-row pb-5'>

            <div>
              <Slider {...settings}>
                {ourbrand && ourbrand.map((item) => {
                  return (
                    <div key={item.id} className='slidebox' data-aos="zoom-in-down" data-aos-duration="1000">
                      <img src={item.image} alt={item.brandname} className='img-fluid h-100 mx-auto' />
                    </div>
                  )
                })}
              </Slider>
            </div>
          </Row>
        </Container>
      </Container>

      {/* Contact section */}
      <Aboutcontact />

      {/* footer */}
      <Footre />


      {/* scroll top arrow */}
      <button href="#header" onClick={scrollToTop} className="scroll-top bg-dark" data-aos="zoom-in" data-aos-duration="1000"> <i className="fa fa-angle-up"></i></button>


    </Fragment>
  )
}
