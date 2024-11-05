import React, { Component, PureComponent } from 'react'
import SimpleComponent from './components/SimpleComponent'
import CompPure from './components/CompPure'

export default class App extends Component {
  render() {
    return (
      <div>
        <SimpleComponent />
        <CompPure />
      </div>
    )
  }
}
