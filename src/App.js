import React, { Component } from 'react';
import './App.css';
import Navigation from './Navigation';
import Intro from './Intro';
import About from './About';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Intro />
        <About />
      </div>
    );
  }
}

export default App;
