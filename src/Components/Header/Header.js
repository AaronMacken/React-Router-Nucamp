import React, { Component } from 'react';
import "./Header.css";
import Navbar from '../Navbar/Navbar';
import SubTitle from '../SubTitle/SubTitle';

export class Header extends Component {
    render() {
        return (
            <div className="header-wrapper">
                <Navbar />
                <div className="header">
                    <div className="header-title-wrapper">
                        <h1 className="header-title">{this.props.headerTitle}</h1>   
                        <SubTitle text={this.props.headerSub} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Header
