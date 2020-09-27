import React from 'react';
import './App.scss';
import Layout from "./components/layout/layout"
import axios from "axios"
import { BrowserRouter } from 'react-router-dom';


class App extends React.Component{

  state={
    authenticated:false
  }

  componentDidMount=()=>{
    let authorization;
    axios.interceptors.response.use(response =>{
      authorization=response.headers.authorization;
      if(authorization){
        axios.defaults.headers.common['Authorization'] = authorization;
        this.setState({authenticated:true});
      }
      return response;
    });
  }


  render(){

    return (
      
      <BrowserRouter>
      <div id="App" className="App">
            <Layout authenticated={this.state.authenticated}/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
