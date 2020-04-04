import React from 'react';

import { Component } from "react";

import './Header.css';

export default class Header extends Component {

  render(){
    return(
      <div className="header-container">
        <div className="top-header">
          <h1 className="title">Ware Helden</h1>
        </div>
        <nav>
          <ul className="nav-list">
            <li><a href="/#">About</a></li>
            <li><a href="/#">Bloggs</a></li>
            <li><a href="/#">Contact</a></li>
          </ul>
          <hr/>
        </nav>
      </div>
    );
  };
};

