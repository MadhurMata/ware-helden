import React, { Component } from 'react';

import {
  Card, Button, CardImg, CardTitle, CardText,
  CardSubtitle, CardBody
} from 'reactstrap';

export default class BloggCard  extends Component {

  render() {
    const { cardImg, cardText, cardTitle } = this.props; 
    return ( 
      <Card>
          <CardImg top width="100%" src={cardImg} alt="Card image cap" />
          <CardBody>
            <CardTitle>{cardTitle}</CardTitle>
            <CardText>{cardText}</CardText>
          </CardBody>
        </Card>
     );
  };

};