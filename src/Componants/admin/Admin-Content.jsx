import React, { Fragment,useState,useEffect  } from 'react';
import { Col, Container, Row} from 'react-bootstrap';
import AdminFooter from './Admin-Footer';
import axios from 'axios';
import Chart from "react-apexcharts";
import { SOURCE_URL } from '../../api/api';

export default function AdminContent() {

  //GET CONTACT API LENGTH

  // GET CONTACT LENGTH
  const [contact , setContact] = useState([])
  useEffect( () => {
    axios.get(SOURCE_URL+"Contactusdata")
      .then((res)=>{
        setContact(res.data)
      })
  },[])
  // GET CUSTOMER LENGTH
  const [customer , setCustomer] = useState([])
  useEffect( () => {
    axios.get(SOURCE_URL+"Accountdata")
      .then((res)=>{
        setCustomer(res.data)
      })
  },[])
    // GET ORDER LENGTH
    const [order , setOrder] = useState([])
    useEffect( () => {
      axios.get(SOURCE_URL+"Cart")
        .then((res)=>{
          setOrder(res.data)
        })
    },[])
      // GET CATEGORY LENGTH
  const [category , setCategory] = useState([])
  useEffect( () => {
    axios.get(SOURCE_URL+"AddCategories")
      .then((res)=>{
        setCategory(res.data)
      })
  },[])
        // GET SUBCATEGORY LENGTH
        const [subcategory , setSubCategory] = useState([])
        useEffect( () => {
          axios.get(SOURCE_URL+"AddSubCategories")
            .then((res)=>{
              setSubCategory(res.data)
            })
        },[])
    // GET PRODUCTS LENGTH
    const [product , setProduct] = useState([])
    useEffect( () => {
      axios.get(SOURCE_URL+"AddProducts")
        .then((res)=>{
          setProduct(res.data)
        })
    },[])

  return (
    <Fragment>
      <Container fluid="true" id="admin-content" >
        <Container className='p-5 bg-dark'>
          <Row className='text-white'>
            <Col className="col-5 shadow p-4 text-center mx-auto rounded-2 counting">
              <i className='fa fa-envelope py-2 px-3 fs-2'></i>
              <h3 className='mt-3 text-primary'>Contacts : <span className='text-warning fs-1'>{contact.length}</span></h3>
            </Col>

            <Col className="col-5 shadow p-4 text-center mx-auto rounded-2 counting">
              <i className='fa fa-user py-2 px-3 fs-2'></i>
              <h3 className='mt-3 text-primary'>Customer : <span className='text-warning fs-1'>{customer.length}</span></h3>
            </Col>

            <Col className="col-5 shadow p-4 text-center mx-auto rounded-2 mt-5 counting">
            <i className=' fa fa-product-hunt py-2 px-3 fs-2'></i>
              <h3 className='mt-3 text-primary'>Products : <span className='text-warning fs-1'>{product.length}</span></h3>
            </Col>

            <Col className="col-5 shadow p-4 text-center mx-auto rounded-2 mt-5 counting">
              <i className='fa fa-first-order py-2 px-3 fs-2'></i>
              <h3 className='mt-3 text-primary'>Orders : <span className='text-warning fs-1'>{order.length}</span></h3>
            </Col>
          </Row>

          <Container fluid="true" className='mt-4 mt-md-5 mt-lg-5'>

            <Chart className="w-100"
              type='bar'
              height={500}

              series={[
                {
                  name:"our clients",
                  data:[(customer.length),(contact.length),(order.length),(category.length),(subcategory.length),(product.length)]
                }
              ]}

              options={{
                title: {text:"Hexashop",
                style:{fontSize:25}
                },
                // subtitle:{
                //   text:""
                // },
                colors:['#f90000'],
                theme:{mode:"dark"},
                xaxis:{
                  tickPlacement:"on",
                  categories:["customer","contacts","orders","category","subcategory","products"],
                  title:{text:"Our Data"}
                },
                yaxis:{
                  labels:{
                    style:{
                      fontSize:"15",
                      colors:['#fff']
                    }
                  },
                  title:{text:"Data Counting"}
                },
                dataLabels:{
                  formatter:(val)=>{return(val)},
                  style:{
                    fontSize:"12"
                  }
                }
              }}
            >



            </Chart>

          </Container>
        </Container>

        {/* admin-footer */}
        <AdminFooter/>
      </Container>
    </Fragment>
  )
}
