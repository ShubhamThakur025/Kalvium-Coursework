import { Component } from 'react'
import './editor.css'

export default class Editor extends Component {
    constructor(props){
        super(props)
        this.state = {
            text : "Hey Kalvian! Welcome to ProNote"
        }
    }
    changeText = (e) => {
        this.setState({
            text : e.target.value
        })
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="input">
                        <h3>Input</h3>
                        <textarea className="input-text" onChange={this.changeText} defaultValue={this.state.text}/>
                    </div>
                    <div className="output">
                        <h3>Pro Note</h3>
                        <div className="output-text">{this.state.text}</div>
                    </div>
                </div>
            </div>
        )
    }
}
