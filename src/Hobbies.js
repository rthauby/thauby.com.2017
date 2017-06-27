import React, { Component } from 'react';

class Hobbies extends Component {
  render() {
    return (
        <section id="art">
            <div className="row aligned-center">
                <div className="small-12 columns">
                    <h3>Hobbies</h3>

                    <div className="card">
                        <div className="card__body">
                            <h4 className="card__title">Game Development</h4>
                            <p>Below is a short demo reel of my various experiments in Unity, Unreal Engine, and the colateral artwork I had to create to support it. Most of that artwork was created in blender, zbrush and modo.</p>
                        </div>
                        <div className="embed-container">
                            <video controls name="media">
                                <source src="/static/videos/reel.webm" type="video/webm" />
                            </video>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card__body">
                            <h4 className="card__title">Traditional Sculpting</h4>
                            <p>My interest in traditional sculpting started from getting introduced to Garage Kits by my father in law. Slowly I became more interested in producing my own GK than purchasing them, and eventually that has led into digital sculpting which is what I&#39;m currently trying my hand at.</p>
                        </div>
                        <img src="/static/img/art/sculpts/urban-warfare.png" className="card__photo"></img>
                        <img src="/static/img/art/sculpts/strigoi.png" className="card__photo"></img>
                        <img src="/static/img/art/sculpts/starkiller1.png" className="card__photo"></img>
                        <img src="/static/img/art/sculpts/starkiller2.png" className="card__photo"></img>
                        <img src="/static/img/art/sculpts/sam.png" className="card__photo"></img>
                        <img src="/static/img/art/sculpts/neo.png" className="card__photo"></img>
                        <img src="/static/img/art/sculpts/juggernaut.png" className="card__photo"></img>
                    </div>
                </div>
            </div>
        </section>
    );
  }
}

export default Hobbies;