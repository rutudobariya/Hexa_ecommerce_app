import React, { Fragment } from 'react';
import { Container,Row, Col,Form, Button } from 'react-bootstrap';

export default function Homecontact() {
    return (
        <Fragment>
            <Container fluid="true" id='contact' className='py-lg-5'>
                <Container>
                    <Row>
                        <Col sm={12} md={10} lg={7} className='contact-left mx-auto p-sm-3 pe-lg-5'>
                            <h1>By Subscribing To Our Newsletter You Can Get 30% Off</h1>
                            <p className='mt-lg-4'>Whoever said money can't buy happiness simply didn't know where to go shopping.</p>
                            <Form className='d-flex justify-content-between w-100 mt-lg-4'>
                                <Form.Group className="" controlId="exampleForm.ControlInput1">
                                    <Form.Control type="name" className="rounded-0 p-2 border-dark" placeholder="Your Name" pattern='{A-Za-z}' minLength="3" maxLength="32"required/>
                                </Form.Group>
                                <Form.Group className="rounded-0" controlId="exampleForm.ControlInput1">
                                    <Form.Control type="email" className="rounded-0 p-2 border border-dark" placeholder="Your Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required/>
                                </Form.Group>
                                <Button type='submit' variant='outline-dark ' className='rounded-0 px-3'>
                                    <i className='fa fa-paper-plane fs-5'></i>
                                </Button>
                            </Form>
                        </Col>
                        <Col sm={12} md={10} lg={5} className='contact-right mx-auto'>
                            <Row>
                                <Col className='col-6 p-md-3 p-sm-1 '>
                                    <h4>Store Location:</h4>
                                    <p>Sunny Isles Beach, FL 33160, United States</p>
                                </Col>
                                <Col className='col-6 p-md-3 p-sm-1'>
                                    <h4>Work Hours:</h4>
                                    <p>07:30 AM - 9:30 PM Daily</p>
                                </Col>
                                <Col className='col-6 mt-1 p-md-3 p-sm-1'>
                                    <h4>Phone:</h4>
                                    <p>010-020-0340</p>
                                </Col>
                                <Col className='col-6 mt-1 p-md-3 p-sm-1'>
                                    <h4>Email:</h4>
                                    <p>hexastore26@gmail.com</p>
                                </Col>
                                <Col className='col-12 mt-1 p-md-3 p-sm-1 text-center text'>
                                    <h4>Office Location:</h4>
                                    <p>North Miami Beach</p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Container>

        </Fragment>
    )
}
