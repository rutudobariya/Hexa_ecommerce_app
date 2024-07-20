import React, { useState, useEffect } from 'react'
import Footre from '../Footre';
import Pagebanner from '../Pagebanner';
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import axios from 'axios';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { SOURCE_URL } from '../../../api/api';

export default function Catr() {

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


  // ADD PRODUCT FROM API
  const [product, setProduct] = useState([]);
  const Navigate = useNavigate('');

  const cartdata = () => {
    axios.get(SOURCE_URL+'Cart')
      .then((res) => {
        setProduct(res.data)
      });
  }

  useEffect(() => {
    cartdata();
  }, [])


  //DELET ITEM FROM CART
  const DeletProduct = (id) => {
    axios.delete(SOURCE_URL+`Cart/${id}`)
      .then(() => {
        toast('Product Remove From Cart', {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        Navigate("/Cart")
        cartdata()
      })
  }


  return (
    <div>
      {/* pagebanner */}
      <Pagebanner headline="Cart"/>

      {/* cart */}
      <Container fluid="true" id='cart'>
        <Row className='px-3 py-3 py-md-5 py-lg-5'>
          <Col sm={11} md={7} lg={7} className='col-12 mx-auto carttable p-0'>
            <Scrollbars style={{ width: "100%", height: "100%" }}>
              <table className='table table-striped table-bordered'>
                <thead align="center" className="tablehead">
                  <tr>
                    <th className='bg-dark text-white'>Products</th>
                    <th className='bg-dark text-white'>Price(&#8377;)</th>
                    <th className='bg-dark text-white'>Photo</th>
                    <th className='bg-dark text-white'>Quantity</th>
                    <th className='bg-dark text-white'>Total(&#8377;)</th>
                    <th className='bg-dark text-white'>Remove</th>
                  </tr>
                </thead>

                <tbody align="center">
                  {product && product.map((item,cartindex) => {
                    return (
                      <tr key={item.id}>
                        <td>{item.productname}</td>
                        <td>{item.productoffer}</td>
                        <td><img src={item.productimg} alt="product image" style={{ width: "50px", height: "70px" }} /></td>
                        <td>
                          <InputGroup className='quantity'>
                            <Button variant='primary' className="btn-minus rounded-0 py-1 d-flex justify-content-center align-items-center"  onClick={() => {
                              const Incqty = product.map((item, index) => {
                                return cartindex === index ? {...item, productqut : parseInt(item.productqut) - 1} : item
                              })
                              setProduct(Incqty)
                            }}>
                              <i className="fa fa-minus"></i>
                            </Button>
                            <Form.Control
                              value={item.productqut}
                              className='rounded-0 text-center qty'
                              readOnly
                              minLength="0"
                            />
                            <button className="btn btn-sm btn-primary btn-plus rounded-0 py-1 d-flex justify-content-center align-items-center" onClick={() => {
                              const Incqty = product.map((item, index) => {
                                return cartindex === index ? {...item, productqut : parseInt(item.productqut) + 1} : item
                              })
                              setProduct(Incqty)
                            }}>
                              <i className="fa fa-plus"></i>
                            </button>
                          </InputGroup>
                        </td>
                        <td>{item.productoffer * item.productqut}</td>
                        <td><i className='fa fa-trash text-danger fs-4' onClick={() => DeletProduct(item.id)}></i></td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </Scrollbars>
          </Col>
          <Col sm={11} md={4} lg={4} className='col-12 mx-auto h-100'>
            <div className='mt-3 mt-md-0 mt-lg-0'>
              <div className='pb-3 added'>
                <h3><span className='text-primary'>{product.length}</span> Products Added In Cart</h3>
              </div>
              <InputGroup className="mb-3 mb-sm-3 mb-md-5 mb-lg-5 border border-black">
                <Form.Control
                  placeholder="Cupone Code"
                  className='rounded-0 py-3 py-sm-2 py-md-3 py-lg-3 border border-0'
                />
                <Button variant="warning" id="button-addon2" className='rounded-0 border border-bottom-0 border-top-0 border-start-1 border-end-0 border-black'>
                  Apply Cupone
                </Button>
              </InputGroup>
            </div>
            <div className='border border-black'>
              <h4 className='bg-dark text-white p-3 m-0'>Cart Summary</h4>
              <Col className=" d-flex">
                <p className='rounded-0 py-3 m-0 border border-bottom-1 border-top-0 border-start-0 border-end-0 border-black text-center w-50'
                >Subtotal</p>
                <p className='rounded-0 py-3 m-0 border border-bottom-1 border-top-0 border-start-0 border-end-0 border-black text-center w-50'
                >&#8377; {product.map(item => item.productoffer * item.productqut).reduce((total, value) =>(parseInt(total) + parseInt(value)), 0)
                  }</p>
              </Col>

              <Col className=" d-flex">
                <p className='rounded-0 py-3 m-0 border border-bottom-1 border-top-0 border-start-0 border-end-0 border-black text-center w-50'
                >Shipping</p>
                <p className='rounded-0 py-3 m-0 border border-bottom-1 border-top-0 border-start-0 border-end-0 border-black text-center w-50'>
                &#8377; 00
                </p>
              </Col>
              <div>
              <Link to="/checkout">
                <Button variant='warning' className='w-100 rounded-0 py-2 fs-5' >
                  CheckOut
                </Button>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* footer */}
      <Footre />

      {/* scroll top arrow */}
      <button href="#header" onClick={scrollToTop} className="scroll-top bg-dark" data-aos="zoom-in" data-aos-duration="1000"> <i className="fa fa-angle-up"></i></button>


    </div>
  )
}
