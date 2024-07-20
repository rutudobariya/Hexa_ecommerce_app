import React, { Fragment, useState, useEffect } from 'react';
import { Container, Col } from 'react-bootstrap';
import AdminHeader from '../Admin-Header';
import AdminSidebar from '../Admin-Sidebar';
import AdminFooter from '../Admin-Footer';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import { SOURCE_URL } from '../../../api/api';

export default function AdminManageSubCategory() {

  const [addcategory, setAllcategory] = useState([])
  const Navigate = useNavigate();


  const dispalysubcategory = () => {
    axios.get(SOURCE_URL+"AddSubcategories")
    .then((response) => {
      setAllcategory(response.data)
    });
  }

  useEffect(() => {
    dispalysubcategory();
  }, []);


  // DELET DATA FROM API
  function DeletSubCategory(id) {
    axios.delete(SOURCE_URL+`AddSubcategories/${id}`)
      .then((response) => {
        console.warn(response)
        dispalysubcategory();
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
            <Container fluid="true" id='manage-subcategory'>
            <Col className='my-3'>
                <h1 className='text-center pt-1'>Manage Sub-Category</h1>
                <hr className='border border-2 border-info w-25 mx-auto' />
              </Col>

              <table className='datatable table table-striped text-center mt-4'>
                <thead className='datatable-head'>
                  <tr>
                    <th>No.</th>
                    <th>Category Name</th>
                    <th>Sub-Category Name</th>
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
                        <td>{item.subcategoryname}</td>
                        <td>{item.subcategorydate}</td>
                        <td>{item.subcategorydescraption}</td>
                        <td className='fs-5'>
                          <i className='fa fa-pencil text-primary action' onClick={() => Navigate(`/admin-login/admin-update-subcategory/${item.id}`)}></i> 
                          <span className='text-dark'> || </span>
                          <i className='fa fa-trash text-danger action' onClick={()=> DeletSubCategory(item.id)}></i>
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
