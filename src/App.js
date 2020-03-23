import React from 'react';
import './App.css';

import  Header from './components/header/Header';
import BloggList from './containers/blogg-list/BloggList';

function App() {
  return (
   <div>
     <Header/>
     <BloggList/>
   </div>
  );
}

export default App;
