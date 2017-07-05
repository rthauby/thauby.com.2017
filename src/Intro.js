import React, { Component } from 'react';

import './styles/Intro.css';

class Intro extends Component {
  render() {
    return (
      <section className="intro">
        <h1 className="intro__title">Rodrigo Thauby</h1>
        <h2 className="intro__subtitle">UX Developer &amp; Designer / Game Dev Enthusiast / Traditional &amp; Digital Sculptor</h2>
        <ul className="intro__links">
            <li className="intro-links__items"><a href="https://www.github.com/rthauby">Github</a></li>
            <li className="intro-links__items"><a href="https://www.linkedin.com/in/rthauby/">Linkedin</a></li>
            <li className="intro-links__items"><a href="https://www.artstation.com/artist/pucho">Artstation</a></li>
            <li className="intro-links__items"><a href="http://steamcommunity.com/id/Pucho">Steam</a></li>
        </ul>
      </section>
    );
  }
}

export default Intro;