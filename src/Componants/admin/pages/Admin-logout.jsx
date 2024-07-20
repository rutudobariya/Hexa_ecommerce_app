import React, { Fragment } from 'react';
import { Button, Col, Container, Form } from 'react-bootstrap';

export default function AdminLogout() {
  return (
    <Fragment>

      <Container fluid="true" id='admin-logout'>
        <Col className="logout p-5 mx-auto shadow rounded-2" align="center" >
            <h3 className='text-center text-warning'>Are You Shure To LogOut ?</h3>

          <Form className='mt-4'>
            <Button type='submit' href='/home' variant='danger' className=' rounded-1 logout-btn'> LogOut</Button>
          </Form>
        </Col>
      </Container>

    </Fragment>
  )
}
