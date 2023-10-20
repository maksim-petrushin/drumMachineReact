import sound1 from "./components/sound1.mp3"
import sound2 from "./components/sound2.mp3"
import sound3 from "./components/sound3.mp3"
import sound4 from "./components/sound4.mp3"
import sound5 from "./components/sound5.mp3"
import sound6 from "./components/sound6.mp3"
import sound7 from "./components/sound7.mp3"
import sound8 from "./components/sound8.mp3"
import sound9 from "./components/sound9.mp3"
import React from "react"
import Button from "./components/Button";
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      power: " on",
      latestSound: ""
    }
    this.handlePower = this.handlePower.bind(this);
    this.handleSound = this.handleSound.bind(this);
  }
  handlePower(event){
    console.log(event.target.name)
    this.setState((state)=>{
      if(state.power === " on"){
        return {
          power: " off"
        }
      }
      else if(state.power === " off"){
        return {
          power: " on"
        }
      }
    })
  }
  idToText(id){
    switch(id){
      case "Q":
      return "Heater 1"
      case "W":
      return "Heater 2"
      case "E":
      return "Heater 3"
      case "A":
      return "Heater 4"
      case "S":
      return "Clap"
      case "D":
      return "Open HH"
      case "Z":
      return "Kick n' Hat"
      case "X":
      return "Kick"
      case "C":
      return "Closed HH"
      default:
      return ""
    }
  }

  handleSound(id){
    this.setState({
      latestSound: this.idToText(id)
    });
  }
  render(){
    return (
    <div className="App">
      <div className="logo"></div>
      <div className="buttonContainer">
      <Button sound={sound1} letter={"Q"} power={this.state.power} handleSound={this.handleSound}/>
      <Button sound={sound2} letter={"W"} power={this.state.power} handleSound={this.handleSound}/>
      <Button sound={sound3} letter={"E"} power={this.state.power} handleSound={this.handleSound}/>
      <Button sound={sound4} letter={"A"} power={this.state.power} handleSound={this.handleSound}/>
      <Button sound={sound5} letter={"S"} power={this.state.power} handleSound={this.handleSound}/>
      <Button sound={sound6} letter={"D"} power={this.state.power} handleSound={this.handleSound}/>
      <Button sound={sound7} letter={"Z"} power={this.state.power} handleSound={this.handleSound}/>
      <Button sound={sound8} letter={"X"} power={this.state.power} handleSound={this.handleSound}/>
      <Button sound={sound9} letter={"C"} power={this.state.power} handleSound={this.handleSound}/>
      </div>
      <div className="powerSwitch">
        <h5 className="powerText">Power</h5>
        <button onClick={this.handlePower}>
          <div className="powerContainer">
            <div className={"switch"+this.state.power}></div>
          </div>
        </button>
      </div>
      <div className="statusBar" >{this.state.latestSound}</div>
      <div className="volumeBar"></div>
    </div>
  );
  }
}

export default App;
