import React, { Fragment, useRef, useState, useEffect } from 'react';
import Footre from '../Footre';
import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import axios from 'axios';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import { SOURCE_URL } from '../../../api/api';

export default function Account() {

    // SCROLL TOP ARROW JS
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


    // CREATE ACCOUNT FORM JS FOR SENDING DATA TO ADMIN
    const username = useRef("");
    const state = useRef("");
    const city = useRef("");
    const email = useRef("");
    const password = useRef("");
    const confirmpassword = useRef("");
    const dateofbirth = useRef("");
    const gender = useRef("");
    const Navigate = useNavigate();

    const SandAccountData = () => {

        // store account form data form of variable 
        const insert = {
            username: username.current.value,
            state: state.current.value,
            city: city.current.value,
            email: email.current.value,
            password: password.current.value,
            confirmpassword: confirmpassword.current.value,
            dateofbirth: dateofbirth.current.value,
            gender: gender.current.value,
        }

        //add data in json file via link
        axios.post(SOURCE_URL+"Accountdata", insert)
            .then(() => {
                swal("Thank You For Create Account")
                window.location="/Account"
            });

    }

    //FATCH DATA IN STATE
    const [addstate, setAddState] = useState([]);
    useEffect(() => {
        axios.get(SOURCE_URL+'AddState')
            .then(res => setAddState(res.data))
    }, [])

    //FATCH DATA IN CITY
    const [addcity, setAddCity] = useState([]);
    useEffect(() => {
        axios.get(SOURCE_URL+'AddCity')
            .then(res => setAddCity(res.data))
    }, [])

    // FORM VALIDATION USING HOOKS
    // const [form, setForm] = useState({
    //     username: "",
    //     state: "",
    //     city: "",
    //     email: "",
    //     password: "",
    //     confirmpassword: "",
    //     gender: "",
    //     dateofbirth: ""
    // });

    // const onUpdateField = e => {
    //     const nextFormState = {
    //         ...form,
    //         [e.target.name]: e.target.value,
    //     };
    //     setForm(nextFormState);
    // };

    // const onSubmitForm = e => {
    //     e.preventDefault();
    //     SandAccountData();
    // };

    return (
        <Fragment>

            <Container id="account" >
                <h1 className='py-4 text-center'>Create Account</h1>

                <Row className='pb-5'>
                    <Col sm={12} md={12} lg={12} className='col-10 mx-auto'>
                        <Form className='w-75 mx-auto has-validation' 
                        // onSubmit={onSubmitForm} 
                        >
                            <Row>
                                <Col className='col-12 col-md-6 col-lg-6' >
                                    <FloatingLabel controlId="floatingInput" label="Username" className="mb-3">
                                        <Form.Control
                                            type="text" placeholder="Username"
                                            ref={username}
                                            name="username"
                                            // value={form.username}
                                            // onChange={onUpdateField} 
                                            />
                                    </FloatingLabel>
                                </Col>

                                <Col className='col-12 col-md-6 col-lg-6'>
                                    <FloatingLabel controlId="floatingDate" label="Date-Of-Birth" className="mb-3">
                                        <Form.Control type="date"
                                            ref={dateofbirth}
                                            name="dateofbirth"
                                            // value={form.dateofbirth}
                                            // onChange={onUpdateField} 
                                            />
                                    </FloatingLabel>
                                </Col>

                                <Col className='col-12 col-md-6 col-lg-6'>
                                    <select
                                        type="text"
                                        className='form-control form-select mb-3'
                                        ref={state}
                                    >
                                        <option>- Select State -</option>
                                        {addstate && addstate.map((item) => {
                                            return (
                                                <option value={item.state} key={item.id}>{item.state}</option>
                                            )
                                        })}
                                    </select>
                                </Col>

                                <Col className='col-12 col-md-6 col-lg-6'>
                                    <select
                                        type="text"
                                        className='form-control form-select mb-3'
                                        ref={city}
                                    >
                                        <option>- Select City -</option>
                                        {addcity && addcity.map((item) => {
                                            return (
                                                <option value={item.city} key={item.id}>{item.city}</option>
                                            )
                                        })}
                                    </select>
                                </Col>

                                <Col className='col-12'>
                                    <FloatingLabel controlId="floatingEmail" label="Email" className="mb-3">
                                        <Form.Control
                                            type="email" placeholder="Email"
                                            ref={email}
                                            name='email'
                                            // value={form.email}
                                            // onChange={onUpdateField}
                                            />
                                    </FloatingLabel>
                                </Col>

                                <Col className='col-12 col-md-6 col-lg-6'>
                                    <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
                                        <Form.Control 
                                            type="password" placeholder="Password" 
                                            ref={password}
                                            name='password'
                                            // value={form.password}
                                            // onChange={onUpdateField} 
                                            />
                                    </FloatingLabel>
                                </Col>

                                <Col className='col-12 col-md-6 col-lg-6'>
                                    <FloatingLabel controlId="floatingPassword" label="Confirm Password" className="mb-3">
                                        <Form.Control type="password" placeholder="Confirm Password" ref={confirmpassword}
                                            name="confirmpassword"
                                            // value={form.confirmPassword}
                                            // onChange={onUpdateField}
                                            />
                                    </FloatingLabel>
                                </Col>

                                <Col className='col-12 col-md-6 col-lg-6'>
                                    <FloatingLabel controlId="floatingGener" label="Gender" className="mb-3">
                                        <Form.Select type="text" placeholder="Confirm Password" ref={gender}
                                            name="gender"
                                            // value={form.gender}
                                            // onChange={onUpdateField}
                                            >
                                            <option value="select">Select Gender</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                        </Form.Select>
                                    </FloatingLabel>
                                </Col>

                                <Col className='col-12 col-md-6 col-lg-6'>
                                    <Button type='button' className='w-100 p-3' onClick={SandAccountData}>Create Account</Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>

            {/* footer */}
            <Footre />

            {/* scroll top arrow */}
            <button href="#header" onClick={scrollToTop} className="scroll-top bg-dark" data-aos="zoom-in" data-aos-duration="1000"> <i className="fa fa-angle-up"></i></button>

        </Fragment>
    )
}

