import React, { Fragment, useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import Slider from "react-slick";
import axios from 'axios';
import { SOURCE_URL } from '../../api/api';

export default function Womenproductslider() {

    // slick slider 
    const settings = {
        // dots: true,
        autoplay:true,
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

    const [womendata , setWomendata] = useState ([])
    useEffect(() => {
        axios.get(SOURCE_URL+"Womensliderdata")
            .then((response) => {
                setWomendata(response.data)
            })
    },[])

    return (
        <Fragment>
            <Container data-aos="fade-up" data-aos-duration="1000">
                <Container>
                    <div className='mx-auto'>
                        <Slider {...settings} className='slider-main'>

                            {womendata && womendata.map((item) => {
                                return(
                                    <div className='p-2 product-outer' key={item.id}>
                                        <div className='product-card '>
                                            <img src={item.productimg} alt="Womens-feshion" className='img-fluid' />
                                        </div>
                                        <div className='product-icons'>
                                            <ul className='d-flex justify-content-center w-75 mx-auto'>
                                                <li className='iconbox'>
                                                    <i className="fa fa-eye" aria-hidden="true"></i>
                                                </li>
                                                <li className='iconbox' >
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                </li>
                                                <li className='iconbox' >
                                                    <i className="fa fa-shopping-cart" aria-hidden="true" ></i>
                                                </li>
                                            </ul>
                                            <div className=''>
                                                <div className='d-flex justify-content-between mt-4'>
                                                    <h4 className='product-subheading'>{item.productname}</h4>
                                                    <span className='mt-1 product-starts'>
                                                        <i className='fa fa-star me-1'></i>
                                                        <i className='fa fa-star me-1'></i>
                                                        <i className='fa fa-star me-1'></i>
                                                        <i className='fa fa-star me-1'></i>
                                                        <i className='fa fa-star '></i>
                                                    </span>
                                                </div>
                                                <div>
                                                    <h3 className='product-price'>&#8377; {item.productoffer}</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}

                        </Slider>
                    </div>
                </Container>
            </Container>
        </Fragment>
    )
}

