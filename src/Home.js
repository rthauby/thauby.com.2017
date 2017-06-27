import React, { Component } from 'react';
import About from './About'
import Intro from './Intro'

class Home extends Component {
  render() {
    return (
      <div>
        <Intro />
        <About />
      </div>
    );
  }
}

export default Home;