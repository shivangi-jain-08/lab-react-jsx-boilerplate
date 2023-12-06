import './App.css';
import elephant from "./images/elephant.jpeg";

const imageData = ()=>{
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

function App() {
  // code here

  let imageArr = imageData();

  return(
    <div>
      <h1>Kalvium Gallary</h1>
      <div className='parent'>
        <img src={imageArr[0].img} className='image' alt="" />
        <img src={imageArr[1].img} alt="" className='image' />
        <img src={imageArr[2].img} alt="" className='image' />
        <img src={imageArr[3].img} alt="" className='image' />
      </div>
    </div>
  )
}

export default App;
