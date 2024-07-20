import React, { Fragment } from 'react'
import { Container } from 'react-bootstrap'
import Footre from '../Footre'

export default function Tracking() {
  return (
    <Fragment>
      <Container id='tracking' className='py-4'>
        <h1 className='text-center m3-5'>Track Your Order</h1>

        <Container className='py-5 ps-0 position-relative'>
          <div className="tracking-line rounded-pill bg-primary position-absolute w-100"></div>
          <div className='w-100 d-flex justify-content-between position-absolute'>
            <i className='fa fa-shopping-basket bg-primary p-3 rounded-circle text-white'></i>
            <i className='fa fa-gear bg-primary p-3 rounded-circle text-white'></i>
            <i className='fa fa-truck bg-primary p-3 rounded-circle text-white'></i>
            <i className='fa fa-home bg-primary p-3 rounded-circle text-white'></i>
          </div>
        </Container>

        <div className="input-group mt-5 mb-4 border border-black">
          <input type="text" className="form-control rounded-0" placeholder="Enter Tracking Id" aria-label="Recipient's tracking Id" aria-describedby="button-addon2" />
          <button className="btn bg-warning rounded-0 px-4" type="button" id="button-addon2">Track</button>
        </div>

        <div>
          <input type='checkbox'/> Notify my when my order is delivered
        </div>

      </Container>

      {/* footer */}
      <Footre />
    </Fragment>
  )
}
