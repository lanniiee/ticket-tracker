import "./Counter.scss";
import Button from "../Buttons/Button.jsx";
import {React, useState} from "react";

const Counter = (props) => {
    const [counter, setCounter] = useState(0);

    const decreaseCounter = () => {
        if (counter > 0) {
            setCounter(counter - 1);
        }
    }

    const increaseCounter = () => {
        setCounter(counter + 1);
    }

    return (
        <div className="counter">
            <h2 className="counter__title">Counter</h2>
            <h2 className="counter__display" id="display">{counter}</h2>
            <div className="buttons">
                    <Button value="-" name="negative" click={decreaseCounter}/>
                    <Button value="+" name="positive" click={increaseCounter}/>
            </div>
            
            
            
        </div>
    )
}

export default Counter;