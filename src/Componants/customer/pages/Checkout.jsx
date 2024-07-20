import React, { useState, useEffect } from 'react'
import Footre from '../Footre'
import { Button } from 'react-bootstrap'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import { SOURCE_URL } from '../../../api/api'

export default function Checkout() {

    // FATCH STATE CITY
    const [state, setState] = useState([])
    const Navigate = useNavigate('');
    useEffect(() => {
        axios.get(SOURCE_URL+'AddState')
            .then((response) => {
                setState(response.data)
            })
    }, [])

    // FATCH STATE CITY
    const [city, setCity] = useState([])
    useEffect(() => {
        axios.get(SOURCE_URL+'Addcity')
            .then((response) => {
                setCity(response.data)
            })
    }, [])

    // FATCH CART PRODUCT NAME
    const [cart, setCart] = useState([])
    useEffect(() => {
        axios.get(SOURCE_URL+'Cart')
            .then((response) => {
                setCart(response.data)
            })
    }, [])

    // ORDERPLACE
    const OrderPlace = () => {
        Swal.fire({
            icon: 'success',
            title: 'Order',
            text: 'Placed Successfully',
        });
        setTimeout(() => {
            Navigate("/home")
        }, 2000);
    }


    return (
        <div>
            {/* Checkout Start  */}
            <div className="container-fluid pt-5">
                <div className="row px-xl-5">
                    <div className="col-lg-8">
                        <div className="mb-4">
                            <h4 className="font-weight-semi-bold mb-4">Billing Address</h4>
                            <div className="row">
                                <div className="col-md-6 form-group">
                                    <label className='mt-2'>First Name</label>
                                    <input className="form-control rounded-0 border border-black" type="text" placeholder="Enter First Name" />
                                </div>
                                <div className="col-md-6 form-group">
                                    <label className='mt-2'>Last Name</label>
                                    <input className="form-control rounded-0 border border-black" type="text" placeholder="Enter First Name" />
                                </div>
                                <div className="col-md-6 form-group">
                                    <label className='mt-2'>E-mail</label>
                                    <input className="form-control rounded-0 border border-black" type="text" placeholder="Enter Email Address" />
                                </div>
                                <div className="col-md-6 form-group">
                                    <label className='mt-2'>Mobile No</label>
                                    <input className="form-control rounded-0 border border-black" type="text" placeholder="Enter Mobile Number" />
                                </div>
                                <div className="col-md-12 form-group">
                                    <label className='mt-2'>Address</label>
                                    <textarea className="form-control rounded-0 border border-black" type="text" placeholder="Enter Your Address"></textarea>
                                </div>

                                <div className="col-md-6 form-group">
                                    <label className='mt-2'>State</label>
                                    <select title='City' className="form-control rounded-0 border border-black">
                                        <option>- Select State -</option>
                                        {state && state.map((place) => {
                                            return (
                                                <option key={place.id}>{place.state}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                                <div className="col-md-6 form-group">
                                    <label className='mt-2'>City</label>
                                    <select title='City' className="form-control rounded-0 border border-black">
                                        <option>- Select City -</option>
                                        {city && city.map((place) => {
                                            return (
                                                <option key={place.id}>{place.city}</option>
                                            )
                                        })}
                                    </select>
                                </div>

                                <div className="col-md-6 form-group">
                                    <label className='mt-2'>ZIP Code</label>
                                    <input className="form-control rounded-0 border border-black" type="text" placeholder="Enter Zip-Code" />
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card border-black rounded-0 mb-5">
                            <div className="card-header bg-black text-white border border-black rounded-0 d-flex justify-content-between">
                                <h4 className="font-weight-semi-bold m-0">Order Total</h4>
                                <h4 className='m-0'>Rs.</h4>
                            </div>
                            <div className="card-body">

                                {cart.map((product) => {
                                    return (
                                        <div className="d-flex justify-content-between" key={product.id}>
                                            <p>{product.productname}</p>
                                            <p>&#8377; {product.productoffer}</p>
                                        </div>
                                    )
                                })}
                                <hr className="mt-0" />
                                <div className="d-flex justify-content-between mb-3 pt-1">
                                    <h6 className="font-weight-medium">Subtotal</h6>
                                    <p className='rounded-0 border-0 text-end'
                                        id='subtotle'
                                    >&#8377; {cart.map(item => item.productoffer * item.productqut).reduce((total, value) => (parseInt(total) + parseInt(value)), 0)}</p>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <input
                                        defaultValue="Shipping"
                                        className='rounded-0 border-0 text-start form-control p-0'
                                    />
                                    <p className='rounded-0 border-0 p-0 text-end form-control text-black'
                                        id='shipping'
                                    >&#8377; 00</p>
                                </div>
                            </div>
                            <div className="card-footer border border-black border-bottom-0 border-end-0 border-start-0 bg-transparent rounded-0">
                                <div className="d-flex justify-content-between mt-2">
                                    <h5 className="font-weight-bold">Total</h5>
                                    <h5 className="font-weight-bold">&#8377; {cart.map(item => item.productoffer * item.productqut).reduce((total, value) => (parseInt(total) + parseInt(value)), 0)}</h5>
                                </div>
                            </div>
                        </div>
                        <div className="card border-black mb-5 rounded-0">
                            <div className="card-header bg-dark text-white rounded-0 border-0">
                                <h4 className="font-weight-semi-bold m-0">Payment</h4>
                            </div>
                            <div className="card-body">
                                <div className="form-group">
                                    <div className="custom-control custom-radio">
                                        <input type="radio" className="custom-control-input" name="payment" id="paypal" />
                                        <label className="custom-control-label ms-2" htmlFor="paypal">Paypal</label>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="custom-control custom-radio">
                                        <input type="radio" className="custom-control-input" name="payment" id="directcheck" />
                                        <label className="custom-control-labe ms-2" htmlFor="directcheck">Direct Check</label>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="custom-control custom-radio">
                                        <input type="radio" className="custom-control-input" name="payment" id="banktransfer" />
                                        <label className="custom-control-labe ms-2" htmlFor="banktransfer">Bank Transfer</label>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer bg-transparent p-2 border border-black border-bottom-0 border-end-0 border-start-0 bg-transparent rounded-0">
                                <Button variant='outline-success' className="btn-lg font-weight-bold w-100 rounded-0 p-1" onClick={OrderPlace}>Place Order</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Checkout end  */}

            {/* Footer Start */}
            <Footre />
        </div>
    )
}


