import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import imgg from './img/c1.jpg';
// import './css/contactus.css';
import { Container,Row,Col } from 'react-bootstrap'
// import imgg from './img/c1.jpg'


// function Carousal_() {
//     return (
//         <Carousel>
//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src={imgg}
//             alt="First slide"
//           />
//           <Carousel.Caption>
//             <h3>First slide label</h3>
//             <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src={imgg}
//             alt="Second slide"
//           />
      
//           <Carousel.Caption>
//             <h3>Second slide label</h3>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src={imgg}
//             alt="Third slide"
//           />
            
//           <Carousel.Caption>
//             <h3>Third slide label</h3>
//             <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//       </Carousel>    

//     )
// }

// export default Carousal_


export class Carousal_ extends React.Component {
    render() {
        return (
           
                <OwlCarousel  className='owl-theme' loop="true" items={1} autoplay ={false} nav>
                {/* <OwlCarousel options={options} className='owl-theme' loop margin={10}  nav> */}
              
    <div className='item bg-info bg-img'>
       
    {/* <img src={imgg} alt="j" className="vs" /> */}
    <div className="df" >f</div>
    
    </div>
    <div className='item bg-warning'>
    <img
        className="d-block w-100"
        src={imgg}
        alt="First slide"
        />
    </div>
    <div className='item bg-danger'>
        <h4>3</h4>
    </div>
    <div className='item bg-secondary'>
        <h4>4</h4>
    </div>
    <div className='item bg-success'>
        <h4>5</h4>
    </div>
    <div className='item bg-info'>
        <h4>6</h4>
    </div>
    <div className='item bg-warning'>
        <h4>7</h4>
    </div>
    <div className='item bg-success'>
        <h4>8</h4>
    </div>
   
</OwlCarousel>  
        )
    }
}

export default Carousal_

/* <OwlCarousel className='owl-theme' loop margin={10} nav>
    <div className='item bg-info'>
        <h4>1</h4>
    </div>
    <div className='item bg-warning'>
        <h4>2</h4>
    </div>
    <div className='item bg-danger'>
        <h4>3</h4>
    </div>
    <div className='item bg-secondary'>
        <h4>4</h4>
    </div>
    <div className='item bg-success'>
        <h4>5</h4>
    </div>
    <div className='item bg-info'>
        <h4>6</h4>
    </div>
    <div className='item bg-warning'>
        <h4>7</h4>
    </div>
    <div className='item bg-success'>
        <h4>8</h4>
    </div>
   
</OwlCarousel>             */
        
