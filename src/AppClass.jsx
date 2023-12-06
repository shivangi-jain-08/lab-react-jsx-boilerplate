import { Component } from "react";
import "./App.css";
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component {
  imageData = () => {
    let data = [
      {
        id: 1,
        img: elephant,
      },
      {
        id: 2,
        img: elephant,
      },
      {
        id: 3,
        img: elephant,
      },
      {
        id: 4,
        img: elephant,
      },
    ];
    return data;
  };

  // code here

  render() {
    let imageArr = this.imageData()
    return (
      <div>
        <h1>Kalvium Gallary</h1>
        <div className="parent">
          <img src={imageArr[0].img} className="image" alt="" />
          <img src={imageArr[1].img} alt="" className="image" />
          <img src={imageArr[2].img} alt="" className="image" />
          <img src={imageArr[3].img} alt="" className="image" />
        </div>
      </div>
    );
  }
}
