import React from 'react'
import {CommandParser, endgame} from './CommandParser'
import { browserHistory } from 'react-router';



export default class Console extends React.Component {

  constructor(props) {
    super(props);
    this.state = {consoleHistory : [
    "ASTEROID IMPACT DAMAGE: HIGH",
    "CURRENT STATUS: FREE FALL",
    "AUTOPILOT TURNED OFF TO MINIMIZE POWER COST",
    "PLEASE ACTIVATE EMERGENCY_LANDING_MODE",
    "(If you need a hint, enter HELP!)"
      ], value: ''};

    this.displayInput = this.displayInput.bind(this);
    this.processInput = this.processInput.bind(this);
  }

  displayInput(event) {
    this.setState({value: event.target.value});
  }

  processInput(event) {
    if(endgame ==true){
      browserHistory.push('/end');

    }
    var consoleHistory = this.state.consoleHistory;
    var textList = CommandParser(this.state.value);
    this.setState({
      value: '',
      consoleHistory: consoleHistory.concat(textList)
    });
    event.preventDefault();
  }

  render() {
  var consoleHistory = this.state.consoleHistory;
    const consolelog = consoleHistory.map((commands, index) =>
      <p key={index}>
        {commands}
      </p>
    );

    return (

      <div>

        <ul>{consolelog}</ul>

        <form onSubmit={this.processInput} id="console">
          <label>
            <input type="text" value={this.state.value} onChange={this.displayInput}/>
          </label>
          <input type="submit" value="Submit" />
        </form>
        
      </div>
      
      );

  }
}