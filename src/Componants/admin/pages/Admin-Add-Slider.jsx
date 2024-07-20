import React, { Fragment, useRef } from 'react'
import { Col, Container, Form, Button } from 'react-bootstrap'
import AdminSidebar from '../Admin-Sidebar'
import AdminHeader from '../Admin-Header'
import AdminFooter from '../Admin-Footer'
import axios from 'axios'
import swal from 'sweetalert'
import { useNavigate } from 'react-router-dom'
import { SOURCE_URL } from '../../../api/api'


export default function AdminAddSlider() {

  // ADD DATA IN API
  const slideimageurl = useRef('');
  const slidetitle = useRef('');
  const slidesubtitle = useRef('');
  const Navigate = useNavigate();

  const Addslide = () => {
    const insert = {
      slideimageurl : slideimageurl.current.value,
      slidetitle : slidetitle.current.value,
      slidesubtitle : slidesubtitle.current.value,
    }

    axios.post(SOURCE_URL+"HomeSlider" , insert)
      .then(() => {
        swal("Slide Added Successfully")
        Navigate('/admin-login/admin-manage-slider')
      })
  }

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
            {/* Add Slider */}
            <Container fluid="true" className='pb-5 bg-dark text-white' id='add-slider' >
              <Col className='py-4'>
                <h1 className='text-center pt-1'>Add Slide</h1>
                <hr className='border border-2 border-info w-25 mx-auto' />
              </Col>
              <Container className='w-75 mb-4'>

                <Form className='mt-lg-4'>
                  <Form.Group className='mt-3'>
                    <Form.Label className='m-0'>Slide Image</Form.Label>
                    <Form.Control type="url"
                      className="p-2 "
                      placeholder="Enter Slide Image Url"
                      ref={slideimageurl}
                      required
                    />
                  </Form.Group>
                
                  <Form.Group className='mt-3'>
                    <Form.Label className='m-0'>Slide Title</Form.Label>
                    <Form.Control type="text"
                      className="p-2 "
                      placeholder="Enter Slide Title"
                      ref={slidetitle}
                      required
                    />
                  </Form.Group>

                  <Form.Group className='mt-3'>
                    <Form.Label className='m-0'>Slide SubTitle</Form.Label>
                    <Form.Control type="text"
                      className="p-2 "
                      placeholder="Enter Slide Sub-Title"
                      ref={slidesubtitle}
                      required
                    />
                  </Form.Group>

                    <Button type='button' variant='outline-primary ' className='px-3 mt-4 w-25' onClick={Addslide} >Add State</Button>
                  </Form>

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
