import React, { Fragment,useState,useEffect } from 'react';
import { Container, Col, Table } from 'react-bootstrap';
import AdminHeader from '../Admin-Header';
import AdminSidebar from '../Admin-Sidebar';
import AdminFooter from '../Admin-Footer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { SOURCE_URL } from '../../../api/api';

export default function AdminManageOrders() {
  // DISPLAY DATA FROM API
  const [ orders, setOrders ] = useState([])
  const Navigate = useNavigate();

  const displayproduct = () => {
    axios.get(SOURCE_URL+"Cart")
    .then((response) => {
      setOrders(response.data)
    });
  }

  useEffect(() => {
    displayproduct();
  }, []);


  //DELET DATA FROM API
  const Deletproduct = (id) => {
    axios.delete(SOURCE_URL+`AddProducts/${id}`)
      .then((res) => {
        console.warn(res)
        displayproduct();
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
            {/* manage products */}
            <Container fluid="true" id='manage-product'>
            <Col className='my-3'>
                <h1 className='text-center pt-1'>Manage Orders</h1>
                <hr className='border border-2 border-info w-25 mx-auto' />
              </Col>
                <Table className='datatable table table-striped text-center my-5 mx-auto'> 
                  <thead className='datatable-head'>
                    <tr align="center">
                      <th>Id</th>
                      <th>PRODUCT NAME</th>
                      <th>PRODUCT PHOTO</th>
                      <th>QTY</th>
                      <th>PRICE</th>
                      <th>STATUS</th>
                    </tr>
                  </thead>
                  <tbody className='datatable-head'>
                    { orders.map((item) => {
                      return(
                        <tr key={item.id}>
                          <td>{item.id}</td>
                          <td>{item.productname}</td>
                          <td> <img src={item.productimg} alt='slide-images' style={{width:"70px"}} className='img-fluid'/></td>
                          <td>{item.productqut}</td>
                          <td>{item.productoffer}</td>
                          <td><input type="checkbox" /></td>
                        </tr>
                      )
                    })}
                  </tbody>

                </Table>
            </Container>

            {/* footer */}
            <AdminFooter />
          </Container>
        </Col>
      </Container>
    </Fragment>
  )

}
