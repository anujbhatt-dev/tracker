import React, {Component} from "react"
import {NavLink, withRouter} from "react-router-dom"


  class ProjectDashboardNav extends Component{

    render(){


     console.log(this.props)

      return (
          <div className="projectDashboardNav">
              <NavLink activeStyle={{color:"#0073b1"}} to={"/projectDashboard/"+this.props.projectId+"/roadmap"}><i      style={{color:"blue",height:"15px",width:"35px"}} class="fa fa-map-signs fa-2x"></i></NavLink>
              <NavLink activeStyle={{color:"#0073b1"}} to={"/projectDashboard/"+this.props.projectId+"/notes"}><i      style={{color:"yellow",height:"15px",width:"35px"}} class="fa fa-clipboard fa-2x"></i> </NavLink>
              <NavLink activeStyle={{color:"#0073b1"}} to={"/projectDashboard/"+this.props.projectId+"/links"}><i       style={{color:"green",height:"15px",width:"35px"}} class="fa fa-paperclip fa-2x"></i> </NavLink>
              <NavLink activeStyle={{color:"#0073b1"}} to={"/projectDashboard/"+this.props.projectId+"/members"}><i      style={{color:"purple",height:"15px",width:"35px"}} class="fa fa-users fa-2x"></i> </NavLink>
          </div >
      )
    }
  }

export default withRouter(ProjectDashboardNav);
