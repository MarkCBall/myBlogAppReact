import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navBar'
import BlogContents from './components/BlogContents'
import Footer from './components/footer'


class App extends Component {




  render() {
    return (
      <div className="App">
        <NavBar />
        <BlogContents />
        <Footer />
      </div>
    );
  }
}

export default App;
