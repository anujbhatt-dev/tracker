import React, { Component } from 'react'
import {InteractiveList,  List, ListItem, Dashboard} from "precise-ui";
export default class ProjectElements extends Component {



    render() {

        const style = {
            height: '100%',
            width: '100%',
            background: '#ccc',
          };
          const tiles = [
            // { id: '0',colSpan:1,rowSpan:5,},  
            // { id: '1',colSpan:3,rowSpan:1,},
            { id: '2',colSpan:3,rowSpan:1,},
            { id: '3',colSpan:3,rowSpan:1,},
            { id: '4',colSpan:3,rowSpan:1},
            { id: '5',colSpan:3,rowSpan:1},
          ];

        return (

            <Dashboard defaultTiles={tiles} rowHeight={20} disabled>
                {/* <div ></div> */}
              
      <div style={style}><i style={{color:"yellow"}} class="fa fa-clipboard fa-2x"></i></div>
      <div style={style}><i style={{color:"green"}} class="fa fa-paperclip fa-2x"></i></div>
      <div style={style}><i style={{color:"purple"}} class="fa fa-users fa-2x"> </i></div>
      <div style={style}><i style={{color:"orange"}} class="fa fa-comments fa-2x"> </i></div>

            </Dashboard>

             
           
        )
    }
}
