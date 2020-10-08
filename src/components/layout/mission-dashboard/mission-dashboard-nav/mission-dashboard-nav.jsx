import React, {Component} from "react"
import {NavLink, withRouter} from "react-router-dom"


  class MissionDashboardNav extends Component{

    render(){


     console.log(this.props) 

      return (
          <div className="projectDashboardNav">
              <NavLink activeStyle={{color:"orangered"}} to={"/projectDashboard/"+this.props.projectId+"/mission/"+this.props.missionId+"/objective"}>objective </NavLink>
              <NavLink activeStyle={{color:"orangered"}} to={"/projectDashboard/"+this.props.projectId+"/mission/"+this.props.missionId+"/notes"}>notes </NavLink>
              <NavLink activeStyle={{color:"orangered"}} to={"/projectDashboard/"+this.props.projectId+"/mission/"+this.props.missionId+"/links"}>links </NavLink>
              <NavLink activeStyle={{color:"orangered"}} to={"/projectDashboard/"+this.props.projectId+"/mission/"+this.props.missionId+"/members"}>members </NavLink>
          </div >
      )
    }
  }

export default withRouter(MissionDashboardNav);
