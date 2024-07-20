import React, { Fragment, useState, useRef, useEffect } from 'react';
import { Container, Col, Button, Form, } from 'react-bootstrap';
import AdminHeader from '../Admin-Header';
import AdminSidebar from '../Admin-Sidebar';
import AdminFooter from '../Admin-Footer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { SOURCE_URL } from '../../../api/api';


export default function AdminAddProduct() {

  // ADD DATA IN API
  const addcategoriename = useRef("");
  const addsubcategoriename = useRef("");
  const productname = useRef("");
  const productimg = useRef("");
  const productqut = useRef("");
  const productprice = useRef("");
  const productoffer = useRef("");
  const productaddedate = useRef("");
  const productdescriptions = useRef("");
  const Navigate = useNavigate("");

  const AddNewProduct = () => {
    let insert = {
      addcategoriename: addcategoriename.current.value,
      addsubcategoriename: addsubcategoriename.current.value,
      productname: productname.current.value,
      productimg: productimg.current.value,
      productqut: productqut.current.value,
      productprice: productprice.current.value,
      productoffer: productoffer.current.value,
      productaddedate: productaddedate.current.value,
      productdescriptions: productdescriptions.current.value

    }
    axios.post(SOURCE_URL+"AddProducts", insert)
      .then(() => {
        swal("Product Add Successfully");
      });
       Navigate("/admin-login/admin-manage-products");
  };


  // FATCH CATEGORY FROM API
  const [allcategory, setAllCategory] = useState([]);
  useEffect(() => {
    axios.get(SOURCE_URL+"AddCategories")
      .then((response) => {
        setAllCategory(response.data)
      });
  }, []);


  // FATCH SUB-CATEGORY FROM API
  const [addSubCategory, setAddSubCategory] = useState([]);
  useEffect(() => {
    axios.get(SOURCE_URL+"AddSubCategories")
      .then((response) => {
        setAddSubCategory(response.data)
      });
  }, []);


  return (
    <Fragment>
      <Container fluid="true">
        <Col className='admin-layout-left'>
          {/* sidebar */}
          <AdminSidebar />
        </Col>
        <Col className='admin-layout-right'>
          {/* header */}
          <AdminHeader />

          <Container fluid="true" id="admin-content">
            {/* Add Product */}
            <Container fluid="true" id='add-product' className="bg-dark text-white">
            <Col className='py-3'>
                <h1 className='text-center pt-1'>Add Product</h1>
                <hr className='border border-2 border-info w-25 mx-auto' />
              </Col>

              <Container className='w-75 pb-4'>
                <Form>
                  <div className='pt-3'>
                    <label>Select Category </label>
                    <select
                      className='form-control mt-1'
                      ref={addcategoriename}
                    >
                      <option>- Select Category -</option>
                      {allcategory && allcategory.map((row) => {
                        return (
                          <option value={row.categoryname}>{row.categoryname}</option>
                        )
                      })}
                    </select>
                  </div>

                  <div className='mt-3'>
                    <label>Select Sub-Category</label>
                    <select
                      className='form-control mt-1'
                      ref={addsubcategoriename}
                    >
                      <option>- Select Sub-Category -</option>
                      {addSubCategory && addSubCategory.map((row) => {
                        return (
                          <option value={row.subcategoryname}>{row.subcategoryname}</option>
                        )
                      })}
                    </select>
                  </div>

                  <Form.Group className='mt-3'>
                    <label>Product Name</label>
                    <Form.Control type="text" className="p-2 mt-1" ref={productname} placeholder="Enter Product Name" required />
                  </Form.Group>

                  <Form.Group className='mt-3'>
                    <label>Product Image</label>
                    <Form.Control type="url" className="p-2 mt-1" ref={productimg} placeholder="Enter Product url" required />
                  </Form.Group>

                  <Form.Group className='mt-3'>
                    <label>Product Qty</label>
                    <Form.Control type="number" className="p-2 mt-1" ref={productqut} placeholder=" Enter Product Quy" required />
                  </Form.Group>

                  <Form.Group className='mt-3'>
                    <label>Product Price</label>
                    <Form.Control type="number" className="p-2 mt-1" ref={productprice} placeholder="Enter Product Price" required minLength={0} />
                  </Form.Group>

                  <Form.Group className='mt-3'>
                    <label>Product Offer Price</label>
                    <Form.Control type="number" className=" p-2 mt-1 " ref={productoffer} placeholder="Enter Product Offer Price" required minLength={0} />
                  </Form.Group>

                  <Form.Group className="rounded-0 mt-3">
                    <label>Product Add Date</label>
                    <Form.Control type="date" className=" p-2 mt-1" ref={productaddedate} required />
                  </Form.Group>

                  <Form.Group className='mt-3'>
                  <label>Product Discraption</label>
                  <textarea
                    className="form-control mt-1 " rows="5" ref={productdescriptions} placeholder='Enter Product Discraption'
                  />
                  </Form.Group>

                  <Button type='submit' variant='outline-primary ' className='px-3 mt-3 w-25' onClick={AddNewProduct} >
                    Add Product
                  </Button>

                </Form>

              </Container>
            </Container>

            {/* footer */}
            <AdminFooter />
          </Container>
        </Col>
      </Container>
    </Fragment>
  )
}
