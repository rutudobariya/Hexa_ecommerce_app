import React, { useRef } from 'react';
import { Container, Col, Button, Form, Row } from 'react-bootstrap';
import AdminHeader from '../Admin-Header';
import AdminSidebar from '../Admin-Sidebar';
import AdminFooter from '../Admin-Footer';
import axios from 'axios';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import { SOURCE_URL } from '../../../api/api';


export default function AdminAddCategory() {

  const categoryname = useRef("");
  const categorydate = useRef("");
  const categorydescraption = useRef("");
  const Navigate = useNavigate();

  const AddCategory = () => {
    let insert = {
      categoryname: categoryname.current.value,
      categorydate: categorydate.current.value,
      categorydescraption: categorydescraption.current.value,
    }

    axios.post(SOURCE_URL+"AddCategories", insert)
      .then(() => {
        swal("Category Added Successfully")
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
            <Col className='py-3'>
                <h1 className='text-center pt-1'>Add Category</h1>
                <hr className='border border-2 border-info w-25 mx-auto' />
              </Col>

              <Container className='w-75 pb-4' id='add-category'>
                <Form>
                  <Row className="pb-3">
                    <div className='mt-4'>
                      <label>Category Name</label>
                      <input
                        type="text"
                        ref={categoryname}
                        placeholder="Enter Category Name"
                        className='form-control mt-1'
                      />
                    </div>
                    <div className='mt-4'>
                      <label>Date</label>
                      <input
                        type="date"
                        ref={categorydate}
                        className='form-control mt-1'
                      />
                    </div>
                    <div className='mt-4'>
                      <label>Category Descriptions</label>
                      <textarea
                        rows={4}
                        ref={categorydescraption}
                        placeholder="Enter Category Descriptions"
                        className='form-control mt-1'
                      ></textarea>
                    </div>

                    <Button type="button" variant='outline-primary' className='mt-4 w-25 ms-2' onClick={AddCategory}>Add Category</Button>
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
