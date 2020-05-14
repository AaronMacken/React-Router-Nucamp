import React, { Component } from 'react';
import './StateClass.css';
import SubTitle from '../Components/SubTitle/SubTitle'

export class StatePropsClass extends Component {
    render() {
        let text;
        if(this.props.isOn) {
            text = "On"
        } else {
            text="Off"
        }
        return (
            <div className="content-wrapper">
                <div style={{ width: "50%", textAlign: "center" }}>
                    <SubTitle text="Class - State Via Props" />
                </div>
                <div style={{ width: "50%"}}>
                    <div className="increment-wrapper">
                        <button onClick={this.props.setCounter} className="btn btn-ghost">Increment</button>
                        <p style={{ margin: 0 }}>Counter state: {this.props.counter}</p>
                    </div>
                    <button onClick={this.props.toggleOn} className="btn btn-ghost">Turn {text}</button>
                </div>

            </div>
        )
    }
}

export default StatePropsClass
