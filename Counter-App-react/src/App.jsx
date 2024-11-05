import { Component } from 'react'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
  }
  increment = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  decrement = () => {
    this.setState({
      count: this.state.count - 1
    })
  }
  reset = () => {
    this.setState({
      count: 0
    })
  }
  render() {
    return (
      <>
        <h1>Counter App</h1>
        <div id="count">{this.state.count}</div>
        <button className="btn" id="plus" onClick={this.increment}>+</button>
        <button className="btn" id="minus" onClick={this.decrement}>-</button>
        <button className="btn" id="reset" onClick={this.reset}>Reset</button>
      </>
    )
  }
}

export default App
