import React, { Component } from 'react';
import './styles/About.css';

class About extends Component {
  render() {
    return (
      <section id="about" className="about">
          <div className="row aligned-center">
              <div className="text-center medium-4 columns">
                  <img src="/img/me-square.jpg" className="about__mugshot" alt="moi"></img>
              </div>
              <div className="small-8 small-offset-2 end medium-offset-0 medium-8 columns about__content">
                  <h3>About</h3>
                  <p>Hi, My name is Rodrigo Thauby, I&#39;m a Software Engineer at <a href="https://www.crowdkeep.com/">Crowdkeep</a>, where I&#39;m helping to make the experience of time-tracking easier and more reliable.</p><p>This is me: At any given moment you&#39;ll find me behind my monitor working on a UX Design problem, developing a new application and tinkering with new technologies &mdash; or at night: sculpting in Zbrush or getting completely owned in online games.</p>
                  <p>Prepare to be slightly amused by my stuff.</p>
              </div>
          </div>
      </section>
    );
  }
}

export default About;