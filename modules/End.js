import React from 'react'

export default class End extends React.Component {

  
  constructor(props) {
    super(props);
    this.state = {text : "Congratulations!", currentNumber : 0};
    this.updateScreen = this.updateScreen.bind(this);
  }


// TODO: More elegant implementation. Make it prettier.
  updateScreen() {
    var textList = ["Congratulations!",
                    "You have successfully completed: SPACESHIP PILOT EXAM: LEVEL 2.",
                    "This earns you the rank of SPACESHIP NEWBIE and authorizes you to apply for the following positions: SPACE GARBAGE COLLECTOR.",
                    "You may now attempt SPACESHIP PILOT EXAM: LEVEL 3.",
                    "The next administration of this exam will take place in PLANET GGJ TESTING CENTER on JANUARY 25 2255.",
                    "This test will consist of: MANUAL ENGINE FAILURE DIAGNOSIS with a time limit of 10 MINUTES and NO MANUAL OR SUPPLEMENTARY MATERIAL.",
                    "Good luck!"]
    var currentNumber = this.state.currentNumber;

    if(currentNumber < textList.length-1){
        currentNumber++;
        this.setState({
          text : textList[currentNumber],
          currentNumber : currentNumber
        });
    }
  }
  //TODO: Respond to keypress instead of just clicks
  //TODO: Add "thank you for playing" + social buttons to end screen
  render() {
    return (
      <div id="endgame" onClick={this.updateScreen} >
        <h2 >{this.state.text}</h2>
      </div>
    );
  }

}