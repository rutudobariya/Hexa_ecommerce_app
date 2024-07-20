import React, { Fragment } from 'react'
import { Button, Col, Container, Form, FormGroup, Row } from 'react-bootstrap';
import login from "../../../assets/images/admin/admin-login/login-gif.gif";
import { Link } from 'react-router-dom';
import Footre from '../Footre';


export default function Login() {
    return (
        <Fragment>
            <Container className='py-5' id='admin-login'>
                <Col className='text-center'>
                    <h1 className='text-warning'>Login</h1>
                    <hr className='w-25 mx-auto border border-3 border-info' />
                </Col>
                <Row className='mt-5'>
                    <Col className='col-10 mx-auto'>
                        <Form className='px-5' action='admin-login/admin-dashbord'>
                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                                <Form.Label className='p-0'>
                                    Email
                                </Form.Label>
                                <Form.Control type='email' placeholder='Your Email' pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required />
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                <Form.Label className='p-0'>
                                    Password
                                </Form.Label>
                                <Form.Control type="password" placeholder="Password" pattern='{a-z}{0-9}' minLength={5} maxLength={10} title='use alphaban and numbers password must 5-10 charector' required />
                            </Form.Group>

                            <Form.Group>
                                <Button href='/admin-login/admin-dashboard' type='submit' variant='outline-warning' className='me-2'> Submit</Button>
                                <Link to="/admin-login/admin-forgot-password" className='text-decoration-none text-info'> Forget password ?</Link>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>

            {/* Footer */}
            <Footre/>

        </Fragment>
    )
}
