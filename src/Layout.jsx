import React, { Fragment, useState, useEffect } from 'react';
import { Badge, Button, Col, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import brandlogo from './assets/images/navbar/brand-logo.png';
import Topbar from './Componants/customer/pages/Topbar';
import axios from 'axios';
import { SOURCE_URL } from './api/api';

export default function Layout() {

    // COLORCHANGE NAVBAR ON SCROLL
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 80) {
            setColorchange(true);
        }
        else {
            setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);

    // SCROLLTOP ARROW
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
        window.scrollTo(0, 0)
    };
    window.addEventListener('scroll', toggleVisible);

    //HEMBURGER MENU 
    const Showmenu = () => {
        const menutoggle = document.querySelector('.hamburger');
        menutoggle.classList.toggle('active');
    }
    const Hidemenu = () => {
        const menutoggle = document.querySelector('.hamburger');
        menutoggle.classList.remove('active');
    }


    // COUNT CART ITEMS
    const [itemCount, setItemCount] = useState(0);
    useEffect(() => {
        axios.get(SOURCE_URL + "Cart")
            .then((result) => {
                setItemCount(result.data)
            })
    })

    return (
        <Fragment>
            <Topbar />
            <Navbar expand="lg" className={colorChange ? 'navbar colorChange' : 'navbar'} id='navigation'>
                <Container>
                    <Navbar.Brand>
                        <Link to="/home" onClick={scrollToTop}>
                            <img src={brandlogo} alt='Brand-logo' className='img-fluid' />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle className='toggle p-0 border border-0'
                        aria-controls="navbarSupportedContent"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarScroll"
                        aria-expanded="false"
                    >
                        <div className="menutoggle me-2">
                            <div className="hamburger navbar-toggle border-0 p-0" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
                                aria-label="Toggle navigation"
                                onClick={Showmenu}>
                                <span className="bar"></span>
                                <span className="bar"></span>
                                <span className="bar"></span>
                            </div>
                        </div>
                    </Navbar.Toggle>
                    <Navbar.Collapse className="collapse navbar-collapse" id="navbarScroll">
                        <Nav className="ms-auto my-2 my-lg-0">
                            <Link
                                to="/home"
                                spy="true"
                                smooth={true}
                                offset={-40}
                                duration={500}
                                onClick={scrollToTop}
                            >
                                <span
                                    data-bs-toggle="collapse"
                                    data-bs-target=".navbar-collapse.show"
                                    onClick={Hidemenu}
                                >
                                    Home
                                </span>
                            </Link>
                            <Link
                                to="/home#mens"
                                spy="true"
                                smooth={true}
                                offset={-40}
                                duration={500}
                            >
                                <span
                                    data-bs-toggle="collapse"
                                    data-bs-target=".navbar-collapse.show"
                                    onClick={Hidemenu}
                                >
                                    Men's
                                </span>
                            </Link>
                            <Link
                                to="home#womens"
                                spy="true"
                                smooth={true}
                                offset={-40}
                                duration={500}
                            >
                                <span
                                    data-bs-toggle="collapse"
                                    data-bs-target=".navbar-collapse.show"
                                    onClick={Hidemenu}
                                >
                                    Women's
                                </span>
                            </Link>
                            <Link
                                to="home#kids"
                                spy="true"
                                smooth={true}
                                offset={-40}
                                duration={500}
                            >
                                <span
                                    data-bs-toggle="collapse"
                                    data-bs-target=".navbar-collapse.show"
                                    onClick={Hidemenu}
                                >
                                    Kid's
                                </span>
                            </Link>
                            <NavDropdown title="Pages" id="navbarScrollingDropdown">
                                <Col className="dropdown-body">
                                    <NavDropdown.Item>
                                        <Link
                                            to="/aboutus"
                                            spy="true"
                                            smooth={true}
                                            offset={-40}
                                            duration={500}
                                            onClick={scrollToTop}
                                        >
                                            <span
                                                data-bs-toggle="collapse"
                                                data-bs-target=".navbar-collapse.show"
                                                onClick={Hidemenu}
                                            >
                                                About us
                                            </span>
                                        </Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <Link
                                            to="/products"
                                            spy="true"
                                            smooth={true}
                                            offset={-40}
                                            duration={500}
                                            onClick={scrollToTop}
                                        >
                                            <span
                                                data-bs-toggle="collapse"
                                                data-bs-target=".navbar-collapse.show"
                                                onClick={Hidemenu}
                                            >
                                                Products
                                            </span>
                                        </Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <Link
                                            to="home#export"
                                            spy="true"
                                            smooth={true}
                                            offset={-40}
                                            duration={500}
                                        >
                                            <span
                                                data-bs-toggle="collapse"
                                                data-bs-target=".navbar-collapse.show"
                                                onClick={Hidemenu}
                                            >
                                                Explore
                                            </span>
                                        </Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <Link
                                            to="/Contactus"
                                            spy="true"
                                            smooth={true}
                                            offset={-40}
                                            duration={500}
                                        >
                                            <span
                                                data-bs-toggle="collapse"
                                                data-bs-target=".navbar-collapse.show"
                                                onClick={Hidemenu}
                                            >
                                                Contact Us
                                            </span>
                                        </Link>
                                    </NavDropdown.Item>

                                </Col>
                            </NavDropdown>
                            <Link
                                to="/Account"
                                spy="true"
                                smooth={true}
                                offset={-40}
                                duration={500}
                            >
                                <span
                                    data-bs-toggle="collapse"
                                    data-bs-target=".navbar-collapse.show"
                                    onClick={Hidemenu}
                                >
                                    Account
                                </span>
                            </Link>
                        </Nav>
                        <Link
                            to='/cart'
                            spy="true"
                            smooth={true}
                            offset={-40}
                            duration={500}
                            className='text-decoration-none'
                        >
                            <Button variant='warning' className='rounded-0 border-0 d-flex justify-content-evenly align-items-center cart' data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" onClick={Hidemenu}>
                                <svg width="14" className='me-1' height="14" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                    <path className="_1bS9ic" d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86" fill="#fff"></path>
                                </svg>
                                Cart
                                <Badge className='bg-success rounded-1 p-1 m-0 ms-2 cartbadge'>{itemCount.length}</Badge>
                            </Button>
                        </Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
        </Fragment>
    );
}
