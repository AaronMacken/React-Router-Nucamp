import React, { Component } from 'react';
import './Navbar.css';
import { NavLink } from "react-router-dom";

export class Navbar extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <NavLink exact to="/" className="nav-link">Home</NavLink>
                        </li>
                        <li class="nav-item">
                        <NavLink exact to="/about" className="nav-link">About</NavLink>
                        </li>
                        <li class="nav-item">
                        <NavLink exact to="/contact" className="nav-link">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar
