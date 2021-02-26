import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  // render multiple component from an array
  // const frinendsList =[{name:'Jodu',age:27},{name:'Kodu',age:10},{name:'Modu',age:20},{name:'Lotu',age:44},{name:'Robu',age:63}];
  const [ user, setUser ] = useState([])
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res =>res.json())
    .then(data =>setUser(data))
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* friend include parent component */}
         {/* {
          frinendsList.map(friend => <Friends name = {friend.name} age = {friend.age}></Friends> )
        }  */}
        {
          user.map(user => <Friends name = {user.name} key = {user.id}></Friends>)
        }

        {/* <Friends></Friends> */}
        {/* Ticket counter return include parent*/}
       {/* <TicketCounter></TicketCounter> */}
        
      </header>
    </div>
  );
}
//friend function start
const Friends = (props) =>{
  return (
    <div>
      <h2>Friend Name: {props.name} </h2>
      <h3>Friend Age: {props.email}</h3>
    </div>
  )
}
// //Ticket counter and Ticket Display function start
// const TicketCounter = () =>{
//   const [count , setCount] = useState(0);
//   const buttonHandler = () => setCount(count+1);
//   return (
//     <div>
//       <button onClick = {buttonHandler}>Add Ticket</button>
//       <h3>Show Ticket Number: {count} </h3>
//       <TicketDisplay ticket = {count}></TicketDisplay>
//     </div>
//   )
// }
// const TicketDisplay = (props) =>{
//   return (
//     <div>
//       <h4>Ticket Display Number: {props.ticket} </h4>
//     </div>
//   )
// }
// //Ticket counter and Ticket Display function end





export default App;
