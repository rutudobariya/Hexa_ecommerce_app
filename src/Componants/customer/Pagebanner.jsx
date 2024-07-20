import React, { Fragment } from 'react'
import { Container } from 'react-bootstrap'

export default function Pagebanner(props) {
  return (
    <Fragment>
      <Container fluid={true} id='pagebanner'>
        <h1 className='text-center' data-aos="zoom-out" data-aos-duration="1000">{props.headline}</h1>
      </Container>      
    </Fragment>
  )
}
