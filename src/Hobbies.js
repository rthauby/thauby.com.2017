import React, { Component } from 'react';
import Card from './Card'
import CardList from './CardList'
import CardData from './data/work.json';

class Work extends Component {

  constructor(props) {
    super(props);

    this.state = {
      cards : []
    }
  }

  componentDidMount() {
    this.setState({cards : CardData});
  }

  render() {
    return (
      <section id="work">
          <div className="row aligned-center">
              <div className="small-12 columns">
                  <h3>Hobbies</h3>
                  <CardList cards={this.state.cards} />
              </div>
          </div>
      </section>
    );
  }
}

export default Work;