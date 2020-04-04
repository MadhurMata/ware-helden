import React, { Component } from 'react';

import './Blog.css';

export default class Blog extends Component {
  render(){
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
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in iaculis felis, a blandit lacus. Aliquam eget erat leo. Sed tempor ex sit amet velit posuere porttitor. In aliquam lacus nec purus eleifend, in pretium erat commodo. Nulla at dolor ultricies, posuere augue sed, consectetur purus. Integer tortor tortor, condimentum ut bibendum ac, eleifend ac orci. Nunc pretium enim at sagittis eleifend.

Vestibulum lorem nulla, eleifend sit amet nulla id, sodales tempus eros. Donec fringilla euismod sapien, ut ultricies diam sollicitudin nec. Proin bibendum, diam quis accumsan finibus, tellus nisl eleifend turpis, eu egestas neque dui at tortor. Nunc sodales quam ut erat placerat ullamcorper. Suspendisse sed dui sodales, pulvinar diam sed, cursus sapien. Integer ultrices urna mauris, ut congue est sagittis ac. Nullam egestas sapien vel lacus tempor, eu egestas nisi interdum. Sed vitae nisi ut enim aliquam pulvinar ac eu ante. Fusce finibus vitae velit ut blandit. Maecenas sollicitudin tincidunt sem, eget sagittis velit mollis sit amet. Cras scelerisque volutpat pharetra. Ut gravida ipsum augue, id consequat metus convallis sit amet. Nulla sit amet nisi in metus vulputate commodo finibus aliquam tellus. Mauris ex ante, dictum eu dictum in, tristique id orci. Morbi commodo ante sit amet vestibulum placerat. Interdum et malesuada fames ac ante ipsum primis in faucibus.

Nullam ligula sem, sagittis in turpis nec, placerat maximus lorem. Donec non auctor sapien. Donec venenatis, augue sed iaculis fringilla, augue nisi maximus ipsum, vitae tempor libero lectus auctor eros. Proin pretium elementum egestas. Pellentesque vel convallis magna. Praesent elementum tellus in enim lacinia, in finibus lectus mattis. Vestibulum eget magna vitae turpis venenatis tincidunt. Mauris fermentum sem massa, eget tempus ipsum facilisis eu. Aliquam vulputate dolor eget enim malesuada volutpat. Nunc velit nisl, porta sit amet tellus a, maximus volutpat justo. Nullam pulvinar tempus felis, at aliquam metus suscipit ac.

Vestibulum vitae sapien eu nisl porttitor suscipit. Vestibulum a feugiat purus, vitae posuere lacus. Phasellus a mauris felis. Quisque tristique tincidunt turpis, sit amet fermentum ex finibus id. Phasellus neque enim, condimentum vitae tortor at, fermentum eleifend metus. Etiam in tincidunt eros. Pellentesque in massa risus. In mollis mauris quis egestas efficitur. Phasellus fringilla pharetra orci, eu pretium arcu luctus in. Proin semper vitae quam eu ultricies. Nulla eget pretium justo.

Ut enim sem, placerat sit amet elementum eleifend, vestibulum eu libero. Donec hendrerit auctor egestas. Vivamus mattis, tellus quis lobortis ornare, dolor diam iaculis leo, et tempus metus felis eget eros. Aenean at semper nulla. Mauris est ipsum, vulputate quis tempor nec, consectetur quis risus. Fusce pellentesque, orci ut ultricies rhoncus, sem felis pellentesque urna, posuere egestas metus augue eget neque. In risus mauris, tempor sit amet sapien ac, porta vulputate leo. Curabitur consectetur sodales sapien at dapibus. Donec turpis tortor, dapibus non gravida ac, hendrerit quis metus. Sed non ullamcorper nisl, rutrum accumsan lectus. Duis neque velit, egestas quis eleifend sit amet, efficitur non quam. Ut in facilisis massa. In tincidunt magna et urna lobortis, quis porta ipsum sollicitudin. Nulla ultricies eget ipsum tincidunt accumsan.


            </p>
          </article>
        </div>
      </div>
    )
  }
}