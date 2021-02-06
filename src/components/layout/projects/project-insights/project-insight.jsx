import React, { Component } from 'react'
import {Dashboard} from "precise-ui"
import { CircularProgressbar,CircularProgressbarWithChildren,buildStyles } from 'react-circular-progressbar';
import ProjectElements from './project-elements/project-elements';


export default class ProjectInsight extends Component {

    progressStyle={
                 
        rotation: 0.25,
             strokeLinecap: 'butt',
             textSize: '16px',
           pathTransitionDuration: 0.5,
           pathColor: `rgba(62, 152, 199, 70)`,
            textColor: '#f88',
            trailColor: '#d6d6d6',
            backgroundColor: 'white',
            trail: {
                // Trail color
                stroke: 'white',
                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                strokeLinecap: 'butt',
                // Rotate the trail
                transform: 'rotate(0.25turn)',
                transformOrigin: 'center center',
              },
    }

    render() {

        const style = {
            height: '100%',
            width: '100%',
            background: '#ccc',
    
          };
          const tiles = [
            // { id: '0',colSpan:5,rowSpan:1,},
            { id: '1',colSpan:1,rowSpan:2,},  
            { id: '2',colSpan:2,rowSpan:1,},
            {id:'3',colSpan:3,rowSpan:1},
          ];


        return (
            <div>
                {/* <br/> */}
             <Dashboard defaultTiles={tiles} rowHeight={150} disabled>
             {/* <div style={style}></div> */}
               <div style={style}></div>
               <div style={style}> 
               <CircularProgressbar  
                   styles={buildStyles({...this.progressStyle,pathColor:this.props.project.projectInsight.completedObjectiveCount/this.props.project.projectInsight.objectiveCount*100<30?'red':this.props.project.projectInsight.completedObjectiveCount/this.props.project.projectInsight.objectiveCount*100<70?'yellow':'green'})}
                   value={this.props.project.projectInsight.completedObjectiveCount/this.props.project.projectInsight.objectiveCount*100} 
                  />
                  </div>
                  <div  style={style}>
                  <ProjectElements project={this.props.project}/>
                  </div>

                </Dashboard>

            </div>
        )
    }
}
