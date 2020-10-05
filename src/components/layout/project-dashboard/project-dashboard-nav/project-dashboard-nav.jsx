import React, {Component} from "react"
import {NavLink} from "react-router-dom"

  class ProjectDashboardNav extends Component{

    render(){

      return (
          <div className="projectDashboardNav">
              <NavLink activeStyle={{color:"orangered"}} to="/projectDashboard/notes">notes </NavLink>
              <NavLink activeStyle={{color:"orangered"}} to="/projectDashboard/links">links </NavLink>
              <NavLink activeStyle={{color:"orangered"}} to="/projectDashboard/roadmap">roadmap </NavLink>
              <NavLink activeStyle={{color:"orangered"}} to="/projectDashboard/members">members </NavLink>
          </div >
      )
    }
  }


 export default ProjectDashboardNav;
