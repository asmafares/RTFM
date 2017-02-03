import React from 'react'
import CommandParser from './CommandParser'

export default class Console extends React.Component {

  constructor(props) {
    super(props);
    this.state = {consoleHistory : [], value: ''};

    this.displayInput = this.displayInput.bind(this);
    this.processInput = this.processInput.bind(this);
  }

  displayInput(event) {
    this.setState({value: event.target.value});
  }

  processInput(event) {
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
            >
            <input type="text" value={this.state.value} onChange={this.displayInput}/>
          </label>
          <input type="submit" value="Submit" />
        </form>
        
      </div>
      
      );

  }
}