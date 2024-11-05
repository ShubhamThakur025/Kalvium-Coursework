import React, { Component } from 'react'

export default class HomeComponent extends Component {
  render() {
    return (
      <div className='home'>
        <h2 className="title">Quiz App</h2>
        <button id="play-btn">Play</button>
      </div>
    )
  }
}
