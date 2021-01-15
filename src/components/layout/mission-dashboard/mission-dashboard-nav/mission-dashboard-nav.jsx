import React, {Component} from "react"
import {NavLink, withRouter} from "react-router-dom"


  class MissionDashboardNav extends Component{

    render(){
      return (
          <div className="projectDashboardNav">
               <NavLink activeStyle={{color:"#0073b1"}} to={"/projectDashboard/"+this.props.projectId+"/roadmap"}><i style={{color:"blue"}} class="fa fa-map-signs fa-2x"></i></NavLink>
              <NavLink activeStyle={{color:"orangered"}} to={"/projectDashboard/"+this.props.projectId+"/mission/"+this.props.missionId+"/objective"}><i style={{color:"red" }} class="fa fa-bullseye fa-2x"/> </NavLink>
              <NavLink activeStyle={{color:"orangered"}} to={"/projectDashboard/"+this.props.projectId+"/mission/"+this.props.missionId+"/notes"}>  <i style={{color:"yellow" }} class="fa fa-clipboard fa-2x"/> </NavLink>
              <NavLink activeStyle={{color:"orangered"}} to={"/projectDashboard/"+this.props.projectId+"/mission/"+this.props.missionId+"/links"}>  <i style={{color:"green"}}   class="fa fa-paperclip fa-2x"/> </NavLink>
              <NavLink activeStyle={{color:"orangered"}} to={"/projectDashboard/"+this.props.projectId+"/mission/"+this.props.missionId+"/members"}><i  style={{color:"purple"}} class="fa fa-users fa-2x"/>   </NavLink>
              <NavLink activeStyle={{color:"orangered"}} to={"/projectDashboard/"+this.props.projectId+"/mission/"+this.props.missionId+"/discussion"}><i  style={{color:"orange "}} class="fa fa-comments fa-2x"/>   </NavLink>
              
 </div >
      )
    }
  }

export default withRouter(MissionDashboardNav);
