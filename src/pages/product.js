import React, { Component } from 'react'
import Content from '../component/content'
// import Slide from '../component/carousel'
import Feature from '../component/features'
import Footer from '../component/footer'
import Getintouch from '../component/get-in-touch'
import Landing from '../component/landing'
import Pagecontent from '../component/page-content'
import Parallax from '../component/parallax'

import landing_img from '../component/img/product/product-landing.png'

import gen_vision_one from '../component/img/general-vision-div-1.png'
import gen_vision_two from '../component/img/general-vision-div-2.png'
import gen_vision_three from '../component/img/general-vision-div-3.png'

import content_one from '../component/img/product/product-content-one.jpg'
import content_two from '../component/img/product/product-content-two.jpg'
import content_three from '../component/img/product/product-content-three.jpg'

export default class Productpage extends Component {
    render() {
        return (
            <div>
                <Landing
                    landing_img={landing_img} landing_img_alt="vision datareveal"
                    landing_h2="Datareveal Extract - Product Development"
                    landing_h3="Our product development, is a series of steps that includes the conceptualization, design, development and marketing of newly created or newly rebranded goods or services."
                />
                <Pagecontent
                    vision_content_h3="Datareveal"
                    vision_content_h6="Extract Product Development"
                    vision_page_content_p="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."

                    general_page_one="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                    general_page_two="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                    general_page_three="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."

                    page_content_img_one={gen_vision_one} page_content_img_alt_one="vision datareveal"
                    page_content_img_two={gen_vision_two} page_content_img_alt_two="vision datareveal"
                    page_content_img_three={gen_vision_three} page_content_img_alt_three="vision datareveal"
                />
                <Parallax
                    parallax_content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                />
                <Content
                    content_img_one={content_one} content_img_one_alt="vision datareveal"
                    content_img_two={content_two} content_img_two_alt="vision datareveal"
                    content_img_three={content_three} content_img_three_alt="vision datareveal"

                    vision_head_one="Lorem Ipsum"
                    vision_head_two="Lorem Ipsum"
                    vision_head_three="Lorem Ipsum"

                    vision_content_one="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."

                    vision_content_two="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."

                    vision_content_three="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
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
