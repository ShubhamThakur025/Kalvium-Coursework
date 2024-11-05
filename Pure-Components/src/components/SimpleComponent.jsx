import React, { Component } from 'react'

export default class SimpleComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            toggle: true
        }
    }

    handleInc = () => {
        if (this.state.toggle) {
            this.setState({
                count: this.state.count + 1
            })
        }
        else{
            this.setState({
                count: this.state.count
            })
        }
    }

    toggle = () => {
        this.setState({
            toggle: !this.state.toggle
        })
    }

    render() {
        { console.log("This is simple Component") }

        return (
            <div>
                <h1>Simple Component</h1>
                <div>Count: {this.state.count}</div>
                <button onClick={this.handleInc}>Increment</button>
                <button onClick={this.toggle}>Toggle</button>
            </div>
        )
    }
}
