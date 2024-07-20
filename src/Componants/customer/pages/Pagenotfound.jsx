import React, { Fragment } from 'react';
import error from "../../../assets/images/errorpage/404-error-page.webp";
import { Button, Container } from 'react-bootstrap';
import Footer from '../Footre';
import { Link } from 'react-router-dom';

export default function Pagenotfound() {
  return (
    <Fragment>

    <Container fluid="true" id="error" align="center">
      <img src={error} alt="error 404 page not found" className='img-fluid w-25'/>
      <div className='py-4'>
      <Link to="/home"> 
        <Button variant='outline-primary' className=' rounded-0'>Go Back <i className='fa fa-arrow-left'></i></Button>
        </Link>
      </div>
    </Container>

    {/* footer */}
    <Footer/>
      
    </Fragment>
  )
}
