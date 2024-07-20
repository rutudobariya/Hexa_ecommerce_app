import React from 'react';
import { Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Topbar() {
    return (
        <Fragment>
            <Container fluid="true" id='topbar' className='' style={{ backgroundColor: "#2a2a2a" }}>
                <Row>
                    <Col className="topbar-left text-white d-flex justify-content-start align-items-center bg-warning col-6 col-sm-5 col-md-4 col-lg-3">
                        <span className='ps-4 fs-5'>
                            <i className='fa fa-phone'></i> 010-020-0340
                        </span>
                    </Col>
                    <Col className='topbar-right text-white d-flex justify-content-end align-items-center p-2 pe-0 pe-md-4 pe-lg-4 clo-6 col-sm-7 col-md-8 col-lg-9'>
                        <b>Follow Us : </b> &nbsp; &nbsp; &nbsp;
                        <Link className='rounded-0 me-3'>
                            <i className='fa fa-facebook'></i>
                        </Link>
                        <Link className='rounded-0 me-3'>
                            <i className='fa fa-instagram '></i>
                        </Link>
                        <Link className='rounded-0 me-3'>
                            <i className='fa fa-behance'></i>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

