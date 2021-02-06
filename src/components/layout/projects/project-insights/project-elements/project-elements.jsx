import React, { Component } from 'react'
import {InteractiveList,  List, ListItem, Dashboard} from "precise-ui";
import { Link } from 'react-router-dom';

export default class ProjectElements extends Component {


    render() {

        const style = {
            height: '100%',
            width: '100%',
            background: '#ccc',
          };
          const tiles = [
            { id: '0',colSpan:4,rowSpan:1,},  
            { id: '1',colSpan:2,rowSpan:1,},
            { id: '2',colSpan:2,rowSpan:1,},
            { id: '3',colSpan:2,rowSpan:1,},
            { id: '4',colSpan:2,rowSpan:1},
            { id: '5',colSpan:2,rowSpan:1},
            { id: '6',colSpan:2,rowSpan:1,},
            { id: '7',colSpan:2,rowSpan:1,},
            { id: '8',colSpan:2,rowSpan:1,},
            
          ];
          // console.log(this.props);

        return (

            <Dashboard defaultTiles={tiles} rowHeight={20} disabled>
                <div><Link to={"/projectDashboard/"+this.props.project.projectId}>{this.props.project.projectName}</Link></div>
              
      <div style={style}><i style={{color:"yellow"}} class="fa fa-clipboard fa-2x"></i></div>
      <div style={style}>123</div>
      <div style={style}><i style={{color:"green"}} class="fa fa-paperclip fa-2x"></i></div>
      <div style={style}>123</div>
      <div style={style}><i style={{color:"purple"}} class="fa fa-users fa-2x"> </i></div>
      <div style={style}>123</div>
      <div style={style}><i style={{color:"orange"}} class="fa fa-comments fa-2x"> </i></div>
      <div style={style}>123</div>

            </Dashboard>

             
           
        )
    }
}
