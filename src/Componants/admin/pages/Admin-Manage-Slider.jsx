import React, { useState, useEffect, Fragment, useRef } from 'react';
import AdminHeader from '../Admin-Header';
import AdminSidebar from '../Admin-Sidebar';
import AdminFooter from '../Admin-Footer';
import { Col, Container} from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { SOURCE_URL } from '../../../api/api';

export default function AdminManageSlider() {

  // DISPLAY DATA FROM API
  const [manageslider, setManageSlider] = useState([])
  const Navigate = useNavigate();

  const displayslide = () => {
    axios.get(SOURCE_URL+"HomeSlider")
      .then(res => {
        setManageSlider(res.data)
      })
  }

  useEffect(() => {
    displayslide();
  }, [])

  // DELET DATA FROM API
  const DeletSlide = (id) => {
    axios.delete(SOURCE_URL+`HomeSlider/${id}`)
      .then((response) => {
        console.warn(response)
        displayslide();
      })
  }

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

          <Container fluid="true" id='admin-content'>
            {/* manage products */}
            <Container fluid="true" id='manage-slider'>
              <Col className='my-3'>
                <h1 className='text-center pt-1'>Manage Slider</h1>
                <hr className='border border-2 border-info w-25 mx-auto' />
              </Col>
              <table className='datatable table table-striped text-center mt-4'>
                <thead className='datatable-head'>
                    <tr className='text-white' align="center">
                      <th >NAME</th>
                      <th >SLIDE IMAGE</th>
                      <th >SLIDE TITLE</th>
                      <th >SLIDE SUB-TITLE</th>
                      <th >ACTION</th>
                    </tr>
                  </thead>
                  <tbody className='datatable-body' align="center">
                    {manageslider.map((item) => {
                      return (
                        <tr key={item.id}>
                          <td>{item.id}</td>
                          <td><img src={item.slideimageurl} alt='slide-images' height={50} width={100} /></td>
                          <td>{item.slidetitle}</td>
                          <td>{item.slidesubtitle}</td>
                          <td>
                            <i className='fa fa-pencil text-primary fs-5' onClick={() => Navigate(`/admin-login/admin-update-slider/${item.id}`)}></i>
                            <span className='fw-bold'> || </span>
                            <i className='fa fa-trash text-danger fs-5' onClick={() => DeletSlide(item.id)}></i>
                          </td>
                        </tr>
                      )
                    })}
                    </tbody>
              </table>
            </Container>

            {/* footer */}
            <div className='slider-footer'>
              <AdminFooter />
            </div>
          </Container>
        </Col>
      </Container>
    </Fragment>
  )
}
