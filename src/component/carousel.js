import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'
import slide_one from './img/slide1.png'
import slide_two from './img/slide2.png'
import slide_three from './img/slide3.png'
import slide_four from './img/slide4.png'

export default class Slide extends Component {
    render() {
        return (
            <div>
                <Carousel fade>
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100"
                            src={slide_one}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                            className="d-block w-100"
                            src={slide_two}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={250}>
                        <img
                            className="d-block w-100"
                            src={slide_three}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={100}>
                        <img
                            className="d-block w-100"
                            src={slide_four}
                            alt="Fourth slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}
