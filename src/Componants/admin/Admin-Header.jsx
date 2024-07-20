import axios from 'axios';
import React, { Fragment,useState,useEffect } from 'react';
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';
import { Link,useNavigate } from 'react-router-dom';
import { SOURCE_URL } from '../../api/api';

export default function AdminHeader() {

  // GET CONTACT LENGTH
  const [contact , setContact] = useState([])
  const Navigate = useNavigate("");

  useEffect( () => {
    axios.get(SOURCE_URL+"Contactusdata")
      .then((res)=>{
        setContact(res.data)
      })
  },[])

  return (
    <Fragment>
      <Container fluid="true" id='admin-header' className='admin-header p-2 text-center'>
        <Row>
          <Col size={12} md={4} lg={9} className='d-flex justify-content-between align-items-center'>
          <div>
            <Button variant='outline-primary' className='fs-4 rounded-0'>
              <i className='fa fa-bars'></i>
            </Button>
          </div>
          <div>
            <Button className='bg-transparent border-0'>
              <i className='fa fa-bell fs-4'></i> 
            </Button>
            <Badge className='translate-middle p-1'>0</Badge>

            <Button className='bg-transparent border-0'>
              <i className='fa fa-question-circle fs-4'></i> 
            </Button>

            <Button className='bg-transparent border-0' onClick={()=> Navigate("/admin-login/admin-manage-contact")}>
              <i className='fa fa-envelope fs-4'></i> 
            </Button>
            <Badge className='translate-middle p-1'>{contact.length}</Badge>
          </div>

          </Col>
          <Col md={4} lg={3}>
              <Col className='admin-header-right d-flex justify-content-end align-items-center'>
                <ul >
                  <li className='dropdown list-unstyled mt-3'>
                    <Link to="#" className="dropdown-toggle text-decoration-none text-white" data-bs-toggle="dropdown"> Welcome : Rutu</Link>
                      <ul className='dropdown-menu p-2 bg-dark-subtle border border-0'>
                        <li><Link to="/admin-login/admin-change-password" className='text-decoration-none text-white'>Change Password</Link></li>
                        <li><Link to="/admin-login/admin-logout" className='text-decoration-none text-white'>Logout</Link></li>
                      </ul>
                  </li>
                </ul>
                <img src={"https://cdn-icons-png.flaticon.com/512/3135/3135715.png"} alt="admin-profile" className='img-fluid ms-4' />
              </Col>
          </Col>
        </Row>
      </Container>
    </Fragment>
  )
}
