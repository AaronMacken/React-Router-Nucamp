import React, { Component } from 'react';
import './StateClass.css';
import '../Components/SubTitle/SubTitle';
import SubTitle from '../Components/SubTitle/SubTitle';

export class StateClass extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0,
            isOn: false
        }
        this.increment = this.increment.bind(this);
        this.toggleOn = this.toggleOn.bind(this);
    }

    increment() {
        this.setState({ counter: this.state.counter + 1 });
    }

    toggleOn() {
        this.setState({ isOn: !this.state.isOn })
    }

    render() {
        let text;
        if (this.state.isOn) {
            text = "On"
        } else {
            text = "Off"
        }


        return (
            <div className="content-wrapper">

                <div style={{ width: "50%",  textAlign: "center" }}>
                    <SubTitle text="Class State" />
                </div>


                <div style={{ width: "50%" }}>
                    <div className="increment-wrapper">
                        <button onClick={this.increment} className="btn btn-ghost">Increment</button>
                        <p style={{ margin: 0 }}>Counter state: {this.state.counter}</p>
                    </div>
                    <button onClick={this.toggleOn} className="btn btn-ghost">Turn {text}</button>
                </div>

            </div>

        )
    }
}

export default StateClass
