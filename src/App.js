import React, { Component } from 'react';
import './App.css';

class App extends Component {
  Condition = (number) => {
    if (number % 3 === 0 && number % 5 === 0) {
      return '#2ecc71';
    } else if (number % 5 === 0) {
      return '#00cec9';
    } else if (number % 3 === 0) {
      return '#ee5253';
    } else {
      return '#f5f6fa';
    }
  }

  render() {
    var numbers = Array.apply(null, {length: 101}).map(function(value, index){
      return index;
    });

    return (
      <div className="App">
        <h4 className="Title">Display a list of numbers from 0 to 100</h4>
        <p className="Instructions-Title"><i>Each list item will have a background of a certain color:</i></p>
        <ul className="List">
          <li>For numbers divisible by 3, make the background red,</li>
          <li>For numbers divisible by 5 make the background blue,</li>
          <li>For numbers divisible by both 5 and 3, make the background green</li>
          <li>For numbers not divisible, leave the background white</li>
        </ul>
        {
          numbers.map((number, index) => {
            return (
              <p className="Numbers" key={index}
                style={{ backgroundColor: this.Condition(number)}}
              >{number}</p>
            )
          })
        }
      </div>
    );
  }
}

export default App;
