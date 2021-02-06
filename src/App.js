import React from 'react';
import './App.scss';
import Layout from "./components/layout/layout"
import axios from "axios"
import { BrowserRouter } from 'react-router-dom';
import AppContext from './app-context';
import './push-notification'
import Jitsi from 'react-jitsi';


class App extends React.Component{

  state={
    authenticated:false
  }

  getCookie=(value)=> {

    let cookies= document.cookie+";";

    if(cookies.indexOf(value)<0)
    return null;

   return cookies.substring(cookies.indexOf(value)+(value.length+1),cookies.indexOf(";",cookies.indexOf(value)+1));

 }

 
  componentDidMount=()=>{

     

    if(this.getCookie("jwt")!==null)
    axios.defaults.headers.common['Authorization'] = this.getCookie("jwt");

  }



  render(){

    
const roomName = 'my-super-secret-meeting-123e4567-e89b-12d3-a456-426655440000'
const userFullName = 'Joseph Strawberry'

    return (

   
      
      <BrowserRouter>
       <AppContext.Provider value={{...this.state}}>

      <div id="App" className="App">
            <Layout authenticated={this.state.authenticated}/>
      </div>
      </AppContext.Provider>
      </BrowserRouter>
    );
  }
}

export default App;


// import React, { useState } from 'react'

// import { Jutsu } from 'react-jutsu'

// const App = () => {
//   const [room, setRoom] = useState('')
//   const [name, setName] = useState('')
//   const [call, setCall] = useState(false)
//   const [password, setPassword] = useState('')

//   const handleClick = event => {
//     event.preventDefault()
//     if (room && name) setCall(true)
//   }

//   return call ? (
//     <Jutsu
//       roomName={room}
//       displayName={name}
//       password={password}
//       onMeetingEnd={() => console.log('Meeting has ended')}
//       loadingComponent={<p>loading ...</p>}
//       errorComponent={<p>Oops, something went wrong</p>} />
//   ) : (
//     <form>
//       <input id='room' type='text' placeholder='Room' value={room} onChange={(e) => setRoom(e.target.value)} />
//       <input id='name' type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
//       <input id='password' type='text' placeholder='Password (optional)' value={password} onChange={(e) => setPassword(e.target.value)} />
//       <button onClick={handleClick} type='submit'>
//         Start / Join
//       </button>
//     </form>
//   )
// }

// export default App;