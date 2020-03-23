import React, { Component } from 'react';

import './BloggCard.css';

export default class BloggCard  extends Component {

  render() {
    const { cardImg, cardText, cardTitle } = this.props; 
    return ( 
      <div id="card">
        <div id="img">
          <img src={cardImg} alt="Card image"/>
        </div>
        <div id="title">
          {cardTitle}
        </div>
        <div id="text">
          {cardText}
        </div>
        <div id="link">
          <a href="/#">Read more...</a>
        </div>
      </div>
     );
  };

};