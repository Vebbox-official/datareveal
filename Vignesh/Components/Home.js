import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import './css/home.css'
import Services from './Services'
import eye from './img/eye-scanner_1.svg'
import file from './img/file_1.svg'
import lightbulb from './img/lightbulb.svg'
import api from './img/api-develop.svg'
import product from './img/product-develop.svg'
import Footer from './Footer'
import Parallax from './parallax'
import Getintouch from './get-in-touch'
import Features from './features'

function Home() {
    return (
        <>

        

        {/* services section start */}
        <div className="services-bg">
           <Container fluid>
               <Row>
                   <Col>
                   <Row>
                      <Col>
                         <h2 className="text-center text-uppercase">Service</h2>
                         <hr width="7%" size="20px" style={{marginLeft: "46.4%",color:"#000"}}></hr>
                      </Col>
                   </Row>
                    <Row>                     
                   
                       
                          <Col xxl={4} xl={4} lg={4} md={4} sm={12} className="p-4">
                            <Services css={true} img={eye} heading="heading" content="Video Analysis, Image Processing, Robotic Surgery and Intelligent OCR to Extract Structured Data from unstructured images, videos and documents."/>
                          </Col>  
                          <Col xxl={4} xl={4} lg={4} md={4} sm={12} className="p-4">
                          <Services css={true} img={file} heading="heading" content="NLP-NLU-NLG, Chat Analytics, Topic Modelling, Customer Segmentation, Compare the similarity of new input documents to the documents used to train your NLP models."/>
                          </Col>  
                          <Col xxl={4} xl={4} lg={4} md={4} sm={12} className="p-4">
                          <Services css={true} img={lightbulb} heading="heading" content="Machine Learning, Deep Learning, Reinforcement Learning [RL] and Graph-Based models to detect patterns, extract actionable insights, and Optimize Decision-Making."/>                     
                          </Col>  
                   
                    </Row>
                    <Row className=" mt-1">
                        <Col lg={{span:8,offset:2}}>
                            <Row>
                         <Col className="p-3" xxl={{span:6,offset:0}} xl={{span:6,offset:0}} lg={{span:6,offset:0}} sm={6}>
                             <Services css={true} img={api} heading="heading" content="FHIR-HL7 Conversion, Email Invoice Classification, Genomic DNA API, IoT Transportation Real-Time Vehicle Tracking/Anomaly Detection, Crime Prevention API."/>
                         </Col>
                         <Col className="p-3" xxl={{span:6,offset:0}} xl={{span:6,offset:0}}  lg={{span:6,offset:0}} sm={6}>
                            <Services css={true} img={product} heading="heading" content="Incident Linkage Detection Tool, Patient Readmission Prediction Tool/App, Data Quality Anomaly Detection Tool."/>
                         </Col>
                         </Row>
                         </Col>
                    </Row>
                   </Col>
               </Row>
           </Container>
        </div>
        {/* services section end */}
          
            <Container fluid className="p-0">
               
                   <Parallax parallax_content="Enable software with human like vision to analyze images, videos, and documents across real world use cases."/>
              
            </Container>

            {/* paralux end */}
           
            <Features/>

            {/* paralux two */}
            <Container fluid className="p-0">
                
                    {/* paralux */}
                    <Getintouch/>
            
            </Container>

            {/* footer */}
           <Footer/>
        </>
    )
}

export default Home
