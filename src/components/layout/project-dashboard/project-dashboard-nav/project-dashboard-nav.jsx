import React, {Component} from "react"
import {NavLink, withRouter} from "react-router-dom"


  class ProjectDashboardNav extends Component{

    render(){


     console.log(this.props) 

      return (
          <div className="projectDashboardNav">
              <NavLink activeStyle={{color:"orangered"}} to={"/projectDashboard/"+this.props.projectId+"/roadmap"}>roadmap </NavLink>
              <NavLink activeStyle={{color:"orangered"}} to={"/projectDashboard/"+this.props.projectId+"/notes"}>notes </NavLink>
              <NavLink activeStyle={{color:"orangered"}} to={"/projectDashboard/"+this.props.projectId+"/links"}>links </NavLink>
              <NavLink activeStyle={{color:"orangered"}} to={"/projectDashboard/"+this.props.projectId+"/members"}>members </NavLink>
          </div >
      )
    }
  }

export default withRouter(ProjectDashboardNav);
