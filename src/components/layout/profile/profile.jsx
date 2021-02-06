import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import classes from "./profile.css"
import {Grid,Dashboard} from "precise-ui"
import ProjectInsight from '../projects/project-insights/project-insight';
import Projects from '../projects/projects';
import axios from 'axios';
import Charts from '../charts/charts';
import ProfileInsight from './profile-insight/profile-insight';


 class Profile extends Component {

  state={
    user:undefined,
  }

    componentDidMount=()=>{
        
        if(this.getCookie("jwt")===null)
                 this.props.history.push("/");

                 this.props.imageHandler(null);
         
             
                 setTimeout(() => {
                  axios.get("/v1/user/my_profile")
                  .then(res=>{
                    this.setState({user:res.data});
                  })
               
                 }, 1000);        


    }

    getCookie=(value)=> {

        let cookies= document.cookie+";";
    
        if(cookies.indexOf(value)<0)
        return null;
    
       return cookies.substring(cookies.indexOf(value)+(value.length+1),cookies.indexOf(";",cookies.indexOf(value)+1));
    
     }
    

    render() {
        const style = {
            height: '100%',
            width: '100%',
            background: '#ccc',
          };
          const tiles = [
            { id: '1', rowSpan: 2},
            { id: '2', rowSpan: 3},
            // { id: '3', colSpan: 2},
            { id: '4', rowSpan: 3,colSpan:2 },
            { id: '4', rowSpan: 3,colSpan:1 },
          ];
        return (
            <div className="createProjectWrapper">
               <Dashboard defaultTiles={tiles} rowHeight={150} disabled>
  <div hidden style={style}>First</div>
  <div style={style}>

    {this.state.user?<ProfileInsight user={this.state.user}/>:null}
  </div>
  {/* <div style={style}>Third</div> */}
  <div style={{...style,overflow:"scroll"}}>
    <Charts rowHeight={100} colWidth={100}/>
  </div>
  <div hidden style={style}>Third</div>
</Dashboard>

<Projects/>
	
            </div>
        )
    }
}


export default withRouter(Profile);