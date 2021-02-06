import React, { Component } from 'react'
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import style from './project-list.css'
import {Dashboard} from "precise-ui"
import ProjectInsight from './project-insights/project-insight';
import MissionInsight from './mission-insight/mission-insight';

class Projects extends Component {


    state = {
        page: 0,
        totalPages: 0,
        data: [],
    }


    componentDidMount = () => {

        setTimeout(() => {
            axios.get("/v1/project/list/0")
            .then(res => {
                console.log(res);
                this.setState({
                    data: res.data.data,
                    totalPages: res.data.totalPages,
                })
            })
        }, 1000);
        
    }

    // {this.state.data.map(project=>
    //     <>
    //     {project.projectName}
    //     <NavLink to={"/projectDashboard/"+project.projectId} >{project.projectId}</NavLink>
    //     </>
    //     )}

//     render() {
//         return (
//             <div className="createProjectWrapper">

// {this.state.data.map(project=>
//                 <div class="container">
//                     <div class="card">
//                         <div class="box">
//                             <div class="content">
//                                 <img src="https://www.flaticon.com/svg/static/icons/svg/3867/3867686.svg" alt="target" />
//                                 <h3> {project.projectName}</h3>
//                                 <p>{project.description}</p>
//           <br/>
//                                 <br/>
//                                 <br/>
//                                 <NavLink to={"/projectDashboard/"+project.projectId}>More</NavLink>
//                             </div>
//                             <div className="content">
//                                 <br/>
//                                 <br/>
//                                 <br/>
//                                 <br/>
//                                 <br/>
//                                 <br/>
                                
//               <NavLink activeStyle={{color:"#0073b1"}} to={"/projectDashboard/"+project.projectId+"/roadmap"}><i        style={{color:"blue"}} class="fa fa-map-signs fa-2x"></i></NavLink>
//               <NavLink activeStyle={{color:"#0073b1"}} to={"/projectDashboard/"+project.projectId+"/notes"}><i        style={{color:"yellow"}} class="fa fa-clipboard fa-2x"></i> </NavLink>
//               <NavLink activeStyle={{color:"#0073b1"}} to={"/projectDashboard/"+project.projectId+"/links"}><i         style={{color:"green"}} class="fa fa-paperclip fa-2x"></i> </NavLink>
//               <NavLink activeStyle={{color:"#0073b1"}} to={"/projectDashboard/"+project.projectId+"/members"}><i      style={{color:"purple"}} class="fa fa-users fa-2x">   </i> </NavLink>
//               <NavLink activeStyle={{color:"#0073b1"}} to={"/projectDashboard/"+project.projectId+"/discussion"}><i      style={{color:"orange"}} class="fa fa-comments fa-2x">   </i> </NavLink>
//  </div >
//                         </div>
//                     </div>


//                 </div>
// )}
//             </div>
//         )
//     }


render() {
    const style = {
        height: '100%',
        width: '100%',
        background: '#ccc',
        

      };
      const tiles = [
        { id: '1', rowSpan: 2},
        { id: '2', rowSpan: 2},
        { id: '3', colSpan: 2,rowSpan:2}
      ];
    return (
        <div className="createProjectWrapper">
             {this.state.data.map(project=>
             <Dashboard defaultTiles={tiles} rowHeight={150} disabled>
  <div hidden style={style}></div>
  <div style={style}>
      <ProjectInsight project={project}/>
  </div>
  <div style={{...style,'overflow-y': 'auto'}}>
<MissionInsight missions={project.missions} project={project}/>
  </div>
 
  </Dashboard>)}
        </div>
    )
}
}

export default Projects;
