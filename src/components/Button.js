import React from "react";
import {Howl} from "howler"
class Button extends React.Component{
    soundPlay = (src) =>{
        const sound = new Howl({
            src,
            html5: true
        })
        sound.play();
    }
    render(){
        return (
            <button className="drumButton" onClick={()=>{(this.props.power === " on") && this.soundPlay(this.props.sound)}}>
            <h1>{this.props.letter}</h1>
        </button>
        );
    }
}

export default Button;