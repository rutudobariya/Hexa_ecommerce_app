import React, { Fragment, useEffect, useState } from 'react'
import { Col, Container } from 'react-bootstrap';
import Slider from "react-slick";
import axios from 'axios';
import { SOURCE_URL } from '../../api/api';


export default function Menproductslider() {

    // SLICK SLIDER 
    const settings = {
        // dots: true,
        autoplay: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

    const [mensdata, setMensdata] = useState([])
    useEffect(() => {
        //fetch data from local browser api json-server api using axios
        axios.get(SOURCE_URL+"Mensliderdata")
            .then((response) => {
                setMensdata(response.data)
            });
    }, [])

    return (
        <Fragment>
            <Container data-aos="fade-up" data-aos-duration="1000">
                <Container>
                    <Col className='mx-auto'>
                        <Slider {...settings} className='slider-main'>
                            {mensdata && mensdata.map((item) => {
                                return (
                                    <Col className='p-2 product-outer'>
                                        <Col className='product-card '>
                                            <img src={item.productimg} className='img-fluid' />
                                        </Col>
                                        <Col className='product-icons'>
                                            <ul className='d-flex justify-content-center w-75 mx-auto'>
                                                <li className='iconbox'>
                                                    <i className="fa fa-eye" aria-hidden="true"></i>
                                                </li>
                                                <li className='iconbox' >
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                </li>
                                                <li className='iconbox' >
                                                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                                                </li>
                                            </ul>
                                            <Col className=''>
                                                <Col className='d-flex justify-content-between mt-4'>
                                                    <h4 className='product-subheading'>{item.productname}</h4>
                                                    <span className='mt-1 product-starts'>
                                                        <i className='fa fa-star me-1'></i>
                                                        <i className='fa fa-star me-1'></i>
                                                        <i className='fa fa-star me-1'></i>
                                                        <i className='fa fa-star me-1'></i>
                                                        <i className='fa fa-star '></i>
                                                    </span>
                                                </Col>
                                                <Col>
                                                    <h3 className='product-price'> &#8377; {item.productoffer}</h3>
                                                </Col>
                                            </Col>
                                        </Col>
                                    </Col>
                                )
                            })}
                        </Slider>
                    </Col>
                </Container>
            </Container>
        </Fragment>
    )
}

