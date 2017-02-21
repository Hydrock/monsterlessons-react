import React, { Component } from 'react'



import '../App.css';

export default class Block extends Component {
  click() {
    console.log('click', this.blockTest)
  }

  render () {
    return (
      <div className='clickOnMe' onClick={this.click.bind(this)} ref={(div) => { this.blockTest = div; }}>click on me</div>
    )
  }
}
