import React, { useRef, useEffect, useState } from 'react';
import { Container, Col, Form, Button } from 'react-bootstrap';
import AdminHeader from '../Admin-Header';
import AdminSidebar from '../Admin-Sidebar';
import AdminFooter from '../Admin-Footer';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import swal from 'sweetalert';
import { SOURCE_URL } from '../../../api/api';

export default function AdminUpdateFooter() {

    const yearfrom = useRef("")
    const yearto = useRef("")
    const Navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        axios.get(SOURCE_URL+`Footer/${id}`)
            .then((response) => {
                yearfrom.current.value = response.data.yearfrom;
                yearto.current.value = response.data.yearto;
            })
    }, [])

    const UpdateFooter = () => {
        const update = {
            yearfrom: yearfrom.current.value,
            yearto: yearto.current.value,
        }
        axios.put(SOURCE_URL+`Footer/${id}`, update)
            .then(() => {
                swal("Year Update Successfully")
            });
        Navigate('/admin-login/admin-manage-footer')
    }

    return (
        <>
            <Container fluid="true">
                <Col className='admin-layout-left'>
                    {/* sidebar */}
                    <AdminSidebar />
                </Col>
                <Col className='admin-layout-right'>
                    {/* header */}
                    <AdminHeader />

                    <Container fluid="true" id="admin-content">
                        {/* manage footer */}
                        <Container fluid="true" id='update-footer' className='bg-dark text-white'>
                            <Col>
                                <h1 className='text-center py-3'>Update Footer</h1>
                                <hr className='border border-2 border-info w-25 mx-auto' />
                            </Col>

                            <Form className='p-5 m-5 shadow w-50 mx-auto'>
                                <label className='mb-2'>Manage Year</label> <br />
                                <input type='text'
                                    placeholder='Enter Start Year '
                                    minLength={4}
                                    maxLength={4}
                                    required
                                    className='form-control'
                                    ref={yearfrom}
                                />

                                <input type='text'
                                    placeholder='Enter Current Year'
                                    minLength={4}
                                    maxLength={4}
                                    required
                                    className='form-control mt-3'
                                    ref={yearto}
                                /><br />
                                <Button type='button' variant='outline-success' className='w-25' onClick={UpdateFooter}>Update</Button>
                            </Form>

                            {/* footer */}
                            <AdminFooter />
                        </Container>
                    </Container>
                </Col>
            </Container>
        </>
    )
}



