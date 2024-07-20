import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { SOURCE_URL } from '../../api/api';


export default function AdminFooter() {

  const [footer, setFooter] = useState([]);

  useEffect(() => {
    axios.get(SOURCE_URL+'Footer')
      .then(res => setFooter(res.data))
      .catch(err => console.log(err));
  }, [])


  return (
    <Fragment>
      {footer.map((item) => {
        return(
        <Container fluid="true" id='admin-footer' className='admin-Footer p-3 text-center' key={item.id}>
          <h6 className='p-0 m-0'>Copyright &copy; {item.yearfrom} - {item.yearto} by Hexashop &nbsp; || &nbsp; All rights are reserved </h6>
        </Container>
        )
      })}
    </Fragment>
  )
}
