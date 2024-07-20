import React, { useRef , useEffect } from 'react';
import { Container, Col, Button, Form, Row } from 'react-bootstrap';
import AdminHeader from '../Admin-Header';
import AdminSidebar from '../Admin-Sidebar';
import AdminFooter from '../Admin-Footer';
import axios from 'axios';
import swal from 'sweetalert';
import { useNavigate, useParams } from 'react-router-dom';
import { SOURCE_URL } from '../../../api/api';


export default function AdminUpdateCategory() {

    //store data in variable
    const categoryname = useRef("");
    const categorydate = useRef("");
    const categorydescraption = useRef("");
    const Navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        // api fetch data using axios.get() method
        axios.get(SOURCE_URL+`AddCategories/${id}`)
            .then((response) => {
                // fetch all data fro update
                categoryname.current.value = response.data.categoryname;
                categorydate.current.value = response.data.categorydate;
                categorydescraption.current.value = response.data.categorydescraption;
            });
    }, []);


    const UpdateCategory = () => {
        let update = {
            categoryname: categoryname.current.value,
            categorydate: categorydate.current.value,
            categorydescraption: categorydescraption.current.value,
        }

        // update data using axios library axios.put()
        axios.put(SOURCE_URL+`AddCategories/${id}`, update)
            .then(() => {
                swal("Category Update Successfully")
            })
        Navigate("/admin-login/admin-manage-category");
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
                        {/* add category */}
                        <Container fluid="true" id='admin-add-category' className='bg-dark text-white'>
                            <Col className='py-2'>
                                <h1 className='text-center pt-1'>Update category</h1>
                                <hr className='border border-2 border-info w-25 mx-auto' />
                            </Col>

                            <Container className='w-75 pb-1' id='add-category'>
                                <Form>
                                    <Row className="mb-3">
                                        <div className='mt-3'>
                                            <label className='text-primary'>Update Category Name</label>
                                            <input
                                                type="text"
                                                ref={categoryname}
                                                placeholder="Enter Category Name"
                                                className='form-control mt-1'
                                            />
                                        </div>
                                        <div className='mt-3'>
                                            <label className='text-primary'>Date</label>
                                            <input
                                                type="date"
                                                ref={categorydate}
                                                className='form-control mt-1'
                                            />
                                        </div>
                                        <div className='mt-3'>
                                            <label className='text-primary'>Category Descriptions</label>
                                            <textarea
                                                rows={4}
                                                ref={categorydescraption}
                                                placeholder="Enter Category Descriptions"
                                                className='form-control mt-1'
                                            ></textarea>
                                        </div>

                                        <Button type="button" variant='outline-success' className='mt-4 w-25 ms-3' onClick={UpdateCategory}>Update Category</Button>
                                    </Row>
                                </Form>
                            </Container>
                        </Container>

                        {/* footer */}
                        <AdminFooter />
                    </Container>
                </Col>
            </Container>
        </>
    )
}
