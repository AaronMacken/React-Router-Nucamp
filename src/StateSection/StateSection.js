import React, { useState } from 'react';
import './StateSection.css';
import StateClass from './StateClass';
import StateFunction from './StateFunction';
import StatePropsClass from './StatePropsClass';
import StatePropsFunction from './StatePropsFunction';

export default function StateSection() {
    const [counter, setCounter] = useState(0);
    const [isOn, toggleOn] = useState(false);

    return (
        <section className="state-section">


            <div className="state-not-passed">
                <StateClass />
                <hr style={{ margin: 0 }} />
                <StateFunction />
            </div>
            <hr style={{ margin: 0 }} />

            <div className="state-passed-as-props">
                <StatePropsClass toggleOn={() => toggleOn(!isOn)}
                    isOn={isOn}
                    setCounter={() => setCounter(counter + 1)}
                    counter={counter}
                />
                <hr style={{ margin: 0 }} />
                <StatePropsFunction
                    toggleOn={() => toggleOn(!isOn)}
                    isOn={isOn}
                    setCounter={() => setCounter(counter + 1)}
                    counter={counter}
                />

            </div>

        </section>
    )
}
