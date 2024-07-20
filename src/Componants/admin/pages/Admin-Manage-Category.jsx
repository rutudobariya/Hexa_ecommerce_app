import React, { Fragment, useState, useEffect } from 'react';
import { Container, Col } from 'react-bootstrap';
import AdminHeader from '../Admin-Header';
import AdminSidebar from '../Admin-Sidebar';
import AdminFooter from '../Admin-Footer';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { SOURCE_URL } from '../../../api/api';


export default function AdminManageCategory() {

  const [addcategory, setAddcategory] = useState([]);
  const Navigate = useNavigate('');


  function dispalycategory() {
    axios.get(SOURCE_URL+"AddCategories")
      .then((response) => {
        setAddcategory(response.data);
      })
  }

  useEffect(() => {
    dispalycategory();
  },[]);


  // DELET DATA FROM API
  function DeletCategory(id) {
    axios.delete(SOURCE_URL+`AddCategories/${id}`)
      .then((response) => {
        console.warn(response)
        dispalycategory();
      })
  }


  return (
    <Fragment>
      <Container fluid="true">
        <Col className='admin-layout-left'>
          <AdminSidebar />
        </Col>
        <Col className='admin-layout-right'>
          <AdminHeader />

          <Container fluid="true" id="admin-content">
            {/* manage category start */}
            <Container fluid="true" id='manage-category'>
            <Col className='my-3'>
                <h1 className='text-center pt-1'>Manage Category</h1>
                <hr className='border border-2 border-info w-25 mx-auto' />
              </Col>

              <table className='datatable table table-striped text-center mt-4'>
                <thead className='datatable-head'>
                  <tr>
                    <th>No.</th>
                    <th>Category Name</th>
                    <th>Add Date</th>
                    <th>Discraption</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody className='datatable-body'>
                  {addcategory && addcategory.map((item) => {
                    return (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.categoryname}</td>
                        <td>{item.categorydate}</td>
                        <td>{item.categorydescraption}</td>
                        <td className='fs-5'>
                          <i className='fa fa-pencil text-primary' onClick={() => Navigate(`/admin-login/admin-update-category/${item.id}`)}></i>
                          <span className='text-dark'> || </span>
                          <i className='fa fa-trash text-danger action' onClick={() => DeletCategory(item.id)}></i>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
              {/* admin-footer */}
              <AdminFooter />
            </Container>
          </Container>
        </Col>
      </Container>
    </Fragment>
  )
}
