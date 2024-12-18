import "../styles/Counter.css";
import { useState } from "react";

export default function Counter(){
    const [count, setCount] = useState(0);

    const sumar = () => {
        setCount(count + 1);
    }

    const sumar10 = () => {
        setCount(count + 10);
    }

    const restar = () => {
        setCount(count - 1);
    }

    const restar10 = () => {
        setCount(count - 10);
    }

    const reiniciar = () => {
        setCount(0);
    }

    return (

            <div className="container-Counter">
                <h1 className="result-Counter">{count}</h1>
                <div className="buttonsContainer-Counter">
                    <button onClick={sumar}>+1</button>
                    <button onClick={restar}>-1</button>
                    <button onClick={sumar10}>+10</button>
                    <button onClick={restar10}>-10</button>
                    <button onClick={reiniciar}>Reiniciar</button>
                </div>
            </div>
        
    )
}