import React, { Component } from 'react';
import * as contentful from 'contentful';


import './Blog.css';

export default class Blog extends Component {
  state = {
    posts: []
  }

  client = contentful.createClient({
    space: '5q1jvtkyacbn',
    accessToken: 'T5wVyjs6GF9uD_HQuubqxVZAa9x4_d5JnQnKe599cjQ'
  })

  componentDidMount() {
    this.fetchPosts().then(this.setPosts);
  }

  fetchPosts = () => this.client.getEntries()


  setPosts = response => {
    console.log(response);
    this.setState({
      posts: response.items
    })
  }

  render(){
    const { posts } = this.setState;

    console.log(posts);
    return(
      <div className="container">
        <div className="box">
          <div className="top-info-box"> 
            <h4 className="title">fdgxcvbhjnk</h4>
            <p className="date">04 May 2020</p>
          </div>
          <div className="image-wrapper"> 
          <div className="x"></div>
            <img src={require("../lib/images/OGA1KV0.jpg")} alt="Blog Main Imagen"/>
          </div>
          <article className="article">
            
            { this.state.posts.map(({fields}, i) =>
        <p key={i}>{JSON.stringify(fields, null, 2)}</p>)}
          </article>
        </div>
      </div>
    )
  }
}