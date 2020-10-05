import React, {Component} from "react"
import {Switch , Route ,withRouter} from "react-router-dom"
import ProjectDashboardNav from "./project-dashboard-nav/project-dashboard-nav"
import ProjectDashboardNotes from "./project-dashboard-notes/project-dashboard-notes"
import ProjectDashboardLinks from "./project-dashboard-links/project-dashboard-links"
import ProjectDashboardRoadmap from "./project-dashboard-roadmap/project-dashboard-roadmap"
import ProjectDashboardMembers from "./project-dashboard-members/project-dashboard-members"

class ProjectDashboard extends Component{

    state={
      aside:"activities"
    }

    asideHandler=(aside)=>{
      this.setState({
        aside:aside
      })
    }

    render(){
      // <Switch>
      //     <Route exact path="/projectDashboard/notes"><ProjectDashboardNotes/></Route>
      // </Switch>
      let route = null
      const split = this.props.history.location.pathname.split("/projectDashboard/")
      console.log(split[1]);
      switch (split[1]) {
        case "links":
          route =   <ProjectDashboardLinks/>
          break;
        case "notes":
          route =   <ProjectDashboardNotes/>
          break;
        case "members":
          route =   <ProjectDashboardMembers/>
          break;
        default:
          route =   <ProjectDashboardRoadmap/>
          break;

      }

      return (
           <div className="projectDashboard">
                 <div className="projectDashboard__col1">
                      <ProjectDashboardNav/>
                      {route}
                 </div>
                 <div className="projectDashboard__col2">
                      <div className="projectDashboard__col2_toggler">
                          <div style={this.state.aside==="activities"?{color:"orangered"}:{color:"white"}} onClick={()=>this.asideHandler("activities")}>Activities</div>
                          <div style={this.state.aside==="members"?{color:"orangered"}:{color:"white"}} onClick={()=>this.asideHandler("members")}>Members</div>
                      </div>
                      {this.state.aside==="activities"?
                      <div className="projectDashboard__col2_activities">
                            <div  className="projectDashboard__col2_activities--divodd">sagar chutiye!!</div>
                            <div  className="projectDashboard__col2_activities--diveven">sagar chutiye!!</div>
                            <div  className="projectDashboard__col2_activities--divodd">sagar chutiye!!</div>
                            <div  className="projectDashboard__col2_activities--diveven">sagar chutiye!!</div>
                            <div  className="projectDashboard__col2_activities--divodd">sagar chutiye!!</div>
                            <div  className="projectDashboard__col2_activities--diveven">sagar chutiye!!</div>
                            <div  className="projectDashboard__col2_activities--divodd">sagar chutiye!!</div>
                            <div  className="projectDashboard__col2_activities--diveven">sagar chutiye!!</div>
                            <div  className="projectDashboard__col2_activities--divodd">sagar chutiye!!</div>
                            <div  className="projectDashboard__col2_activities--diveven">sagar chutiye!!</div>
                            <div  className="projectDashboard__col2_activities--divodd">sagar chutiye!!</div>
                            <div  className="projectDashboard__col2_activities--diveven">sagar chutiye!!</div>
                            <div  className="projectDashboard__col2_activities--divodd">sagar chutiye!!</div>
                            <div  className="projectDashboard__col2_activities--diveven">sagar chutiye!!</div>
                            <div  className="projectDashboard__col2_activities--divodd">sagar chutiye!!</div>
                            <div  className="projectDashboard__col2_activities--diveven">sagar chutiye!!</div>
                            <div  className="projectDashboard__col2_activities--divodd">sagar chutiye!!</div>
                            <div  className="projectDashboard__col2_activities--diveven">sagar chutiye!!</div>
                            <div  className="projectDashboard__col2_activities--divodd">sagar chutiye!!</div>
                            <div  className="projectDashboard__col2_activities--diveven">sagar chutiye!!</div>
                            <div  className="projectDashboard__col2_activities--divodd">sagar chutiye!!</div>
                            <div  className="projectDashboard__col2_activities--diveven">sagar chutiye!!</div>
                            <div  className="projectDashboard__col2_activities--divodd">sagar chutiye!!</div>
                            <div  className="projectDashboard__col2_activities--diveven">sagar chutiye!!</div>
                      </div>:
                      <div className="projectDashboard__col2_members">
                            <div  className="projectDashboard__col2_activities--divodd">sagar chutiye!!</div>
                            <div  className="projectDashboard__col2_activities--diveven">sagar chutiye!!</div>
                            <div  className="projectDashboard__col2_activities--divodd">sagar chutiye!!</div>
                            <div  className="projectDashboard__col2_activities--diveven">sagar chutiye!!</div>
                            <div  className="projectDashboard__col2_activities--divodd">sagar chutiye!!</div>
                            <div  className="projectDashboard__col2_activities--diveven">sagar chutiye!!</div>
                            <div  className="projectDashboard__col2_activities--divodd">sagar chutiye!!</div>
                            <div  className="projectDashboard__col2_activities--diveven">sagar chutiye!!</div>
                            <div  className="projectDashboard__col2_activities--divodd">sagar chutiye!!</div>
                            <div  className="projectDashboard__col2_activities--diveven">sagar chutiye!!</div>
                            <div  className="projectDashboard__col2_activities--divodd">sagar chutiye!!</div>
                            <div  className="projectDashboard__col2_activities--diveven">sagar chutiye!!</div>
                            <div  className="projectDashboard__col2_activities--divodd">sagar chutiye!!</div>
                            <div  className="projectDashboard__col2_activities--diveven">sagar chutiye!!</div>
                            <div  className="projectDashboard__col2_activities--divodd">sagar chutiye!!</div>
                            <div  className="projectDashboard__col2_activities--diveven">sagar chutiye!!</div>
                            <div  className="projectDashboard__col2_activities--divodd">sagar chutiye!!</div>
                            <div  className="projectDashboard__col2_activities--diveven">sagar chutiye!!</div>
                            <div  className="projectDashboard__col2_activities--divodd">sagar chutiye!!</div>
                            <div  className="projectDashboard__col2_activities--diveven">sagar chutiye!!</div>
                            <div  className="projectDashboard__col2_activities--divodd">sagar chutiye!!</div>
                            <div  className="projectDashboard__col2_activities--diveven">sagar chutiye!!</div>
                            <div  className="projectDashboard__col2_activities--divodd">sagar chutiye!!</div>
                            <div  className="projectDashboard__col2_activities--diveven">sagar chutiye!!</div>
                            <div  className="projectDashboard__col2_activities--divodd">sagar chutiye!!</div>
                            <div  className="projectDashboard__col2_activities--diveven">sagar chutiye!!</div>
                            <div  className="projectDashboard__col2_activities--divodd">sagar chutiye!!</div>
                            <div  className="projectDashboard__col2_activities--diveven">sagar chutiye!!</div>
                            <div  className="projectDashboard__col2_activities--divodd">sagar chutiye!!</div>
                            <div  className="projectDashboard__col2_activities--diveven">sagar chutiye!!</div>
                      </div>}
                 </div>
           </div>
      )
    }
  }


 export default withRouter(ProjectDashboard);
