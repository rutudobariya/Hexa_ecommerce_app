import React, { Fragment, useEffect, useState } from 'react';
import { Container, Col } from 'react-bootstrap';
import AdminHeader from '../Admin-Header';
import AdminSidebar from '../Admin-Sidebar';
import AdminFooter from '../Admin-Footer';
import axios from 'axios';
import { ExportToExcel } from './ExportToExcel'
import DataTable from 'react-data-table-component';
import { useNavigate } from 'react-router-dom';
import { SOURCE_URL } from '../../../api/api';


export default function AdminManageCustomer() {

  // EXPORT TO EXAL
  const fileName = "mycontactdata"; // here enter filename for your excel file

  // ADD DATATABLE 
  const [customer, setCustomer] = useState([]);
  const [search, setSearch] = useState("");
  const [filtercustomer, setFilterCustomer] = useState([]);
  const Navigate = useNavigate('');

  const getcustomertdata = async () => {
    try {
      const response = await axios.get(SOURCE_URL+"Accountdata");
      setCustomer(response.data);
      setFilterCustomer(response.data);
    }
    catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    getcustomertdata();
  }, [])

  useEffect(() => {
    const result = customer.filter(thiscustomer => {
      return thiscustomer.username.toLowerCase().match(search.toLocaleLowerCase())
    });

    setFilterCustomer(result);
  }, [search])

  // DELET DTAT FROM TABLE
  function deletCustomer(id) {
    axios.delete(SOURCE_URL+`Accountdata/${id}`)
      .then((response) => {
        console.warn(response)
        getcustomertdata();

      })
  }

  const columns = [
    {
      name: "No.",
      selector: (row) => row.id,
    },
    {
      name: "Username",
      selector: (row) => row.username,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Date-of-Birth",
      selector: (row) => row.dateofbirth,
    },
    {
      name: "state",
      selector: (row) => row.state,
    },
    {
      name: "city",
      selector: (row) => row.city,
    },
    {
      name: "Action",
      cell: (row) => <button type='button' className='fa fa-trash text-danger fs-5 bg-transparent border-0' onClick={() => deletCustomer(row.id)}></button>
    }
  ]

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
            {/* manage contact */}
            <Container fluid="true" id='manage-contact'>
              <Col className='my-3'>
                <h1 className='text-center pt-1'>Manage Customer</h1>
                <hr className='border border-2 border-info w-25 mx-auto' />
              </Col>

              {/* Data-table */}

              <DataTable columns={columns} data={filtercustomer}
                pagination
                fixedHeader
                fixedHeaderScrollHeight='340px'
                selectableRows
                selectableRowsHighlight
                highlightOnHover
                subHeader
                subHeaderComponent={
                  <div className='d-flex justify-content-between w-100'>
                    <input type='text'
                      placeholder='Search'
                      className='form-control w-50'
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                    <ExportToExcel apiData={customer} fileName={fileName}
                    />
                  </div>
                }
              />
              {/* footer */}
              <AdminFooter />
            </Container>
          </Container>
        </Col>
      </Container>

    </Fragment>
  )
}
