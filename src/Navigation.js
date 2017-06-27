import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import About from './About'
import Work from './Work'
import Hobbies from './Hobbies'

class Navigation extends Component {
  render() {
    return (
      <nav className="navigation">
          <div className="row aligned-center">
              <div className="small-12 columns">
                  <h1><a href="/" className="home-link">Rodrigo Thauby</a></h1>
                  <ul className="navigation__list">
                      <li className="nav-list__item"><NavLink to="/" activeClassName="selected">Home</NavLink></li>
                      <li className="nav-list__item"><NavLink to="/work" activeClassName="selected">Work</NavLink></li>
                      <li className="nav-list__item"><NavLink to="/hobbies" activeClassName="selected">Hobbies</NavLink></li>
                  </ul>
              </div>
          </div>
      </nav>
    );
  }
}

export default Navigation;