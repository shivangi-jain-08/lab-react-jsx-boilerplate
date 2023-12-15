import React from 'react';
import './App.css';
import elephant from './images/elephant.jpeg';

const ImageGallery = ({ imageData }) => {
  return (
    <div className="parent">
      {imageData.map((item) => (
        <img key={item.id} src={item.img} alt="" className="image" />
      ))}
    </div>
  );
};

const App = () => {
  const imageData = [
    { id: 1, img: elephant },
    { id: 2, img: elephant },
    { id: 3, img: elephant },
    { id: 4, img: elephant },
  ];

  return (
    <div>
      <h1>Kalvium Gallery</h1>
      <ImageGallery imageData={imageData} />
    </div>
  );
};

export default App;
