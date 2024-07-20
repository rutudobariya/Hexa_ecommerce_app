import React, { Fragment, useState } from 'react'
import Footre from '../Footre'
import { Container, Col, Row } from 'react-bootstrap'

export default function Help() {

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    window.addEventListener('scroll', toggleVisible);

    return (
        <Fragment>

            <Container id='help'>
                <Col className="pt-4">
                    <h1 className='text-center'>How Can We Help You ?</h1>
                    <p className='text-center'>If you have any question or help contact with us by given ways below</p>
                </Col>
                <Container>
                    <Row className='g-5 p-5'>
                        <Col size={10} md={5} lg={5} className='help-inner shadow p-3 pt-4 mx-auto' align="center">
                            <span className='px-3'><i className='fa fa-map-marker text-warning fs-4'></i></span>
                            <h4 className='my-3'>Head Office</h4>
                            <p>16501 Collins Ave, Sunny Isles Becho, FL 33160, United State</p>
                        </Col>
                        <Col size={10} md={5} lg={5} className='help-inner shadow p-3 pt-4 mx-auto' align="center">
                            <span className='px-3'><i className='fa fa-phone text-warning fs-4'></i></span>
                            <h4 className='my-3'>Phone Number</h4>
                            <p>010-020-0340 <br /> 888-0123-4567(Toll Free)</p>
                        </Col>
                        <Col size={10} md={5} lg={5} className='help-inner shadow p-3 pt-4 mx-auto' align="center">
                            <span className='px-3'><i className='fa fa-envelope text-warning fs-4'></i></span>
                            <h4 className='my-3'>Email</h4>
                            <p>hexashop26@gmail.com</p>
                        </Col>
                        <Col size={10} md={5} lg={5} className='help-inner shadow p-3 pt-4 mx-auto' align="center">
                            <span className='px-3'><i className='fa fa-comments text-warning fs-4'></i></span>
                            <h4 className='my-3'>Message Us</h4>
                            <p>9867547879</p>
                        </Col>
                    </Row>
                </Container>
            </Container>

            {/* footer */}
            <Footre />

            {/* scroll top arrow */}
            <button href="#header" onClick={scrollToTop} className="scroll-top bg-dark" data-aos="zoom-in" data-aos-duration="1000"> <i className="fa fa-angle-up"></i></button>
        </Fragment>
    )
}
