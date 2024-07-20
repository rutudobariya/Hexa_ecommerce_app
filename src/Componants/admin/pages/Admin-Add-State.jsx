import React, { Fragment, useRef } from 'react'
import { Col, Container, Form, Button } from 'react-bootstrap'
import AdminSidebar from '../Admin-Sidebar'
import AdminHeader from '../Admin-Header'
import AdminFooter from '../Admin-Footer'
import axios from 'axios'
import swal from 'sweetalert'
import { useNavigate } from 'react-router-dom'
import { SOURCE_URL } from '../../../api/api'

export default function AdminAddState() {

    const state = useRef("");
    const Navigate = useNavigate();

    const Addstate = () => {
        const insert = {
            state: state.current.value,
        }

        axios.post(SOURCE_URL+"AddState", insert)
            .then(() => {
                swal("State Added Successfully");
                Navigate('/admin-login/admin-manage-state')
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
                        <Container fluid="true" className='pb-5 bg-dark text-white' id='add-state' >
                            <Col className='py-3'>
                                <h1 className='text-center pt-1'>Add State</h1>
                                <hr className='border border-2 border-info w-25 mx-auto' />
                            </Col>
                            <Container className='w-75 mb-4'>

                                <Form className='mt-lg-4'>
                                    <Form.Group controlId="exampleForm.ControlInput1">
                                        <Form.Label>State Name</Form.Label>
                                        <Form.Control type="text" className="p-2 " placeholder="Enter State Name"
                                            ref={state}
                                            required
                                        />
                                    </Form.Group>

                                    <Button type='button' variant='outline-primary ' className='px-3 mt-4 w-25' onClick={Addstate} >Add State</Button>
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
