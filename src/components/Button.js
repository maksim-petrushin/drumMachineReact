import React from "react";
import {Howl} from "howler"
class Button extends React.Component{
    soundPlay = () =>{
        let src = this.props.sound;
        const sound = new Howl({
            src,
            html5: true
        })
        sound.play();
        this.props.handleSound(this.props.letter);
    }
    render(){
        return (
            <button id={this.props.letter} className="drumButton" onClick={()=>{(this.props.power === " on") && this.soundPlay()}}>
            <h1>{this.props.letter}</h1>
        </button>
        );
    }
}

export default Button;