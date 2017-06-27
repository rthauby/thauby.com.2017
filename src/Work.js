import React, { Component } from 'react';

class Work extends Component {
  render() {
    return (
      <section id="work">
          <div className="row aligned-center">
              <div className="small-12 columns">
                  <h3>Work</h3>

                  <div className="card">
                      <div className="card__body">
                          <h4 className="card__title">Dropzone - PC Game (Early Access Steam)</h4>
                          <p>I joined Sparkypants Studios to help push Dropzone past the finish line and into the launch window. Eveything in the UI was powered using standard Web Technologies: HTML, CSS and tons and tons of  vanilla JavaScript. From the Matchmaking Menus, to User Preferences to in-game HUD and after-match result charts, and everything in between.</p>
                          <p>It was an absolute blast to work on this intense project.</p>
                      </div>
                      <img src="/static/img/work/dz_01.jpg" className="card__photo"></img>
                      <img src="/static/img/work/dz_02.jpg" className="card__photo"></img>
                      <img src="/static/img/work/dz_03.jpg" className="card__photo"></img>
                      <img src="/static/img/work/dz_04.jpg" className="card__photo"></img>
                      <img src="/static/img/work/dz_05.jpg" className="card__photo"></img>
                  </div>

                  <div className="card">
                      <div className="card__body">
                          <h4 className="card__title">VR Cornhole - PC Game Experiment</h4>
                          <p>VR Cornhole is a small experiment I built for <a href="https://www.isl.co">ISL</a> using the HTC VIVE, and built on the Unreal Engine 4.</p>
                          <p>It leverages the Unreal Engine&#39;s multiplayer capabilities and combines them with VR support, for a unique fun game!</p>
                          <p>You can find more info about this project on this official <a href="https://isl.co/work/vr-cornhole/">blog post</a>, and on the <a href="https://sudo.isl.co/early-days-in-vr/">ISL engineering site</a></p>
                      </div>
                      <img src="/static/img/work/cornhole_01.jpg" className="card__photo"></img>
                      <img src="/static/img/work/cornhole_02.jpg" className="card__photo"></img>
                  </div>

                  <div className="card">
                      <div className="card__body">
                          <h4 className="card__title">Generation Beyond</h4>
                          <p>This project was built for Lockheed Martin and was part of a multifaceted venture with Framestore (NY) and McCann. I was tasked with creating an interactive 3d experience, which I built in Unity. I also contributed with the <a href="http://lockheedmartin.com/generationbeyond/">marketing site</a> with had loads of CSS animations.</p>
                          <p>I wrote an interesting breakdown of why we chose Unity for this project in the engineering blog at ISL. You can find it <a href="https://sudo.isl.co/going-to-mars-unity-in-a-real-world-use-case/">here</a></p>
                      </div>
                      <img src="/static/img/work/mars1.png" className="card__photo"></img>
                      <img src="/static/img/work/mars2.png" className="card__photo"></img>
                      <img src="/static/img/work/mars3.png" className="card__photo"></img>
                      <img src="/static/img/work/mars4.png" className="card__photo"></img>
                  </div>

                  <div className="card">
                      <div className="card__body">
                          <h4 className="card__title">Chloraseptic - Coat your Throat</h4>
                          <p>This project was part of a Facebook campaign in which the user could design their very own "ugly xmas sweater" and share it on Facebook. There was a contest at the end and we produced the actual winning sweater.</p>
                          <p>The designer software was made using HTML canvas by leveraging EaselJS.</p>
                      </div>
                      <img src="/static/img/work/cyt1.png" className="card__photo"></img>
                      <img src="/static/img/work/cyt2.png" className="card__photo"></img>
                  </div>

                  <div className="card">
                      <div className="card__body">
                          <h4 className="card__title">Red Bull - Brooklyn Nets Trivia Locker</h4>
                          <p>The Redbull Nets Trivia Locker is a Knowledge game that is a physical device that we shipped to the Brooklyn Nets and allows guests to play for actual prizes. We allow for realtime sharing of scores on Twitter and periodically enable the machine to prop open and give out prizes to winners right there and then.</p>
                      </div>
                      <img src="/static/img/work/redbull1.png" className="card__photo"></img>
                      <img src="/static/img/work/redbull2.png" className="card__photo"></img>
                      <img src="/static/img/work/redbull3.png" className="card__photo"></img>
                  </div>

                  <div className="card">
                      <div className="card__body">
                          <h4 className="card__title">More work</h4>
                          <p>Some of the other, more long-running projects that I've worked on at ISL.</p>
                          <p><a href="https://www.serviceyr.org">Service Year</a> is a non-profit that has been working with ISL for over 2 years, striving to connect young people with career opportunities in service. I've been very lucky to be a part of this team, its cause, and also has been a great learning experience in a more long-term project.</p>
                          <p><a href="https://www.fosi.org">The Family Online Safety Institue</a> first came to us for a redesign about two years ago, and I was tasked with leading the Front End development for that project. Two years later and the maintenance contract is still in my hands.</p>
                      </div>
                      <img src="/static/img/work/serviceyr.png" className="card__photo"></img>
                      <img src="/static/img/work/fosi.png" className="card__photo"></img>
                  </div>

              </div>
          </div>
      </section>
    );
  }
}

export default Work;