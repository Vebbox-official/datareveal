import React, { Component } from 'react';
import './css/heading.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export class heading extends Component {
    render() {
        return (
            <div>
                <p id="title">{this.props.title}</p>
                <p id="sub">{this.props.sub}</p>
            </div>
        )
    }
}

export default heading

