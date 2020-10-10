import React, { Component } from 'react'
import ProjectDashboardRoadmap from '../project-dashboard-roadmap'
import Modal from "../../../../../UI/modal"
import { NavLink } from 'react-router-dom'


 class ProjectLabel extends Component {


    

    render() {

        console.log(this.props)
        
        return (

           
            <div>
                
                Project 
                <button onClick={()=>this.props.modalHandler("PROJECT",this.props)} >PRESS</button>
                 
                 <NavLink  to={"/projectDashboard/"+this.props.projectId}>-></NavLink>

            </div>
          
        )
    }
}

export default ProjectLabel;
