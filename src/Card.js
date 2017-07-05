import React from 'react';
import ReactSafeHtml from 'react-safe-html';

function ImageList(props) {
  let list = null;

  if(props.images.length){
    list = (<div>
    {props.images.map((image, index) => {
      return (
        <img key={index} src={image} alt={index}/>
      )
    })}
    </div>)
  }

  return (
    <div>
      {list}
    </div>
  )
}

function Card(props) {

  if(props.cardValue)

    return (
      <div className="card">
          <div className="card__body">
              <h4 className="card__title">{props.cardValue.title}</h4>
              <ReactSafeHtml html={props.cardValue.body} />
          </div>
          <ImageList images={props.cardValue.images} />
      </div>
    );

  else
    return (
      <div></div>
    );
}

export default Card;