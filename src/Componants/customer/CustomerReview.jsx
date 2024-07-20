import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import jay from "../../assets/images/homepage/Customer-review/jay.jpg";
import prit from "../../assets/images/homepage/Customer-review/prit.jpg"
import axay from "../../assets/images/homepage/Customer-review/axay.jpg";
import riya from "../../assets/images/homepage/Customer-review/riya.jpg";
import divya from "../../assets/images/homepage/Customer-review/divya.jpg";
const CustomerReview = () => {
    return (
        <div id='customer-review' className='p-5'>
            <Carousel className='p-5' align="center">
                <Carousel.Item>
                    <h3>Jay</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    <img
                        className="d-block img-fluid rounded-circle"
                        src={jay}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <h3>Divya</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <img
                        className="d-block img-fluid rounded-circle"
                        src={divya}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <h3>Prit</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                    <img
                        className="d-block img-fluid rounded-circle"
                        src={prit}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <h3>Riya</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                    <img
                        className="d-block img-fluid rounded-circle"
                        src={riya}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <h3>Axay</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                    <img
                        className="d-block img-fluid rounded-circle"
                        src={axay}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default CustomerReview;



