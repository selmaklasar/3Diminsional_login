import React from 'react'
import { Button, Form, Col, Container, Row } from 'react-bootstrap';
import style from './Loginpage.module.css'

function Loginpage() {
    
    
  return (
   <>
    <Container className={`d-flex justify-content-center align-items-center min-vh-100 ${style.container}`}>
      <div className={`border rounded-4 p-3  shadow ${style.row}`}>
        <Row>
          <Col md={6} className={`d-flex justify-content-center align-items-center  ${style.left_box}`}>
            <div mb={3} className={`${style.featured_image} `}>
              <img src="" alt="" className={`w-250`}/>
            </div>
          </Col>
          <Col md={6} className={`${style.right_box} d-flex justify-content-center align-items-center  rounded-4 `}>
            <div className={`align-items-center`}>
              <div md={4} className="header_text">
                <p className={`${style.heading1 } `} >Login</p>
                <p className={`${style.heading2}`}>Welcome back!   please login to <br />
                   your account</p>
              </div>
              <div mb={10} className={`${style.input_group1}`}>
                <label >Username</label>
              <input type="text" className={`form-control form-control-lg fs-6`}/>
              </div>
              <div mb={10} className={`${style.input_group2}`}>
                <label >Password</label>
              <input type="text" className={`form-control form-control-lg fs-6`}/>
              </div>
              <div mb={10} className={`${style.submit}`}>
                <button className={`btn btn-lg  w-100 fs-8`}>LOG IN</button>
              </div>
            </div>
          </Col>


        </Row>
      </div>
    </Container>
  
   </>
  )
}

export default Loginpage
