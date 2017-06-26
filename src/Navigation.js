import React, { Component } from 'react';

class Navigation extends Component {
  render() {
    return (
      <nav className="navigation">
          <div className="row aligned-center">
              <div className="small-12 columns">
                  <h1><a href="/" className="home-link">Rodrigo Thauby</a></h1>
                  <ul className="navigation__list">
                      <li className="nav-list__item"><a href="#about">About</a></li>
                      <li className="nav-list__item"><a href="#work">Work</a></li>
                      <li className="nav-list__item"><a href="#art">Hobbies</a></li>
                  </ul>
              </div>
          </div>
      </nav>
    );
  }
}

export default Navigation;