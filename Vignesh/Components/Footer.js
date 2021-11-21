import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import logo from './img/logo.png'
import './css/footer.css'
function Footer() {
        
    return (
        <>
          <Container fluid>
            <Row className="p-5">
                <Col xxl xl lg md sm={12}>
                    <ul>
                        <li><img src={logo} alt="logo" height="50%" width="50%" /></li>

                        <li className="mt-3"><h6  style={{color:"#000"}}> <span className="material-icons">place</span> ADDRESS</h6></li>
                        <li className="mt-3" style={{color:"#000"}}>
                         <p style={{fontSize:"15px"}}>   
                         5050 Quorum Drive, Suite 700, Dallas, TX 75254, USA
                         </p>
                         </li>
                        <li className="mt-3" style={{color:"#000"}}>
                            <p style={{fontSize:"15px"}}>
                            Suite 207, 4430 Bathurst Street, North York, Toronto, ON M3H3S3, Canada
                            </p>
                            </li>
                        <li className="mt-3">
                            <span class="material-icons">
                            email
                            </span> <span style={{fontSize:"15px"}}> info@datareveal.ai </span></li>
                        <li className="mt-3" style={{color:"#000"}}>
                        <span class="material-icons" >call</span>    
                        &nbsp; 704-206-9793
                        </li>
                    </ul>
                </Col>
                <Col xxl xl lg md sm={12}>
                    <ul>
                        <li><h6 style={{color:"#000"}}>COMPANY</h6></li>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Contact</li>
                    </ul>
                </Col>
                <Col  xxl xl lg md sm={12}>
                <ul>
                        <li><h6 style={{color:"#000"}}>EXTRACT PLATFORM</h6></li>
                        <li>Vision</li>
                        <li>Language</li>
                        <li>Learning</li>
                        <li>API development</li>
                        <li>Product development</li>
                    </ul>
                </Col>
                <Col  xxl xl lg md sm={12}>
                    <ul>
                        <li><h6 style={{color:"#000"}}>INDUSTRIES</h6></li>
                        <li>Healthcare</li>
                        <li>Insurance</li>
                        <li>Transportation</li>
                        <li>Legal</li>
                        <li>Data</li>
                        <li>Banking</li>
                        <li>Cybersecurity</li>
                    </ul>
                </Col>
                <Col  xxl xl lg md sm={12}>
                     <ul>
                        <li><h6 style={{color:"#000"}}>PRODUCTS</h6></li>
                        <li>FL7-FHIR</li>
                        <li>API</li>
                        <li>GENOMICS</li>
                        <li>DNA API</li>
                    </ul>
                </Col>
            </Row>
          </Container>  
          {/* copyrights */}
          <Container fluid style={{backgroundColor:"#1d252f"}}>
              <Row className="p-3">
                  <Col>
                    <div style={{color:"#fff"}}>
                        Developed by <span style={{color:"#0d6efd"}}> VEBBOX SOFTWARE SOLUTIONS </span>
                    </div>
                  </Col>
                  <Col>
                    <div className="text-end" style={{color:"#fff"}}>
                        All right Reserved © Datareveal AI
                    </div>
                  </Col>
              </Row>
          </Container>
        </>
    )
}

export default Footer
