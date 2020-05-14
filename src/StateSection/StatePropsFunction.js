import React from 'react';
import SubTitle from '../Components/SubTitle/SubTitle';
import './StateClass.css';

export default function StatePropsFunction(props) {
    let text;
    if (props.isOn) {
        text = "On"
    } else {
        text = "Off"
    }
    return (
        <div className="content-wrapper">
            <div style={{ width: "50%", textAlign: "center" }}>
                <SubTitle text="FN - State Via Props" />
            </div>
            <div style={{ width: "50%" }}>
                <div className="increment-wrapper">
                    <button onClick={props.setCounter} className="btn btn-ghost">Increment</button>
                    <p style={{ margin: 0 }}>Counter state: {props.counter}</p>
                </div>
                <button onClick={props.toggleOn} className="btn btn-ghost">Turn {text}</button>
            </div>

        </div>
    )
}
