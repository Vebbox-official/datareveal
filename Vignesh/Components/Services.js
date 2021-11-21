import React from 'react'
import './css/services.css'

function Services(props) {
    return (
        <div className={ props.css ? "text-center services-div":"text-center features-div" }>
           <img src={props.img} alt="serivices-icon" height="15%" width="15%" className="mt-5"/>
           <div className="p-3">
           <h3 className="mt-4">{props.heading}</h3>
           <p className="mt-4">{props.content}</p>
           </div>
        </div>
    )
}

export default Services
