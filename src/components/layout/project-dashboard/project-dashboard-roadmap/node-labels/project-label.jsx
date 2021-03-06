import React, { Component } from 'react'
import ProjectDashboardRoadmap from '../project-dashboard-roadmap'
import Modal from "../../../../../UI/modal"
import { NavLink } from 'react-router-dom'
import { CircularProgressbar,CircularProgressbarWithChildren,buildStyles } from 'react-circular-progressbar';


 class ProjectLabel extends Component {


    state={
    }

    render() {

        let   progressStyle={
                 
            rotation: 0.25,
                 strokeLinecap: 'butt',
                 textSize: '16px',
               pathTransitionDuration: 0.5,
               pathColor: `rgba(62, 152, 199, 70)`,
                textColor: '#f88',
                trailColor: '#d6d6d6',
                backgroundColor: '#3e98c7',
                trail: {
                    // Trail color
                    stroke: '#d6d6d6',
                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: 'butt',
                    // Rotate the trail
                    transform: 'rotate(0.25turn)',
                    transformOrigin: 'center center',
                  },
        }



        let progressValue=2;


      if(this.props.projectInsight==null){

      }else{
            
        progressValue=70;
      }

      if(progressValue<=40)
      progressStyle.pathColor='red'
      else if(progressValue<=70)
      progressStyle.pathColor='yellow'

      console.log("----- "+JSON.stringify(this.props))

        
        return (


           
            <div>
                
             
                 <CircularProgressbarWithChildren
                styles={buildStyles({...progressStyle,pathColor:this.props.projectInsight.completedObjectiveCount/this.props.projectInsight.objectiveCount*100<30?'red':this.props.projectInsight.completedObjectiveCount/this.props.projectInsight.objectiveCount*100<70?'yellow':'green'})}
                value={this.props.projectInsight.completedObjectiveCount/this.props.projectInsight.objectiveCount*100} >
  
                 <span>{progressValue}%</span> 
                 <i onClick={()=>this.props.modalHandler("PROJECT",{...this.props})} class="fa fa-chevron-right fa-3x"></i>
                 
                 <NavLink  to={"/projectDashboard/"+this.props.projectId}>-></NavLink>
                
                  

                 </CircularProgressbarWithChildren>

            </div>
          
        )
    }
}

export default ProjectLabel;
