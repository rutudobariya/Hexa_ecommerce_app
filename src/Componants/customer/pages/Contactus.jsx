import React, { Fragment, useRef, useState, useEffect } from 'react';
import Footre from '../Footre';
import Pagebanner from '../Pagebanner';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import emailjs from '@emailjs/browser';
import { SOURCE_URL } from '../../../api/api';

export default function Contactus() {

  // SCROLL TOP ARROW JS
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


  // CONTACT US FORM JS FOR SENDING DATA TO ADMIN
  const firstname = useRef("");
  const lastname = useRef("");
  const email = useRef("");
  const mobile = useRef("");
  const message = useRef("");
  const Navigate = useNavigate();

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_q88l0wf', 'template_ixovm9k', form.current, 'XSpVxjI1q64unxs7G')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  const SandData = () => {

    // store contact form data form of variable 
    const insert = {
      firstname: firstname.current.value,
      lastname: lastname.current.value,
      email: email.current.value,
      mobile: mobile.current.value,
      message: message.current.value
    }

    //add data in json file via link
    axios.post(SOURCE_URL + "Contactusdata", insert)
      .then(() => {
        swal("Thank you for contact us our team contact you soon")
        setTimeout(() => {
          Navigate('/Contactus');
        }, 1500);
      });
  }

  return (
    <Fragment>

      {/* pagebanner */}
      <Pagebanner headline="Contact Us"/>

      {/* contact section */}
      <Container id='contactuspage' className='py-4 py-md-5 py-lg-5'>
        <Row>
          <Col size={10} md={6} lg={6} className='mx-auto'>
            <iframe className='map pe-md-4 pe-lg-4' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d186883.22977430958!2d-80.120492!3d25.930036!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9ad1877e4a82d%3A0xa891714787d1fb5e!2sNewport%20Fishing%20Pier!5e1!3m2!1sen!2sth!4v1686457618257!5m2!1sen!2sth" style={{ height: "100%", width: "100%" }}></iframe>
          </Col>
          <Col size={10} md={6} lg={6} className='contact mx-auto mt-4 mt-sm-4 mt-md-0 mt-lg-0'>
            <h2>Say Hello. Don't Be Shy!</h2>

            <form className='mt-lg-4' ref={form} onSubmit={sendEmail}>

              <Form.Group controlId="exampleForm.ControlInput1" data-aos="fade-up" data-aos-duration="1000">
                <Form.Control type="text" className="rounded-0 p-2 border-dark" ref={firstname} placeholder="First Name" name='firstname' minLength="2" maxLength="32" required />
              </Form.Group>

              <Form.Group className='mt-3' data-aos="fade-up" data-aos-duration="1000">
                <Form.Control type="text" className="rounded-0 p-2 border-dark" ref={lastname} placeholder="Last Name" name='lastname' minLength="2" maxLength="32" required />
              </Form.Group>

              <Form.Group className="rounded-0 mt-3" controlId="exampleForm.ControlInput1" data-aos="fade-up" data-aos-duration="1000">
                <Form.Control type="email" className="rounded-0 p-2 border border-dark" name='email' ref={email} placeholder="Your Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required />
              </Form.Group>

              <Form.Group className='mt-3' data-aos="fade-up" data-aos-duration="1000">
                <Form.Control type="text" className="rounded-0 p-2 border-dark" ref={mobile} name='mobile' placeholder="Mobile No." pattern='[0-9]{10}' length="10" required />
              </Form.Group>

              <textarea
                className="form-control mt-3 rounded-0 border border-dark" name='message' rows="5" ref={message} placeholder='Message...' data-aos="fade-up" data-aos-duration="1000"
              />

              <Button type='button' variant='outline-dark ' className='rounded-0 px-3 mt-3' onClick={SandData}>
                <i className='fa fa-paper-plane fs-5'></i>
              </Button>

            </form>

          </Col>
        </Row>
      </Container>

      {/* footer */}
      <Footre />

      {/* scroll top arrow */}
      <button href="#header" onClick={scrollToTop} className="scroll-top bg-dark" data-aos="zoom-in" data-aos-duration="1000"> <i className="fa fa-angle-up"></i></button>

    </Fragment>
  )
}
