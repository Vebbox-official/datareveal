import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import './css/about.css'
import Footer from './Footer'
import Teammates from './Teammates'
import maria from './img/team/maria.jpeg'
import anil from './img/team/anil.jpeg'
import mohamed from './img/team/mohamed.jpeg'
import krish from './img/team/krish.jpeg'
import bala from './img/team/bala.jpeg'
import suresh from './img/team/suresh.jpeg'
import rishi from './img/team/rishi.jpeg'
import ankit from './img/team/ankit.jpeg'
import joseph from './img/team/joseph.jpeg'
import faizen from './img/team/faizen.png'
import fabio from './img/team/fabio.png'
import landingimg from './img/vision-landing.png'
// import aboutbg from './img/vision-bg.jpg'
// import  {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Getintouch from './get-in-touch'
import Landing from './landing'
function About() {
    return (
        <>
           
           
            {/* about header */}
            <Container fluid className="p-0">
                <Landing landing_img={landingimg} landing_img_alt="landing img" landing_h2="ARCHITECTING INTELLIGENCE™" landing_h3="Datareveal AI is a Texas based technology company on a mission to build artificial intelligence for the real world. We leverage advances in computer vision, natural language processing, and machine learning to help organizations process, manage, and leverage their unstructured data to streamline manual tasks, make better data driven decisions, and drive business value."/>
            </Container>

            {/* leadership */}
            <Container fluid>
                <Row className="p-5">
                    <Col>
                        <h2 className="text-center text-uppercase">LEADERSHIP</h2>
                        <hr width="7%" size="20px" style={{marginLeft: "46.4%",color:"#000"}}></hr>
                    </Col>
                </Row>
                <Row className="p-3">

                    {/* <Router> */}
                
                    <Col xxl xl lg md={6} sm={12}>
                        <Teammates person={maria} name="Dr. Maria Viqar" role="Cardiovascular Diseases Surgeon" post="CMO and President of Data Reveal AI" linkedin="https://in.linkedin.com/"/>
                    </Col>
                    <Col xxl xl lg md sm={12}>
                        <Teammates person={anil} name="Anil Bariki" role="Vice President, Data Sciences" post="CEO and President of Data Reveal AI"/>
                    </Col>
                    <Col xxl xl lg md={6} sm={12}>
                        <Teammates person={mohamed} name="Dr. Mohamed Ibrahim" role="Senior Researcher with a Professor, Oxford University, UK" post="CIO and Chief Computer Vision "/>
                    </Col>
                    <Col xxl xl lg md={6} sm={12}>
                       <Teammates person={krish}  name="Kris Ghimire" role="Senior Data Scientist" post="Chief Data Scientist of Data Reveal AI"/>
                    </Col>

                    {/* </Router> */}

                </Row>
                 <Row className="p-3">
                    <Col xxl xl lg md={6} sm={12}>
                        <Teammates person={bala} name="Bala Daks" role="Senior Data Scientist" post="COO and Founder of Data Reveal AI"/>
                    </Col>
                    <Col xxl xl lg md sm={12}>
                        <Teammates person={suresh} name="Suresh Kumar" role="Senior Cybersecurity Architect" post="CISO and Vice President of Data Reveal AI"/>
                    </Col>
                    <Col xxl xl lg md={6} sm={12}>
                        <Teammates person={rishi} name="Rishhi Balakrishnan" role="Principal AI/ML Engineer" post="Principal AI/ML Strategy Architect"/>
                    </Col>
                    <Col xxl xl lg md={6} sm={12}>
                       <Teammates person={ankit}  name="Ankit Kumar" role="iOS Engineer" post="Principal iOS / Mobile App Strategy Architect"/>
                    </Col>
                </Row>
                
            </Container>
            
            
           

            {/* ADVISORY BOARD */}
            <Container fluid>
             <Row>
                    <Col>
                        <h2 className="text-center text-uppercase">ADVISORY BOARD</h2>
                        <hr width="7%" size="20px" style={{marginLeft: "46.4%",color:"#000"}}></hr>
                    </Col>
                </Row>
               <Row className="p-5 gx-5">
                       {/* <Col xxl={{span:8,offset:2}} xl={{span:8,offset:2}} lg={{span:10,offset:1}} sm={12}> */}
                       <Col xxl={12} xl={12} lg={12} sm={12}>
                        <Row>
                             <Col xxl xl lg md={6} sm={12}>
                           <Teammates person={joseph}  name="Dr.Joseph S Antony" role="Associate Professor – Uni. of Leeds, UK" post="....."/>
                        </Col>
                        <Col xxl xl lg md={6} sm={12}>
                            <Teammates person={faizen}  name="Dr.Faizan Javed" role="Senior Director Kaiser Permanente" post="....."/>
                        </Col>
                        <Col xxl xl lg md={6} sm={12}>
                           <Teammates person={fabio}  name="Dr.Fabio Savorgnan" role="Cardiologist" post="....."/>
                        </Col>
                        </Row>
                       </Col>
                 </Row>
            </Container>

            <Container fluid className="p-0">
                <Getintouch/>
            </Container>

            {/* paralex */}

            {/* footer section */}
            <Footer/>
            </>
        
    )
}

export default About
