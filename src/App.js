import React, { Component } from 'react';
import './App.css';
import Cities from './Cities/Cities';

class App extends Component {
  state={
    cities:[
      {city:"Kosice", country:"SK", temp: "nan", pop: "null"},
      {city:"Bratislava", country:"SK", temp: "nan", pop: "null"},
      {city:"Zilina", country:"SK", temp: "nan", pop: "null"}
    ]
  }
  render() {
    return (
      <Cities list={this.state.cities}/>
    );
  }
}

export default App;
