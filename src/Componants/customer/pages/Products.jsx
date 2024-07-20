import React, { Fragment, useState, useEffect } from 'react'
import Pagebanner from '../Pagebanner';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import Footre from '../Footre';
import axios from 'axios';
// import Swal from 'sweetalert2';
import { useNavigate, useParams } from 'react-router-dom';
import { SOURCE_URL } from '../../../api/api';
import men1 from "../../../assets/images/productpage/men-01.jpg";
import men2 from "../../../assets/images/productpage/men-02.jpg";
import women1 from "../../../assets/images/productpage/women-01.jpg";
import women2 from "../../../assets/images/productpage/women-02.jpg";
import kid1 from "../../../assets/images/productpage/kid-01.jpg";
import kid2 from "../../../assets/images/productpage/kid-02.jpg";
import accessories1 from "../../../assets/images/productpage/Accessories-01.jpg";
import accessories2 from "../../../assets/images/productpage/Accessories-02.jpg";



export default function Products() {

  const [products, setProducts] = useState([])
  const Navigate = useNavigate('');
  // const { id } = useParams;
  useEffect(() => {
    axios.get(SOURCE_URL + 'AddProducts')
      .then((res) => {
        setProducts(res.data)
      })
  }, [])

  // FATCH CATEGORY
  const [category, setCategory] = useState([]);
  const [filtercategoy, setFilterCategory] = useState([]);
  const [productdetails , setProductDetails] = useState([]);
  useEffect(() => {
    axios.get(SOURCE_URL + 'AddCategories')
    .then((res) => {
      setCategory(res.data)
    })
  }, [])

  const productdetailsdata = () => {
    axios.get(SOURCE_URL+"Product-Details")
      .then((res) => {
        setProductDetails(res.data)
      })
  }


  // ADD DATA IN PRODUCT-DETAILS API
  const details = (data) => {
    axios.post(SOURCE_URL +"Product-Details", data)
      .then(
        Navigate("/Product-Details"),
        )
      productdetailsdata()
  }


  // ADD PRODUCT IN CART
  // const AddToCart = (data) => {
  //   axios.get("http://localhost:2602/Cart", data)
  //     .then(() => {
  //       Swal.fire({
  //         icon: 'success',
  //         title: 'Product',
  //         text: 'Added To Cart',
  //       })
  //     })
  // }


  return (
    <Fragment>
      {/* pagebanner */}
      <Pagebanner headline="Check Our Products" />

      <Container id='products' className='mb-5'>
        <Col className='product-head text-center py-3'>
          <h1>Our Products</h1>
          <p>"Being perfectly well-dressed gives one a tranquility that no religion can bestow."</p>
        </Col>

        <Col className='mb-4'>
          <Form>
            <select title="Select Category" className="form-control" onChange={(e) => setFilterCategory(e.target.value)}>
              <option>- Select Category -</option>
              {category && category.map((item) => {
                return (
                  <option value={item.categoryname}>{item.categoryname}</option>
                )
              })}
            </select>
          </Form>
        </Col>

        <Row>
          {products && products.map((item) => {
            return (
              (item.addcategoriename == filtercategoy ?
                <Col sm={6} md={4} lg={3} className='col-12 p-2 productbox' key={item.id} data-aos="zoom-in-down" data-aos-duration="1000">
                  <Col className='p-4 shadow position-relative detailsbox'>
                    <img src={item.productimg} alt='product-image' className='img-fluid mx-auto w-100' />
                    <h4 className='mt-2 name' >{item.productname}</h4>
                    <h5>Rs. <span className='text-success' >{item.productoffer}</span> <sub><del className='text-danger' >{item.productprice}</del></sub></h5>
                    <div className='detailsbutton position-absolute bottom-0'>
                      <Button type='button' className=' mt-1 rounded-0 bg-transparent border border-2 border-primary border-start-0 border-end-0 text-black-50 p-1 px-2 w-50' onClick={() => details(item)}>Details</Button>
                    </div>
                  </Col>
                </Col>
                : "")
            )
          })}
        </Row>
        <Row>
          <Col sm={6} md={4} lg={3} className='col-12 p-2 productbox' data-aos="zoom-in-down" data-aos-duration="1000">
            <Col className='p-4 shadow position-relative detailsbox'>
              <img src={men1} alt='product-image' className='img-fluid mx-auto w-100' />
              <h4 className='mt-2 name' >Danim</h4>
              <h5>Rs. <span className='text-success'>1,699</span> <sub><del className='text-danger' >2,599</del></sub></h5>
              <div className='detailsbutton position-absolute bottom-0'>
                <Button type='button' className=' mt-1 rounded-0 bg-transparent border border-2 border-primary border-start-0 border-end-0 text-black-50 p-1 px-2 w-50'>Details</Button>
              </div>
            </Col>
          </Col>
          <Col sm={6} md={4} lg={3} className='col-12 p-2 productbox' data-aos="zoom-in-down" data-aos-duration="1000">
            <Col className='p-4 shadow position-relative detailsbox'>
              <img src={men2} alt='product-image' className='img-fluid mx-auto w-100' />
              <h4 className='mt-2 name' >Lavi's</h4>
              <h5>Rs. <span className='text-success'>3,699</span> <sub><del className='text-danger' >5,599</del></sub></h5>
              <div className='detailsbutton position-absolute bottom-0'>
                <Button type='button' className=' mt-1 rounded-0 bg-transparent border border-2 border-primary border-start-0 border-end-0 text-black-50 p-1 px-2 w-50'>Details</Button>
              </div>
            </Col>
          </Col>
          <Col sm={6} md={4} lg={3} className='col-12 p-2 productbox' data-aos="zoom-in-down" data-aos-duration="1000">
            <Col className='p-4 shadow position-relative detailsbox'>
              <img src={women1} alt='product-image' className='img-fluid mx-auto w-100' />
              <h4 className='mt-2 name' >Menhdi Cote</h4>
              <h5>Rs. <span className='text-success'>899</span> <sub><del className='text-danger'>1,499</del></sub></h5>
              <div className='detailsbutton position-absolute bottom-0'>
                <Button type='button' className=' mt-1 rounded-0 bg-transparent border border-2 border-primary border-start-0 border-end-0 text-black-50 p-1 px-2 w-50'>Details</Button>
              </div>
            </Col>
          </Col>
          <Col sm={6} md={4} lg={3} className='col-12 p-2 productbox' data-aos="zoom-in-down" data-aos-duration="1000">
            <Col className='p-4 shadow position-relative detailsbox'>
              <img src={women2} alt='product-image' className='img-fluid mx-auto w-100' />
              <h4 className='mt-2 name' >Wollen Cote</h4>
              <h5>Rs. <span className='text-success'>1,299</span> <sub><del className='text-danger'>1,999</del></sub></h5>
              <div className='detailsbutton position-absolute bottom-0'>
                <Button type='button' className=' mt-1 rounded-0 bg-transparent border border-2 border-primary border-start-0 border-end-0 text-black-50 p-1 px-2 w-50'>Details</Button>
              </div>
            </Col>
          </Col>
          <Col sm={6} md={4} lg={3} className='col-12 p-2 productbox' data-aos="zoom-in-down" data-aos-duration="1000">
            <Col className='p-4 shadow position-relative detailsbox'>
              <img src={kid1} alt='product-image' className='img-fluid mx-auto w-100' />
              <h4 className='mt-2 name'>Girls Morden</h4>
              <h5>Rs. <span className='text-success'>1,399</span> <sub><del className='text-danger' >2,299</del></sub></h5>
              <div className='detailsbutton position-absolute bottom-0'>
                <Button type='button' className=' mt-1 rounded-0 bg-transparent border border-2 border-primary border-start-0 border-end-0 text-black-50 p-1 px-2 w-50'>Details</Button>
              </div>
            </Col>
          </Col>
          <Col sm={6} md={4} lg={3} className='col-12 p-2 productbox' data-aos="zoom-in-down" data-aos-duration="1000">
            <Col className='p-4 shadow position-relative detailsbox'>
              <img src={kid2} alt='product-image' className='img-fluid mx-auto w-100' />
              <h4 className='mt-2 name'>Boys Morden</h4>
              <h5>Rs. <span className='text-success'>1,699</span> <sub><del className='text-danger' >2,599</del></sub></h5>
              <div className='detailsbutton position-absolute bottom-0'>
                <Button type='button' className=' mt-1 rounded-0 bg-transparent border border-2 border-primary border-start-0 border-end-0 text-black-50 p-1 px-2 w-50'>Details</Button>
              </div>
            </Col>
          </Col>
          <Col sm={6} md={4} lg={3} className='col-12 p-2 productbox' data-aos="zoom-in-down" data-aos-duration="1000">
            <Col className='p-4 shadow position-relative detailsbox'>
              <img src={accessories1} alt='product-image' className='img-fluid mx-auto w-100' />
              <h4 className='mt-2 name' >Mens Shose</h4>
              <h5>Rs. <span className='text-success' >2,999</span> <sub><del className='text-danger' >3,599</del></sub></h5>
              <div className='detailsbutton position-absolute bottom-0'>
                <Button type='button' className=' mt-1 rounded-0 bg-transparent border border-2 border-primary border-start-0 border-end-0 text-black-50 p-1 px-2 w-50'>Details</Button>
              </div>
            </Col>
          </Col>
          <Col sm={6} md={4} lg={3} className='col-12 p-2 productbox' data-aos="zoom-in-down" data-aos-duration="1000">
            <Col className='p-4 shadow position-relative detailsbox'>
              <img src={accessories2} alt='product-image' className='img-fluid mx-auto w-100' />
              <h4 className='mt-2 name' >Handbag Combo</h4>
              <h5>Rs. <span className='text-success' >1,799</span> <sub><del className='text-danger' >2,199</del></sub></h5>
              <div className='detailsbutton position-absolute bottom-0'>
                <Button type='button' className=' mt-1 rounded-0 bg-transparent border border-2 border-primary border-start-0 border-end-0 text-black-50 p-1 px-2 w-50'>Details</Button>
              </div>
            </Col>
          </Col>
        </Row>
      </Container>
      {/* footer */}
      <Footre />

    </Fragment>
  )
}
