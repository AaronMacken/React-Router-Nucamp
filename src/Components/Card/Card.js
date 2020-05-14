import React from 'react';
import './Card.css';
import SubTitle from '../SubTitle/SubTitle';

export default function Card(props) {
    return (
        <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src={props.img} alt="Card image cap" />
        <div className="card-body">
            <SubTitle />
            <p className="card-text">{props.text}</p>
        </div>
    </div>
    )
}
