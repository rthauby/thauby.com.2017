import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <section id="about" className="about">
          <div className="row aligned-center">
              <div className="text-center small-4 columns">
                  <img src="/img/me-square.jpg" className="about__mugshot" alt="moi"></img>
              </div>
              <div className="small-8 columns">
                  <h3>About</h3>
                  <p>Hi, My name is Rodrigo Thauby, I used to <a href="http://www.gamasutra.com/view/news/299744/Dropzone_dev_Sparkypants_lays_off_staff.php">just work</a> as a UI Developer at <a href="https://www.sparkypants.com">Sparkypants</a>. This is me: At any given moment you&#39;ll find me behind my monitor working on a UX Design problem, coding the solution for it in whatever flavor of language or platform that may require; or at night: sculpting in Zbrush or getting completely owned online.</p>
                  <p>Prepare to be slightly amused by my stuff.</p>
              </div>
          </div>
      </section>
    );
  }
}

export default About;