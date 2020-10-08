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

      const projectId= this.props.match.params.id;
      console.log(this.props)

      return (
           <div className="projectDashboard">
                 <div className="projectDashboard__col1">
                      <ProjectDashboardNav projectId={projectId}/>
                      
                      <Switch>
                        
                    <Route exact path="/projectDashboard"><ProjectDashboardRoadmap projectId={projectId}/></Route>
                    <Route exact path="/projectDashboard/:id/roadMap"><ProjectDashboardRoadmap projectId={projectId}/></Route>

                     <Route exact path="/projectDashboard/:id/notes"><ProjectDashboardNotes projectId={projectId}/></Route>

                     <Route exact path="/projectDashboard/:id/links"><ProjectDashboardLinks projectId={projectId}/></Route>

                     <Route exact path="/projectDashboard/:id/members">Member</Route>
                        </Switch>


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
