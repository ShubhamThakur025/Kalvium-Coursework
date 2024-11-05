import { Component } from "react";
import "./App.css"

export default class AppClass extends Component{
  render(){
    return(
      <div>
        <h1>Kalvium Gallery</h1>
        <div className="row">
          {
            this.props.Data.map((element) => {
              return(
              <div className="column" key = {element.id}>
                <img src={element.img} alt="" />
              </div>
              )})
          }
        </div>
      </div>
    )
  }
}
