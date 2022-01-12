import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardGroup,
  CCardHeader,
  CCardImage,
  CCardLink,
  CCardSubtitle,
  CCardText,
  CCardTitle,
  CListGroup,
  CListGroupItem,
  CNav,
  CNavItem,
  CNavLink,
  CCol,
  CRow,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  CTooltip,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilEyedropper, cilList, cilPlus, cilShieldAlt } from '@coreui/icons'

const Clients = () => {
  return (
    <>
      <CCard>
        <CCardBody>
          <CCardTitle>
            <div className="row">
              <h4 className="col-10">
                Client <span className="text-muted">List</span>
              </h4>
              <div className="col-2 d-md-flex justify-content-md-end">
                <CTooltip content="Add New">
                  <CNavLink to="/dashboard" component={NavLink} activeClassName="active">
                    <CButton href="#" to="/dashboard" className="btn btn-success text-white btn-sm">
                      <CIcon icon={cilPlus} size="xl" />
                    </CButton>
                  </CNavLink>
                </CTooltip>
              </div>
            </div>
          </CCardTitle>
          <CCardBody>
            <hr />
            <CTable striped hover>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">Company Name</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Contact</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Address</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Country</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                <CTableRow>
                  <CTableHeaderCell scope="row">1</CTableHeaderCell>
                  <CTableDataCell>Mark</CTableDataCell>
                  <CTableDataCell>Otto</CTableDataCell>
                  <CTableDataCell>@mdo</CTableDataCell>
                  <CTableDataCell>
                    <CTooltip content="Action">
                      <CButton href="#" className="btn btn-info text-white btn-sm">
                        <CIcon icon={cilEyedropper} size="xl" />
                      </CButton>
                    </CTooltip>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableHeaderCell scope="row">2</CTableHeaderCell>
                  <CTableDataCell>Jacob</CTableDataCell>
                  <CTableDataCell>Thornton</CTableDataCell>
                  <CTableDataCell>@fat</CTableDataCell>
                  <CTableDataCell>
                    <CTooltip content="Action">
                      <CButton href="#" className="btn btn-info text-white btn-sm">
                        <CIcon icon={cilEyedropper} size="xl" />
                      </CButton>
                    </CTooltip>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableHeaderCell scope="row">3</CTableHeaderCell>
                  <CTableDataCell>Larry the Bird</CTableDataCell>
                  <CTableDataCell>Larry the Bird</CTableDataCell>
                  <CTableDataCell>@twitter</CTableDataCell>
                  <CTableDataCell>
                    <CTooltip content="Action">
                      <CButton href="#" className="btn btn-info text-white btn-sm">
                        <CIcon icon={cilEyedropper} size="xl" />
                      </CButton>
                    </CTooltip>
                  </CTableDataCell>
                </CTableRow>
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCardBody>
      </CCard>
    </>
  )
}

export default Clients
