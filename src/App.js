import React, { Component } from 'react';
import RegistrationForm from './RegistrationForm';

import Block from './block';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <RegistrationForm/>
        <Block/>
      </div>
    )
  }
}

export default App;
