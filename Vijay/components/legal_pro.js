import React, { Component } from 'react';
import './legal_pro.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col } from 'react-bootstrap';

class Legalpro extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col lg={7} md={7} sm={12} xs={12}>
                    <div className="txt">
                    <img src={this.props.icon1} className="icon"/> 
                      <p>{this.props.det1}</p>
                    </div>
                    </Col>               
                    <Col lg={{span:4 , offset:1}} md={{span:4 , offset:0 }} sm={{span:11 , offset:2}} xs={{span:11 ,offset:1}}>
                        <img src={this.props.img2} className="img"/> 
                    </Col>
            </Row>
            <Row>
                    <Col lg={{span:2 , offset:0, order:0}} md={{span:4, offset:0,order:0}} sm={{span:12 , offset:2}} xs={{span:11 ,offset:1, order:1}}>
                        <img src={this.props.img3} className="img"/> 
                    </Col>
                    <Col lg={{span:8, order:1}} md={{span:6 , offset:2}} sm={12} xs={{span:12, order:0}}>
                    <div className="txt">
                    <img src={this.props.icon2} className="icon"/>
                      <p>{this.props.det1}</p>
                    </div>
                    </Col>               
            </Row>     
            </Container>
        )
    }
}

export default Legalpro;

