import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Buttons from './components/Buttons';

function App() {
  //const [count, setCount]= useState(0)
  const [count, setCount]= useState(0);

  const sub = () =>{
      setCount(count -1);
  };
  const add = () =>{
      setCount(count +1);
  };
  const reset = () =>{
      setCount(0);
  }
  return (
   /* <div className="container my-5">
      <div className="card text-center my-5">
<div className='card-body'>
  <h1> Counter App</h1>
  <div className='my-5'>
  <h2 className='my-5'> {count}</h2>
  <button className='btn btn success mx 3' onClick={()=> setCount(count + 1)}>Incremennt</button>
  <button className='btn btn danger mx 3' onClick={()=> setCount(count - 1)} >Decremennt</button>
  <button className='btn btn secondary mx 3' onClick={()=> setCount(0)} >Reset</button>
    </div>
</div>

      </div>

    </div>*/
    <>
    <h1> Count: {count}</h1>
    <Buttons sub1={sub} add1={add} reset={reset}/>
    </>

  );
}

export default App;