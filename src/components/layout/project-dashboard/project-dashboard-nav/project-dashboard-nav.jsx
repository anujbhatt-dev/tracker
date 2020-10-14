import React, {Component} from "react"
import {NavLink, withRouter} from "react-router-dom"


  class ProjectDashboardNav extends Component{

    render(){

      return (
          <div className="projectDashboardNav">
              <NavLink activeStyle={{color:"#0073b1"}} to={"/projectDashboard/"+this.props.projectId+"/roadmap"}><i        style={{color:"blue"}} class="fa fa-map-signs fa-2x"></i></NavLink>
              <NavLink activeStyle={{color:"#0073b1"}} to={"/projectDashboard/"+this.props.projectId+"/notes"}><i        style={{color:"yellow"}} class="fa fa-clipboard fa-2x"></i> </NavLink>
              <NavLink activeStyle={{color:"#0073b1"}} to={"/projectDashboard/"+this.props.projectId+"/links"}><i         style={{color:"green"}} class="fa fa-paperclip fa-2x"></i> </NavLink>
              <NavLink activeStyle={{color:"#0073b1"}} to={"/projectDashboard/"+this.props.projectId+"/members"}><i      style={{color:"purple"}} class="fa fa-users fa-2x">   </i> </NavLink>
          </div >
      )
    }
  }

export default withRouter(ProjectDashboardNav);
