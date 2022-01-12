import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormCheck,
  CFormInput,
  CFormFeedback,
  CFormLabel,
  CFormSelect,
  CFormTextarea,
  CInputGroup,
  CInputGroupText,
  CCardTitle,
  CTooltip,
  CRow,
  CNavLink,
  CCardFooter,
} from '@coreui/react'
import { DocsCallout, DocsExample } from 'src/components'
import CIcon from '@coreui/icons-react'
import { cilEyedropper, cilList, cilPlus, cilShieldAlt, cilX } from '@coreui/icons'

const ClientCreate = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardBody>
            <CCardTitle>
              <div className="row">
                <h5 className="col-10">
                  Client <span className="text-muted">Create</span>
                </h5>
                <div className="col-2 d-md-flex justify-content-md-end">
                  <CTooltip content="Close">
                    <CNavLink to="/clients" component={NavLink} activeClassName="active">
                      <CButton className="btn btn-light btn-sm">
                        <CIcon icon={cilX} size="lg" />
                      </CButton>
                    </CNavLink>
                  </CTooltip>
                </div>
              </div>
            </CCardTitle>
            <CForm className="row g-3 needs-validation">
              <CCol md={12}>
                <CFormLabel htmlFor="name">Name</CFormLabel>
                <CFormInput type="text" id="name" valid required />
              </CCol>
              <CCol md={6}>
                <CFormLabel htmlFor="email">Email</CFormLabel>
                <CInputGroup className="has-validation">
                  <CInputGroupText id="email">@</CInputGroupText>
                  <CFormInput
                    type="text"
                    id="email"
                    defaultValue=""
                    aria-describedby="email"
                    required
                  />
                </CInputGroup>
              </CCol>
              <CCol md={6}>
                <CFormLabel htmlFor="pv">PV Number</CFormLabel>
                <CFormInput type="text" id="pv" valid required />
              </CCol>
              <CCol md={4}>
                <CFormLabel htmlFor="type">Type</CFormLabel>
                <CFormSelect id="type">
                  <option>--Type--</option>
                  <option>Sole</option>
                  <option>Pvt</option>
                  <option>Ltd</option>
                  <option>Plc</option>
                  <option>Gov</option>
                </CFormSelect>
              </CCol>
              <CCol md={4}>
                <CFormLabel htmlFor="phone">Phone Number</CFormLabel>
                <CFormInput type="phone" id="pv" valid required />
              </CCol>
              <CCol md={4}>
                <CFormLabel htmlFor="tax">Tax Number</CFormLabel>
                <CFormInput type="text" id="tax" valid required />
              </CCol>
              <CCol md={6}>
                <CFormLabel htmlFor="address">Address</CFormLabel>
                <CFormInput type="text" id="address" required />
              </CCol>
              <CCol md={3}>
                <CFormLabel htmlFor="city">City</CFormLabel>
                <CFormInput type="text" id="city" required />
              </CCol>
              <CCol md={3}>
                <CFormLabel htmlFor="country">Country</CFormLabel>
                <CFormInput type="text" id="country" required />
              </CCol>
              <hr />
              <CRow>
                <CCol xs={10}></CCol>
                <CCol xs={2} className="col-2 d-md-flex justify-content-md-end">
                  <CButton color="success" className="text-white" type="submit">
                    SAVE
                  </CButton>
                </CCol>
              </CRow>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default ClientCreate
