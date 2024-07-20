import React, { Fragment, useState, useEffect } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import logo from "../../assets/images/homepage/footer/white-logo.png";
import { Link } from 'react-router-dom';
import axios from 'axios';
import Login from './pages/Login';
import { SOURCE_URL } from '../../api/api';


export default function Footre() {

  // FOR FOOTER YEAR
  const [footer, setFooter] = useState([])
  useEffect(() => {
    axios.get(SOURCE_URL+'Footer')
      .then(res => setFooter(res.data))
  }, [])
  
  const scrolltop=()=>{
    window.screenTop(0,0)
  }

  return (
    <Fragment>
      {footer && footer.map((item) => {
        return (

          <Container fluid={true} id='footer' className='pt-sm-5 pb-sm-2 pt-md-5 pt-md-2 pt-lg-5 pt-lg-2' key={item.id}>
            <Container className='mx-auto'>
              <Row>
                <Col size={12} md={6} lg={3}>
                  <Link to="/home">
                    <img src={logo} alt='footer-logo' className='img-fluid' />
                  </Link>
                  <p className='mt-3 fw-lighter'>
                    <Link to="/" className='text-white text-decoration-none'>16501 Collins Ave, Sunny Isles Becho, FL 33160, United State</Link>
                  </p>
                  <p className='mt-3'>
                    <Link to="/" className='text-white text-decoration-none'>hexashop26@gmail.com</Link>
                  </p>
                  <p className='mt-3'>
                    <Link to="/" className='text-white text-decoration-none'>010-020-0340</Link>
                  </p>
                </Col>
                <Col size={12} md={6} lg={3}>
                  <h4 className='text-white'>Help & Information</h4>
                  <p className='mt-3'>
                    <Link to="/help" className='text-white text-decoration-none' onClick={scrolltop}>Help</Link>
                  </p>
                  <p className='mt-3'>
                    <Link to="/Faqs" className='text-white text-decoration-none' onClick={scrolltop}>FAQ's</Link>
                  </p>
                  <p className='mt-3'>
                    <Link to="/Tracking" className='text-white text-decoration-none' onClick={scrolltop}>Tracking ID</Link>
                  </p>
                  <Link to="/Login">
                    <Button type='button' variant='outline-warning'  className='rounded-0 px-4'>Login</Button>
                  </Link>
                </Col>
                <Col size={12} md={6} lg={3}>
                  <h4 className='text-white'>Useful Links</h4>
                  <p className='mt-3'>
                    <Link to="/home" className='text-white text-decoration-none' onClick={scrolltop}>Home</Link>
                  </p>
                  <p className='mt-3'>
                    <Link to="/Aboutus" className='text-white text-decoration-none' onClick={scrolltop}>About</Link>
                  </p>
                  <p className='mt-3'>
                    <Link to="/contactus" className='text-white text-decoration-none' onClick={scrolltop}>Contact us</Link>
                  </p>
                  <Link to="/Account">
                    <Button type='button' variant='outline-warning'  className='rounded-0 px-4'>Register</Button>
                  </Link>
                </Col>
                <Col size={12} md={6} lg={3}>
                  <h4 className='text-white'>Shopping & Categories</h4>
                  <p className='mt-3'>
                    <Link to="/products#men" className='text-white text-decoration-none'>Men's Shopping</Link>
                  </p>
                  <p className='mt-3'>
                    <Link to="/Products#women" className='text-white text-decoration-none'>Women's Shopping</Link>
                  </p>
                  <p className='mt-3'>
                    <Link to="/Products#kid" className='text-white text-decoration-none'>Kid's Shopping</Link>
                  </p>
                </Col>
              </Row>
              <Col size={12}>
                <hr className='hrline bg-white rounded-5' />
              </Col>

              <Col size={12} className='text-center'>
                <p className='text-white mb-1' >Copyright &#169; {item.yearfrom} - {item.yearto} Hexashop Co. Ltd. All Rights Reserved. </p>
                <div className='icons'>
                  <span><Link to="/" className='fa fa-facebook-f text-decoration-none p-2 fs-4'></Link></span>
                  <span><Link to="/" className='fa fa-twitter text-decoration-none p-2 fs-4'></Link></span>
                  <span><Link to="/" className='fa fa-linkedin text-decoration-none p-2 fs-4'></Link></span>
                  <span><Link to="/" className='fa fa-behance text-decoration-none p-2 fs-4'></Link></span>
                </div>
                <p className='text-white mt-1'>Design By : <b className='text-warning'>Rutu Dobariya</b></p>
              </Col>
            </Container>
          </Container>
        )
      })}

    </Fragment>
  )
}
