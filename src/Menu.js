import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Menu extends Component {
  render () {
    return (
      <div>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
      </div>
    )
  }
}
