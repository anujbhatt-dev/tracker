import React from 'react';
import './App.scss';
import Layout from "./components/layout/layout"
import axios from "axios"
import { BrowserRouter } from 'react-router-dom';
import AppContext from './app-context';


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
    // alert("mount");
    // let authorization;
    // axios.interceptors.response.use(response =>{
    //   authorization=response.headers.authorization;
    //   if(authorization){
    //     axios.defaults.headers.common['Authorization'] = authorization;
    //     let headers=response.headers;
    //     // console.log(headers)
    //     this.setState({authenticated:true, email:headers.email, name:headers.name, imageUrl:headers.imageurl, thumbnailUrl:headers.thumbnailurl, objectivesCompleted:+headers.objectivescompleted , totalObjectives:+headers.totalobjectives});
    //   }
    //   return response;
    // });


    if(this.getCookie("jwt")!==null)
    axios.defaults.headers.common['Authorization'] = this.getCookie("jwt");

  }



  render(){

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
