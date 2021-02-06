import React, { Component } from 'react'
import {Dashboard} from "precise-ui"
import { CircularProgressbar,CircularProgressbarWithChildren,buildStyles } from 'react-circular-progressbar';
import MissionProgress from './mission-progress/mission-progress';
import {InteractiveList,  List, ListItem} from "precise-ui";
import MissionElements from '../project-insights/project-elements/project-elements';



export default class MissionInsight extends Component {

  state={

    missions:[],

  }

  componentDidMount=()=>{

    this.setState({missions:this.props.missions});
    

  }


    render() {

        const style = {
            height: '100%',
            width: '100%',
            background: 'white',
          };
          const tiles = [
            { id: '1', rowSpan: 1,colSpan:1},
            { id: '2', colSpan: 4,rowSpan:1}
          ];
        return (

            <div style={{overflow:"scroll"}}>
              <br/>

                {this.state.missions.map((mission)=>  
                
          [<Dashboard defaultTiles={tiles} rowHeight={150} disabled>
           
           <div style={{...style, backgroundColor:"#ccc"}}>
             <MissionProgress mission={mission} project={this.props.project}/>
             </div>
      
          <div style={style}>
          <List>
            {mission.objectives.map((objective=>
               <ListItem>{objective.description}</ListItem>
              ))}
          
           
         </List>
          </div>
 
           </Dashboard>
           ,<br/>])}
  


            </div>
        )
    }
}
