import React, { Fragment, useRef, useEffect } from 'react'
import { Col, Container, Form, Button } from 'react-bootstrap'
import AdminSidebar from '../Admin-Sidebar'
import AdminHeader from '../Admin-Header'
import AdminFooter from '../Admin-Footer'
import axios from 'axios'
import swal from 'sweetalert'
import { useNavigate, useParams } from 'react-router-dom'
import { SOURCE_URL } from '../../../api/api'


export default function AdminUpdateSlider() {

    // UPDATE DATA IN API
    const slideimageurl = useRef('');
    const slidetitle = useRef('');
    const slidesubtitle = useRef('');
    const Navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        axios.get(SOURCE_URL+`HomeSlider/${id}`)
            .then((response) => {
                slideimageurl.current.value = response.data.slideimageurl;
                slidetitle.current.value = response.data.slidetitle;
                slidesubtitle.current.value = response.data.slidesubtitle;
            });
    }, []);

    const Updateslide = () => {
        const update = {
            slideimageurl: slideimageurl.current.value,
            slidetitle: slidetitle.current.value,
            slidesubtitle: slidesubtitle.current.value,
        }

        // update data using axios library axios.put()
        axios.put(SOURCE_URL+`HomeSlider/${id}`, update)
            .then(() => {
                swal("Slide Update Successfully")
            })
        Navigate("/admin-login/admin-manage-slider")
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
                        <Container fluid="true" className='pb-5 bg-dark text-white' id='Update-slider' >
                            <Col className='py-3'>
                                <h1 className='text-center pt-1'>Update Slide</h1>
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

                                    <Form.Group className='mt-4'>
                                        <Form.Label className='m-0'>Slide Title</Form.Label>
                                        <Form.Control type="text"
                                            className="p-2 "
                                            placeholder="Enter Slide Title"
                                            ref={slidetitle}
                                            required
                                        />
                                    </Form.Group>

                                    <Form.Group className='mt-4'>
                                        <Form.Label className='m-0'>Slide SubTitle</Form.Label>
                                        <Form.Control type="text"
                                            className="p-2 "
                                            placeholder="Enter Slide Sub-Title"
                                            ref={slidesubtitle}
                                            required
                                        />
                                    </Form.Group>

                                    <Button type='button' variant='outline-success ' className='px-3 mt-4 w-25' onClick={Updateslide} >Update State</Button>
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
