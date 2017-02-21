import React, { Component } from 'react';
import RegistrationForm from './RegistrationForm';

import Block from './block';
import Menu from './Menu';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Menu/>
        <RegistrationForm/>
        <Block/>
      </div>
    )
  }
}

export default App;
