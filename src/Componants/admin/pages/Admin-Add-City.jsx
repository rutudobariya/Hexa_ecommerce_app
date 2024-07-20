import React, { Fragment, useState, useEffect, useRef } from 'react'
import { Col, Container, Form, Button } from 'react-bootstrap'
import AdminSidebar from '../Admin-Sidebar'
import AdminHeader from '../Admin-Header'
import AdminFooter from '../Admin-Footer'
import axios from 'axios'
import swal from 'sweetalert'
import { useNavigate } from 'react-router-dom'
import { SOURCE_URL } from '../../../api/api'

export default function AdminAddCity() {

    // FATCH DATA FROM API
    const [selectstate, setSelectState] = useState([])

    useEffect(() => {
        axios.get(SOURCE_URL+"AddState")
            .then((res) => {
                setSelectState(res.data)
            })
    }, [])

    // ADD DATA IN API
    const state = useRef('');
    const city = useRef('');
    const Navigate = useNavigate();

    const Addcity = () => {
        const insert = {
            state: state.current.value,
            city: city.current.value,
        }

        axios.post(SOURCE_URL+"AddCity", insert)
            .then(() => {
                swal("City Added Successfully");
                Navigate('/admin-login/admin-manage-city')
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
                        <Container fluid="true" className='pb-5 bg-dark text-white' id='add-city' >
                            <Col className='py-3'>
                                <h1 className='text-center pt-1'>Add City</h1>
                                <hr className='border border-2 border-info w-25 mx-auto' />
                            </Col>
                            <Container className='w-75 mb-4' id='add-category'>

                                <Form className='mt-lg-4'>
                                    <Form.Label>Select State</Form.Label>
                                    <Form.Select ref={state}>
                                        <option>- select state -</option>
                                        {selectstate.map((item) => {
                                            return (
                                                <option value={item.state}>{item.state}</option>
                                            )
                                        })}
                                    </Form.Select>
                                    <Form.Group className=" mt-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Add City</Form.Label>
                                        <Form.Control
                                            type="text"
                                            className=" p-2 " placeholder="Enter City Name"
                                            name='cityname'
                                            ref={city}
                                            required
                                        />
                                    </Form.Group>
                                    <Button type='button' variant='outline-primary ' className='px-3 mt-4 w-25' onClick={Addcity}>Add City</Button>
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


