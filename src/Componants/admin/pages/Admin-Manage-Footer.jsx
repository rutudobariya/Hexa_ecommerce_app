import React, { useState, useEffect } from 'react';
import { Container, Col, Form, Button, Table } from 'react-bootstrap';
import AdminHeader from '../Admin-Header';
import AdminSidebar from '../Admin-Sidebar';
import AdminFooter from '../Admin-Footer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { SOURCE_URL } from '../../../api/api';

const AdminManageFooter = () => {

    const [footer, setFooter] = useState('');
    const Navigate = useNavigate('');

    useEffect(() => {
        axios.get(SOURCE_URL+'Footer')
            .then(res => setFooter(res.data))
    }, [])

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
                        <Container fluid="true" id='manage-footer'>
                            <Col className='my-3'>
                                <h1 className='text-center pt-1'>Manage Footer</h1>
                                <hr className='border border-2 border-info w-25 mx-auto' />
                            </Col>

                            <h4 className='text-center mt-5'>Updaye Year</h4>

                            <Table className='table table-striped table-primary w-50 mx-auto border rounded-3 mt-4 mb-5 text-center'>
                                <thead>
                                    <tr>
                                        <th>To</th>
                                        <th>From</th>
                                        <th>Update</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {footer && footer.map((item) => {
                                        return (
                                            <tr key={item.id}>
                                                <td>{item.yearfrom}</td>
                                                <td>{item.yearto}</td>
                                                <td><i className='fa fa-pencil text-primary' onClick={() => Navigate(`/admin-login/admin-update-footer/${item.id}`)}></i></td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </Table>

                            {/* footer */}
                            <AdminFooter/>
                        </Container>
                    </Container>
                </Col>
            </Container>

        </>
    )
}

export default AdminManageFooter;



