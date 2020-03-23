import React, { Component } from 'react';
import BloggCard from '../../components/blogg-card/BloggCard';

import { CardDeck } from 'reactstrap';

export default class BloggList  extends Component {
  render() {
    const cards = [
      {title:"madhur", cardText: "kjcbndjkchnedso", cardImg: "/assets/hola.png"}, 
      {title:"esmee", cardText: "kjcbndjkchnedso", cardImg: "/assets/hola.png"}, 
      {title:"esmee", cardText: "kjcbndjkchnedso", cardImg: "/assets/hola.png"}, 
      {title:"esmee", cardText: "kjcbndjkchnedso", cardImg: "/assets/hola.png"}, 
      {title:"esmee", cardText: "kjcbndjkchnedso", cardImg: "/assets/hola.png"}, 
      {title:"esmee", cardText: "kjcbndjkchnedso", cardImg: "/assets/hola.png"}, 
      {title:"iris", cardText: "kjcbndjkchnedso", cardImg: "/assets/hola.png"}];
    return (
      <div class="container">
      <CardDeck>
        {cards.map((card, index) => 
        <BloggCard
          key={index}
          cardImg={ card.cardImg}
          cardTitle={card.title}
          cardText={card.cardText}
        />
          )}
      </CardDeck>
      </div> 
    );
  }
};