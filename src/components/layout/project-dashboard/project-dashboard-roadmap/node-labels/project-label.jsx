import React, { Component } from 'react'
import ProjectDashboardRoadmap from '../project-dashboard-roadmap'

 class ProjectLabel extends Component {
    render() {
        return (
            <div>
                
                Project Name
                <button onClick={()=>alert("PRESSED")} >PRESS</button>

            </div>
        )
    }
}

export default ProjectLabel;