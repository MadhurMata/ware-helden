import React from 'react';

import { Component } from "react";
import { render } from "@testing-library/react";

import './Header.css'

export default class Header extends Component {

  render(){
    return(
      <div>
      <div class="container">
        <h1 class="title">Ware Helden</h1>
      </div>
      <ul class="nav">
        <li>About</li>
        <li>Bloggs</li>
        <li>Contact</li>
      </ul>  
      </div>
    );
  };
};

