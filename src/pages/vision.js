import React, { Component } from 'react'
import Content from '../component/content'
// import Slide from '../component/carousel'
import Feature from '../component/features'
import Footer from '../component/footer'
import Getintouch from '../component/get-in-touch'
import Landing from '../component/landing'
import Pagecontent from '../component/page-content'
import Parallax from '../component/parallax'

import landing_img from '../component/img/visionlanding.png'

import gen_vision_one from '../component/img/general-vision-div-1.png'
import gen_vision_two from '../component/img/general-vision-div-2.png'
import gen_vision_three from '../component/img/general-vision-div-3.png'

import content_one from '../component/img/content-img-one.jpg'
import content_two from '../component/img/content-img-two.jpg'
import content_three from '../component/img/content-img-three.jpg'

export default class Visionpage extends Component {
    render() {
        return (
            <div>
                <Landing
                    landing_img={landing_img} landing_img_alt="vision datareveal"
                    landing_h2="Datareveal Extract - Vision"
                    landing_h3="Powerful software to read documents, interpret images, and analyze videos"
                />
                <Pagecontent
                    vision_content_h3="Datareveal"
                    vision_content_h6="Extract Vision"
                    vision_page_content_p="Configurable machine learning, neural network, and deep learning models to extract structured data from images, videos and documents. Assemble with Language and Learning models to deploy customized end-to-end solutions."

                    general_page_one="Image Classification, Analysis and Anomaly Detection"
                    general_page_two="Video Analytics, Search, and Object Tracking"
                    general_page_three="Intelligent OCR, Document Classification, and Text Extraction"

                    page_content_img_one={gen_vision_one} page_content_img_alt_one="vision datareveal"
                    page_content_img_two={gen_vision_two} page_content_img_alt_two="vision datareveal"
                    page_content_img_three={gen_vision_three} page_content_img_alt_three="vision datareveal"
                />
                <Parallax
                    parallax_content="Enable software with human like vision to analyze images, videos, and documents across real world use cases."
                />
                <Content
                    content_img_one={content_one} content_img_one_alt="vision datareveal"
                    content_img_two={content_two} content_img_two_alt="vision datareveal"
                    content_img_three={content_three} content_img_three_alt="vision datareveal"

                    vision_head_one="Extract text from documents and media"
                    vision_head_two="Capture people, things, and events across video assets"
                    vision_head_three="Identify people in real-time, with limited training data"

                    vision_content_one="Extract can identify and capture business critical content from hundreds of documents out of the box, including legal pleadings, medical records, common insurance documents like ACORD forms, and IRS documents like 1040s and W-2s. The Extract AI engine can be easily configured to identify and extract text from virtually any document, including unstructured documents with inconsistent layouts."
                    vision_content_two="Extract Vision uses transfer learning to quickly identify new types of objects with limited training data. Once configured, Extract can count and track multiple disparate objects moving in multiple directions through a video frame--like products on a factory floor, people walking through a shopping center, or cars on the road. Datareavel AI has deployed these models to help municipalities increase urban mobility and traffic safety by tracking the number, types, and direction of vehicles moving through busy intersections."
                    vision_content_three="Datareavel Extract facial recognition leverages state-of-the-art models to recognize people with limited training data. Extract can recognize faces in digital and analog footage, regardless of angle of capture, and even in suboptimal conditions like when they are wearing face masks. Extract facial recognition can process archived images and video, or deployed in real time across a wide range of use-cases like forensic analysis, e-discovery, medication adherence monitoring, physical premises monitoring, and bio-metric access control."
                />
                <Parallax
                    parallax_content="lorem ipsm"
                />

                <Feature />
                {/* <Slide /> */}
                <Getintouch />
                <Footer />
            </div>
        )
    }
}
