import React, { Component } from 'react';
import './SubTitle.css';

export class SubTitle extends Component {
    render() {
        return (
        <p className="sub-title">{this.props.text}</p>
        )
    }
}

export default SubTitle
