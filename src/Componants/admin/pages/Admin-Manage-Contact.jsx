import React, { Fragment, useEffect, useState } from 'react';
import { Container, Col } from 'react-bootstrap';
import AdminHeader from '../Admin-Header';
import AdminSidebar from '../Admin-Sidebar';
import AdminFooter from '../Admin-Footer';
import axios from 'axios';
import { ExportToExcel } from './ExportToExcel'
import DataTable from 'react-data-table-component';
import ReactWhatsapp from 'react-whatsapp';
import { useNavigate } from 'react-router-dom';
import { SOURCE_URL } from '../../../api/api';

export default function AdminManageContact() {

  // EXPORT TO EXAL
  const fileName = "mycontactdata"; // here enter filename for your excel file

  // ADD DATATABLE 
  const [contact, setContact] = useState([]);
  const [search, setSearch] = useState("");
  const [filtercontact, setFilterContact] = useState([]);

  const getcontactdata = async () => {
    try {
      const response = await axios.get(SOURCE_URL+"Contactusdata");
      setContact(response.data);
      setFilterContact(response.data);
    }
    catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    getcontactdata();
  }, [])

  useEffect(() => {
    const result = contact.filter(thiscontact => {
      return thiscontact.firstname.toLowerCase().match(search.toLocaleLowerCase())
    });

    setFilterContact(result);
  }, [search])

  // DELET DATA FROM TABLE
  function deletUser(id) {
    axios.delete(SOURCE_URL+`Contactusdata/${id}`)
      .then((response) => {
        console.warn(response)
        getcontactdata();
      })
  }


  const columns = [
    {
      name: "No.",
      selector: (row) => row.id,
    },
    {
      name: "FirstName",
      selector: (row) => row.firstname,
      sortable: true,
    },
    {
      name: "LastName",
      selector: (row) => row.lastname,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Mobile",
      selector: (row) => row.mobile,
    },
    {
      name: "Message",
      selector: (row) => row.message,
    },
    {
      name: "Action",
      cell: (row) => <span> <ReactWhatsapp number={row.mobile} message="Thank you for the contact. Our team will contact you soon" className='border-0 bg-transparent'><i className='fa fa-whatsapp text-success'></i></ReactWhatsapp>
        &nbsp;<span className='fw-bold'>|| </span>&nbsp;
        <i className='fa fa-trash text-danger' onClick={() => deletUser(row.id)}></i> </span>
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
                <h1 className='text-center pt-1'>Manage Contact</h1>
                <hr className='border border-2 border-info w-25 mx-auto' />
              </Col>

              {/* Data-table */}

              <DataTable style={{ width: "100%" }} columns={columns} data={filtercontact}
                // title="Contacts data"
                pagination
                fixedHeader
                fixedHeaderScrollHeight='350px'
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
                    <ExportToExcel apiData={contact} fileName={fileName}
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
