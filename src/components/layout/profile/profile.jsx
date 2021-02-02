import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import classes from "./profile.css"
import {Grid,Dashboard} from "precise-ui"

 class Profile extends Component {

    componentDidMount=()=>{
        
        if(this.getCookie("jwt")===null)
                 this.props.history.push("/");

                 this.props.imageHandler(null);

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
            { id: '3', colSpan: 2},
            { id: '4', rowSpan: 2,colSpan:2 },
            { id: '4', rowSpan: 3,colSpan:1 },
          ];
        return (
            <div className="createProjectWrapper">
               <Dashboard defaultTiles={tiles} rowHeight={150} disabled>
  <div hidden style={style}>First</div>
  <div style={style}>Second</div>
  <div style={style}>Third</div>
  <div style={style}>Third</div>
  <div hidden style={style}>Third</div>
</Dashboard>
	
            </div>
        )
    }
}


export default withRouter(Profile);