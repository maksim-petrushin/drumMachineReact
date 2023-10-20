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
    }
    this.handlePower = this.handlePower.bind(this);
  }
  handlePower(){
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
  render(){
    return (
    <div className="App">
      <div className="logo"></div>
      <div className="buttonContainer">
      <Button sound={sound1} letter={"Q"} power={this.state.power}/>
      <Button sound={sound2} letter={"W"} power={this.state.power}/>
      <Button sound={sound3} letter={"E"} power={this.state.power}/>
      <Button sound={sound4} letter={"A"} power={this.state.power}/>
      <Button sound={sound5} letter={"S"} power={this.state.power}/>
      <Button sound={sound6} letter={"D"} power={this.state.power}/>
      <Button sound={sound7} letter={"Z"} power={this.state.power}/>
      <Button sound={sound8} letter={"X"} power={this.state.power}/>
      <Button sound={sound9} letter={"C"} power={this.state.power}/>
      </div>
      <div className="powerSwitch">
        <h5 className="powerText">Power</h5>
        <button onClick={this.handlePower}>
          <div className="powerContainer">
            <div className={"switch"+this.state.power}></div>
          </div>
        </button>
      </div>
      <div className="statusBar"></div>
      <div className="volumeBar"></div>
    </div>
  );
  }
}

export default App;
