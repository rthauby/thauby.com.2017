import React, { Component } from 'react';
import Card from './Card'
import CardList from './CardList';
import CardSection from './CardSection'
import CardData from './data/hobbies.json';

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
      <CardSection idName="hobbies" title="Hobbies" cards={this.state.cards} />
    );
  }
}

export default Work;