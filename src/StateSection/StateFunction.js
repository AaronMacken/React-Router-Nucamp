import React, { useState } from 'react';
import SubTitle from '../Components/SubTitle/SubTitle';
import './StateClass.css';

export default function StateFunction() {
    const [counter, setCounter] = useState(0);
    const [isToggleOn, toggleOn] = useState(false);

    let text;
    if (isToggleOn) {
        text = "On"
    } else {
        text = "Off"
    }

    return (
        <div className="content-wrapper">
              <div style={{ width: "50%",  textAlign: "center" }}>
                  <SubTitle text="Function State" />
              </div>
            
            <div style={{width: "50%"}}>
                <div className="increment-wrapper">
                    <button className="btn btn-ghost"  onClick={() => setCounter(counter + 1)}>Increment</button>
                    <p>Counter state: {counter}</p>
                </div>
                <button className="btn btn-ghost" onClick={() => toggleOn(!isToggleOn)}>Turn {text}</button>
            </div>
        </div>

    )
}
