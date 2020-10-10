import React, { Component } from 'react'
import ProjectDashboardRoadmap from '../project-dashboard-roadmap'
import Modal from "../../../../../UI/modal"


 class ProjectLabel extends Component {


    render() {

        
        return (

           
            <div>
                
                Project 
                <button onClick={()=>this.props.modalHandler("PROJECT",this.props.data)} >PRESS</button>

            </div>
          
        )
    }
}

export default ProjectLabel;
