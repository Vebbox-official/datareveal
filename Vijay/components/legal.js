import React from 'react';
import './legal.css';
import {Container,Row,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Heading from './heading';
import Legalsec from './legal_sec';
import Legalpro from './legal_pro';
import Features from './features';
import Getintouch from './get-in-touch';
import Footer from './footer';
import Bg from './assets/feature-2.webp';
import pro from './assets/img.webp';
import pro1 from './assets/vision-landing-mg_65.webp';
import icon1 from './assets/vision-serv-three.png';
import icon2 from './assets/vision-serv-three.png';


function Legal() {
  return (

        <div>
            <Container>
            <Row>
                <Col lg={12} md={12} xs={12} sm={12}>
                    <Heading title="Let AI handle your Fax and Mail" 
                    sub="Your people have better things to do."/>
                </Col>

                <Col lg={4} md={6} xs={12} sm={6}>
                   <Legalsec img1={Bg} title="Lorem Ipsum" con="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
                </Col>
                <Col lg={4} md={6} xs={12} sm={6}>
                   <Legalsec img1={Bg} title="Lorem Ipsum" con="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
                </Col>
                <Col lg={{span:4 , offset:0}} md={{span:6 , offset:3}} xs={12} sm={{span:6,offset:3}}>
                   <Legalsec img1={Bg} title="Lorem Ipsum" con="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
                </Col>
            </Row>

            <Row>
                <Legalpro icon1={icon1} icon2={icon2} det1="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                img2={pro} img3={pro1}/> 
            </Row>
             <Row>
                <Legalpro icon1={icon1} icon2={icon2} det1="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                img2={pro} img3={pro1}/> 
            </Row>         
            <Features/>
        </Container>
        <Row>
        <Getintouch/> 
        </Row>
        <Footer/>
        </div>
  );
}

export default Legal;
