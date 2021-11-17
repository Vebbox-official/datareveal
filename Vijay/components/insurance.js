import React from 'react';
import './legal.css';
import {Container,Row,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Legalsec from './legal_sec';
import Parallax from './parallax';
import Heading from './heading';
// import Features from './features';
import Profile from './profile';
// import Legalpro from './legal_pro';
import Inssec from './ins-sec';
import Getintouch from './get-in-touch';
import Footer from './footer';
import Bg from './assets/feature-2.webp';
// import pro from './assets/img.webp';
// import pro1 from './assets/vision-landing-mg_65.webp';
// import icon1 from './assets/vision-serv-three.png';
// import icon2 from './assets/vision-serv-three.png';


function Insurance() {
  return (

        <div>  
            <Container>
                <Row Style="margin-top:30px;">
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
                </Container>

            <Row Style="margin-top:30px;">
            <Parallax parallax_content="Lorem Ipsum is simply dummy text of the printing 
            and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
            text." />
            </Row>
            
            <Row Style="margin-top:30px;">
            <Col lg={12} md={12} xs={12} sm={12}>
                <Heading title="Foundation Extract Processes Insurance Documents" 
                    sub="Your people have better things to do."/>
            </Col>
            </Row>

    <Container>
            <Row Style="margin-top:20px;"className="gy-5">
                <Col lg={3} md={6} sm={6} xs={12}>
                    <Profile />
                </Col>
                <Col lg={3} md={6} sm={6} xs={12}>
                    <Profile/>
                </Col>
                <Col lg={3} md={6} sm={6} xs={12}>
                    <Profile/>
                </Col>
                <Col lg={3} md={6} sm={6} xs={12}>
                    <Profile/>
                </Col>
            </Row>

            {/* <Row>
                <Legalpro icon1={icon1} icon2={icon2} det1="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                img2={pro} img3={pro1}/> 
            </Row>
             <Row>
                <Legalpro icon1={icon1} icon2={icon2} det1="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                img2={pro} img3={pro1}/> 
            </Row> 
            <Row Style="margin-top:30px;">
                <Features/>
            </Row> */}

    </Container>
    <Row>
        <Inssec/> 
    </Row>

                
            <Row>
                <Getintouch/> 
            </Row>

            <Row Style="margin-top:30px;">
                <Footer/>
            </Row>  
        </div>

  );
}

export default Insurance;
