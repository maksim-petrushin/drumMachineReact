
import { useEffect, useState } from "react";
const Button = (props) => {
    var audio = new Audio(props.sound);
    const [value, setValue] = useState(0);
    const play = () =>{
        
        audio.play();
    };
    useEffect(()=>{
        play();
        

    }, [value])
    return (
        <button className="drumButton" onClick={()=>{setValue(value+1)}}>
            <h1>{props.letter}</h1>
        </button>
    );
}

export default Button;