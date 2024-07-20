import React, { Fragment } from 'react';
import { Container, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function AdminForgotPassword() {
  return (
    <Fragment>

      <Container>
        <Col size={10} md={6} lg={6} className="my-5 p-1 mx-auto shadow rounded-2">
        <Col className='mt-4'>
          <h1 className='text-center text-warning'>Forget Password</h1>
          <hr className='w-25 mx-auto border border-3 border-info'/>
        </Col>

          <Form className='p-5'>
            <Form.Group className="mb-3" controlId="formPlaintextEmail">
              <Form.Label className='p-0 text-start'>
                Email
              </Form.Label>
              <Form.Control type='email' placeholder='Your Email' pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPlaintextEmail">
              <Form.Label className='p-0 text-start'>
                Code
              </Form.Label>
              <Form.Control type='number' placeholder='Your Code' title='Check Your Email for Code' lang='6' required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPlaintextPassword">
              <Form.Label className='p-0'>
                New Password
              </Form.Label>
              <Form.Control type="password" placeholder="Password" pattern='{a-z}{0-9}' minLength={5} maxLength={10} title='use alphaban and numbers password must 5-10 charector' required />
            </Form.Group>

            <Form.Group>
              <Button type='submit' variant='outline-warning' className='me-2'> Submit</Button>
              <Link to="/admin-login" className='text-decoration-none text-info'>  Login Here?</Link>
            </Form.Group>
          </Form>
        </Col>
      </Container>

    </Fragment>
  )
}
