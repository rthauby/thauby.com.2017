import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

import About from './About'
import Work from './Work'
import Hobbies from './Hobbies'

import './styles/Navigation.css';

let navClass = 'closed';

class Navigation extends Component {

  handleMobileNavClick(e){
    const el = e.currentTarget;
    el.classList.toggle('open');

    if(el.classList.contains('open')){
      navClass = 'open';
    } else {
      navClass = 'closed';
    }
  }

  render() {
    return (
      <nav className="navigation">
          <div className="row aligned-center">
              <div className="small-12 columns">
                  <h1><a href="/" className="home-link">Rodrigo Thauby</a></h1>

                  <div id="nav-icon" onClick={e => this.handleMobileNavClick(e)}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <ul className={`navigation__list ${navClass}`}>
                      <li className="nav-list__item"><NavLink to="/" activeClassName="selected">Home</NavLink></li>
                      <li className="nav-list__item"><NavLink to="/work" activeClassName="selected">Work</NavLink></li>
                      <li className="nav-list__item"><NavLink to="/hobbies" activeClassName="selected">Hobbies</NavLink></li>
                      <li className="nav-list__item"><a href="https://medium.com/@Pucho">Blog</a></li>
                  </ul>
              </div>
          </div>
      </nav>
    );
  }
}

export default Navigation;