import React, { Component } from 'react'
import ProjectDashboardRoadmap from '../project-dashboard-roadmap'
import Modal from "../../../../../UI/modal"
import { NavLink } from 'react-router-dom'
import { CircularProgressbar,CircularProgressbarWithChildren,buildStyles } from 'react-circular-progressbar';


 class ProjectLabel extends Component {


    state={
        progressStyle:{
                 
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
    }

    render() {

        console.log(this.props)
        
        return (

           
            <div>
                
             
                 <CircularProgressbarWithChildren styles={buildStyles({...this.state.progressStyle})}
                                       value={70} >

                 Project 
                <button onClick={()=>this.props.modalHandler("PROJECT",this.props)} >PRESS</button>
                 
                 <NavLink  to={"/projectDashboard/"+this.props.projectId}>-></NavLink>

                 </CircularProgressbarWithChildren>

            </div>
          
        )
    }
}

export default ProjectLabel;
