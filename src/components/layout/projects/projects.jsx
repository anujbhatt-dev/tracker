import React, { Component } from 'react'
import axios from 'axios';
import { NavLink } from 'react-router-dom';


 class Projects extends Component {


    state={
        page:0,
        totalPages:0,
        data:[],
    }


    componentDidMount=()=>{
        axios.get("/v1/project/list/0")
        .then(res=>{
            console.log(res);
            this.setState({
                data:res.data.data,
                totalPages:res.data.totalPages,
            })
        })
    }



    render() {
        return (
            <div>
                {this.state.data.map(project=>
                    <>
                    {project.projectName}
                    <NavLink to={"/projectDashboard/"+project.projectId} >{project.projectId}</NavLink>
                    </>
                    )}
            </div>
        )
    }
}

export default Projects;
