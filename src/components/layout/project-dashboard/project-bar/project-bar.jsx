import React, { Component } from 'react'
import axios from 'axios'


 class ProjectBar extends Component {


    componentDidMount=()=>{
        axios.get("")
    }


    render() {
        return (
            <div>
                Project Bar
            </div>
        )
    }
}


export default ProjectBar