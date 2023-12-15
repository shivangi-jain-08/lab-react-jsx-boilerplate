import React, { Component } from 'react';
import './App.css';
import elephant from './images/elephant.jpeg';

class ImageGallery extends Component {
  render() {
    const { imageData } = this.props;

    return (
      <div className="parent">
        {imageData.map((item) => (
          <img key={item.id} src={item.img} alt="" className="image" />
        ))}
      </div>
    );
  }
}

export default class AppClass extends Component {
  imageData = () => {
    return [
      { id: 1, img: elephant },
      { id: 2, img: elephant },
      { id: 3, img: elephant },
      { id: 4, img: elephant },
    ];
  };

  render() {
    const imageArr = this.imageData();

    return (
      <div>
        <h1>Kalvium Gallery</h1>
        <ImageGallery imageData={imageArr} />
      </div>
    );
  }
}