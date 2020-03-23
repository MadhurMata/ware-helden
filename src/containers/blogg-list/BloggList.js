import React, { Component } from 'react';
import BloggCard from '../../components/blogg-card/BloggCard';

import './BloggList.css';


export default class BloggList  extends Component {
  render() {
    const cards = [
      {title:"madhur", cardText: "kjcbndjkchnedso", cardImg: "/assets/hola.png"}, 
      {title:"WHAT IF YOUR FEARS SERVE A PURPOSE?", cardText: "Recently I felt fear in certain ways. A fear I recognize and am used to feeling sometimes, but this time it took a bit more of my positive energy away and somehow frustrated me a lot. I didn't want to feel it. I was disappointed in myself: ‘Really? Why do you always come back to me? Why can’t you just stay away? Will I ever be ‘strong’ enough to keep you out of my life? Will I ever be good enough? I mean, I’m only good enough when I’m without you right?’", cardImg: "/assets/hola.png"},
      {title:"esmee", cardText: "kjcbndjkchnedso", cardImg: "/assets/hola.png"}, 
      {title:"esmee", cardText: "kjcbndjkchnedso", cardImg: "/assets/hola.png"}, 
      {title:"esmee", cardText: "kjcbndjkchnedso", cardImg: "/assets/hola.png"}, 
      {title:"esmee", cardText: "kjcbndjkchnedso", cardImg: "/assets/hola.png"} 
    ];
    return (
      <div class="container">
        {cards.map((card, index) => 
        <BloggCard
          key={index}
          cardImg={ card.cardImg}
          cardTitle={card.title}
          cardText={card.cardText}
        />
          )}
      </div> 
    );
  }
};