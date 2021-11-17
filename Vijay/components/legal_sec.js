import React from 'react';
import './legal_sec.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function legal_sec(props) {
    return (
        <div className="head">
                <img src={props.img1} height="130" width="200" alt="img"/>
                <p className="title">{props.title}</p>
                <p className="con">{props.con}</p>
        </div>
    )
}

export default legal_sec
