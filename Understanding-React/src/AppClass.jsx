import { Component } from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component{
  
  imageData = ()=>{
    let data = [
      {
        id:1,
        img:elephant
      },
      {
        id:2,
        img:elephant
      },
      {
        id:3,
        img:elephant
      },
      {
        id:4,
        img:elephant
      }
    ]
    return data;
  }

  render(){
    const imgData = this.imageData()
    return(
      <div>
        <h1>Kalvium Gallery</h1>
        <div className="row">
          {
            imgData.map((element) => {
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
