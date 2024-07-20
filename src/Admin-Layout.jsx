import React, { Fragment } from 'react';
import "./assets/css/Admin.css";
import { Col, Container, Row } from 'react-bootstrap';
import AdminHeader from './Componants/admin/Admin-Header'
import AdminSidebar from './Componants/admin/Admin-Sidebar'
import AdminContent from './Componants/admin/Admin-Content'
import AdminFooter from './Componants/admin/Admin-Footer'

export default function AdminLayout() {
  return (
    <Fragment>
      <Container fluid="true" >
        <Col className='admin-layout-left' >
          <AdminSidebar />
        </Col>
        <Col className='admin-layout-right'>
          <AdminHeader />
          <AdminContent/>
        </Col>
      </Container>
    </Fragment>
  )
}
