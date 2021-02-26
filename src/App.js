import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <TicketCounter></TicketCounter>
        
      </header>
    </div>
  );
}
const TicketCounter = () =>{
  const [count , setCount] = useState(0);
  const buttonHandler = () => setCount(count+1);
  return (
    <div>
      <button onClick = {buttonHandler}>Add Ticket</button>
      <h3>Show Ticket Number: {count} </h3>
      <TicketDisplay ticket = {count}></TicketDisplay>
    </div>
  )
}
const TicketDisplay = (props) =>{
  return (
    <div>
      <h4>Ticket Display Number: {props.ticket} </h4>
    </div>
  )
}




export default App;
