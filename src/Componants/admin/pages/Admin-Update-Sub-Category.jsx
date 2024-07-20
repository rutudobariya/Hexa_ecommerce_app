import React, { useState, useEffect, useRef } from 'react';
import { Container, Col, Button, Form, Row } from 'react-bootstrap';
import AdminHeader from '../Admin-Header';
import AdminSidebar from '../Admin-Sidebar';
import AdminFooter from '../Admin-Footer';
import axios from 'axios';
import swal from 'sweetalert';
import { useNavigate, useParams } from 'react-router-dom';
import { SOURCE_URL } from '../../../api/api';


export default function AdminUpdateSubCategory() {

    // FATCH CATEGORY FROM API
    const [addcategory, setAllcategory] = useState([])

    useEffect(() => {
        axios.get(SOURCE_URL+"AddCategories")
            .then((response) => {
                setAllcategory(response.data)
            });
    }, []);

    // UPDATA DATA IN API
    const categoryname = useRef("");
    const subcategoryname = useRef("");
    const subcategorydate = useRef("");
    const subcategorydescraption = useRef("");
    const Navigate = useNavigate();
    const{id} = useParams();

    useEffect(() => {
        axios.get(SOURCE_URL+`AddSubCategories/${id}`)
            .then((response) => {
                categoryname.current.value = response.data.categoryname;
                subcategoryname.current.value = response.data.subcategoryname;
                subcategorydate.current.value = response.data.subcategorydate;
                subcategorydescraption.current.value = response.data.subcategorydescraption;
            })
    }, [])

    const UpdateSubcategory = () => {
        let update = {
            categoryname: categoryname.current.value,
            subcategoryname: subcategoryname.current.value,
            subcategorydate: subcategorydate.current.value,
            subcategorydescraption: subcategorydescraption.current.value,
        }
    
        axios.put(`http://localhost:2602/AddSubCategories/${id}`, update)
            .then(() => {
                swal("Sub-Category Update Successfully")
            })
        Navigate("/admin-login/admin-manage-subcategory");
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
                        <Container fluid="true" id='update-subcategory' className='bg-dark text-white'>
                            <Col className='pt-3'>
                                <h1 className='text-center pt-1'>Update sub-category</h1>
                                <hr className='border border-2 border-info w-25 mx-auto' />
                            </Col>

                            <Form>
                                <Row className="pb-3 w-75 mx-auto">
                                    <div className='mt-4' >
                                        <label className='text-primary'>Select Category</label>
                                        <select
                                            type="text"
                                            className='form-control mt-1 text-black'
                                            ref={categoryname}
                                            style={{color:"black"}}
                                        >
                                            <option> - Select Category -</option>
                                            {addcategory && addcategory.map((row) => {
                                                return (
                                                    <option value={row.categoryname} key={row.id}>{row.categoryname}</option>
                                                )
                                            })}
                                        </select>
                                    </div>

                                    <div className='mt-4'>
                                        <label className='text-primary'>Sub-Category Name</label>
                                        <input
                                            type="text"
                                            ref={subcategoryname}
                                            placeholder="Enter Sub-Category Name"
                                            className='form-control mt-1'
                                        />
                                    </div>

                                    <div className='mt-4'>
                                        <label className='text-primary'>Date</label>
                                        <input
                                            type="date"
                                            ref={subcategorydate}
                                            className='form-control mt-1'
                                        />
                                    </div>
                                    <div className='mt-4'>
                                        <label className='text-primary'>Sub-category Descriptions</label>
                                        <textarea
                                            rows={4}
                                            ref={subcategorydescraption}
                                            placeholder="Enter Sub-category Descriptions"
                                            className='form-control mt-1'
                                        ></textarea>
                                    </div>

                                    <Button type="button" variant='outline-success' className='mt-4 w-25 ms-2' onClick={UpdateSubcategory}>Update Subcategory</Button>
                                </Row>
                            </Form>
                        </Container>

                        {/* footer */}
                        <AdminFooter />
                    </Container>
                </Col>
            </Container>
        </>
    )
}

