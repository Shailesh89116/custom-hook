import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { usePerson } from './usePerson'
import { Person } from './data';

function App() {
   const [userList,currentPerson,previous,next]=usePerson();

  //  console.log("userlIst", userList);
   
  return (
    <div className="App">
      
      <div className="card">
        <h3>Name:</h3><h3>{currentPerson}</h3>
      </div>
      <div className="button">
        <button className="previous" onClick={previous}>Previous</button>
        <button className="next" onClick={next}>Next</button>
      </div>
      {
        userList.map(user=><li>{user}</li>)
      }
      
    </div>
  )
}

export default App
