import React, { Component } from 'react';
import RegistrationForm from './RegistrationForm';

import Block from './block';
import Menu from './Menu';
import Func from './Func';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Menu/>
        <Func/>
        <RegistrationForm/>
        <Block/>
      </div>
    )
  }
}

export default App;
