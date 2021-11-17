
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './style.css'
import Google from './Google'
import Tavbar from './Tavbar'
class App extends React.Component {
  render() {
    return (
      <div className="App" >
          <Tavbar/>
      

      </div>
    );
  }
}
export default App