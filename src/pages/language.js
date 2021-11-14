import React, { Component } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import Content from '../component/content'
import Parallax from '../component/parallax'
import Landing from '../component/landing'
import landing_img from '../component/img/language/language-landing.png'
import Feature from '../component/features'
import Footer from '../component/footer'
import Getintouch from '../component/get-in-touch'

import content_one from '../component/img/language/language-content-one.jpg'
import content_two from '../component/img/language/language-content-two.jpg'
import content_three from '../component/img/language/language-content-three.jpg'

export default class Language extends Component {
    render() {
        return (
            <div>
                <Landing
                    landing_img={landing_img} landing_img_alt="language datareveal"
                    landing_h2="Datareveal Extract - Language"
                    landing_h3="Comprehend text and natural language to automate data capture, analysis, and entry."
                />

                <Container>
                    <Row className="mt-2">
                        <Col>
                            <h6 className="mb-2" id="page_content_h6">Datareveal</h6>
                            <h3 id="page_content_h3">Language</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4}>
                            <div id="language_service_one">
                                <p className="ps-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
                            </div>
                        </Col>
                        <Col lg={4} id="language_service_two" className="my-auto ps-lg-5">
                            <p><i class="fas fa-globe-asia"></i> &nbsp;Natural Language Processing</p>
                            <p><i class="fas fa-file-alt"></i> &nbsp;Document Classification</p>
                            <p><i class="fas fa-comment-dots"></i> &nbsp;Speech-to-Text</p>
                            <p><i class="fas fa-biohazard"></i> &nbsp;Topic Modeling</p>
                        </Col>
                        <Col lg={4} id="language_service_three" className="my-auto">
                            <p><i class="fas fa-plus-square"></i> &nbsp;Natural Language Generation</p>
                            <p><i class="fas fa-text-height"></i> &nbsp;Text Extraction</p>
                            <p><i class="fas fa-chart-pie"></i> &nbsp;Text Analysis</p>
                            <p><i class="fas fa-smile-beam"></i> &nbsp;Sentiment Analysis</p>
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
