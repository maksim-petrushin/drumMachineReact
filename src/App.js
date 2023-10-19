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
  }
  render(){
    return (
    <div className="App">
      <div className="logo"></div>
      <div className="buttonContainer">
      <Button sound={sound1}
      letter={"Q"}/>
      <Button sound={sound2}
      letter={"W"}/>
      <Button sound={sound3}
      letter={"E"}/>
      <Button sound={sound4}
      letter={"A"}/>
      <Button sound={sound5}
      letter={"S"}/>
      <Button sound={sound6}
      letter={"D"}/>
      <Button sound={sound7}
      letter={"Z"}/>
      <Button sound={sound8}
      letter={"X"}/>
      <Button sound={sound9}
      letter={"C"}/>
      </div>
      <div className="powerSwitch"></div>
      <div className="statusBar"></div>
      <div className="volumeBar"></div>
    </div>
  );
  }
}

export default App;
