import React, { Component } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import Content from '../component/content'
import Landing from '../component/landing'
import landing_img from '../component/img/learning/learning-landing.png'
import Parallax from '../component/parallax'
import Feature from '../component/features'
import Footer from '../component/footer'
import Getintouch from '../component/get-in-touch'

import content_one from '../component/img/learning/learning-content-one.png'
import content_two from '../component/img/learning/learning-content-two.jpg'
import content_three from '../component/img/learning/learning-content-three.png'

export default class Learningpage extends Component {
    render() {
        return (
            <div>
                <Landing
                    landing_img={landing_img} landing_img_alt="learning datareveal"
                    landing_h2="Datareveal Extract - Learning"
                    landing_h3="Go beyond data extraction to automate insights and decisions, not just tasks."
                />

                <Container>
                    <Row className="mt-2">
                        <Col>
                            <h6 className="mb-2" id="page_content_h6">Datareveal</h6>
                            <h3 id="page_content_h3">Learning</h3>
                            <p id="page_content_p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </Col>
                    </Row>
                    <Row id="page_content_service">
                        <Col lg={6} md={6} className="p-2">
                            <p><i class="fas fa-magic"></i> &nbsp;Lorem Ipsum is simply dummy text of the industry.</p>
                        </Col>
                        <Col lg={6} md={6} className="p-2">
                            <p><i class="fas fa-hourglass"></i> &nbsp;Lorem Ipsum is simply dummy text of the industry.</p>
                        </Col>
                        <Col lg={6} md={6} className="p-2">
                            <p><i class="fas fa-history"></i> &nbsp;Lorem Ipsum is simply dummy text of the industry.</p>
                        </Col>
                        <Col lg={6} md={6} className="p-2">
                            <p><i class="fas fa-chart-line"></i> &nbsp;Lorem Ipsum is simply dummy text of the industry.</p>
                        </Col>
                    </Row>
                </Container>

                <Parallax
                    parallax_content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
                />

                <Content
                    content_img_one={content_one} content_img_one_alt="learning datareveal"
                    content_img_two={content_three} content_img_two_alt="learning datareveal"
                    content_img_three={content_two} content_img_three_alt="learning datareveal"

                    vision_head_one="Lorem Ipsum"
                    vision_head_two="Lorem Ipsum"
                    vision_head_three="Lorem Ipsum"

                    vision_content_one="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

                    vision_content_two="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

                    vision_content_three="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                />

                <Feature />
                {/* <Slide /> */}
                <Getintouch />
                <Footer />
            </div>
        )
    }
}
