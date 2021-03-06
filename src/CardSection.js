import React from 'react';
import CardList from './CardList'

function CardSection(props){
    return(
          <section id={props.idName}>
              <div className="row aligned-center">
                  <div className="small-12 columns">
                      <h3 className="cardHeading">{props.title}</h3>
                      <CardList cards={props.cards} />
                  </div>
              </div>
          </section>
    )
}

export default CardSection;