import React, {Component} from "react"
import {Switch , Route ,withRouter} from "react-router-dom"
import MissionDashboardNav from "./mission-dashboard-nav/mission-dashboard-nav"
import MissionDashboardNotes from "./mission-dashboard-notes/mission-dashboard-notes"
import MissionDashboardLinks from "./mission-dashboard-links/mission-dashboard-links"
import MissionDashboardMembers from "./mission-dashboard-members/mission-dashboard-members"
import MissionDashboardObjective from "./mission-dashboard-objective/mission-dashboard-objective"
import axios from "axios"
import MissionMember from "./mission-member"
import UserBar from "../user-bar/user-bar"
import ProjectBar from "../project-dashboard/project-bar/project-bar"
import MissionDashboardConversation from "./mission-dashboard-conversation/mission-dashboard-conversation"
import MissionNotification from "./mission-notification/mission-notification"


class MissionDashboard extends Component{

    state={
      aside:"activities",
      activities:"",
      members:[],
    }

    asideHandler=(aside)=>{
      this.setState({
        aside:aside
      })
    }

    componentDidMount=()=>{
      axios.get("/v1/mission/"+this.props.match.params.missionId+"/member")
      .then(res=>{
        this.setState({members:res.data})
      })
    }

    render(){
      // <Switch>
      //     <Route exact path="/projectDashboard/notes"><ProjectDashboardNotes/></Route>
      // </Switch>

      const projectId= this.props.match.params.projectId;
      const missionId= this.props.match.params.missionId;//.replace("$",".");

      console.log(this.props.match.params)

      return (
        <>
        
        <ProjectBar/>

           <div style={{background:"white"}} className="projectDashboard">
                 <UserBar/>

                 <div className="projectDashboard__col1">
                      <MissionDashboardNav projectId={projectId} missionId={missionId}/>                      
                      <Switch>
                        
                     <Route exact path="/projectDashboard/:projectId/mission/:missionId"><MissionDashboardObjective missionId={missionId} projectId={projectId}/></Route>
                     <Route exact path="/projectDashboard/:projectId/mission/:missionId/objective"><MissionDashboardObjective missionId={missionId} projectId={projectId}/></Route>
                       <Route exact path="/projectDashboard/:projectId/mission/:missionId/notes"><MissionDashboardNotes missionId={missionId} projectId={projectId}/></Route>
                       <Route exact path="/projectDashboard/:projectId/mission/:missionId/links"><MissionDashboardLinks missionId={missionId} projectId={projectId}/></Route>
                     <Route exact path="/projectDashboard/:projectId/mission/:missionId/members"><MissionDashboardMembers missionId={missionId} projectId={projectId}/></Route>
                     <Route exact path="/projectDashboard/:projectId/mission/:missionId/conversations"><MissionDashboardConversation missionId={missionId} projectId={projectId}/></Route>

    </Switch>


                 </div>
                 <div className="projectDashboard__col2">
                      <div className="projectDashboard__col2_toggler">
                          <div style={this.state.aside==="activities"?{color:"#0073b1"}:{color:"black"}} onClick={()=>this.asideHandler("activities")}><i      style={{color:"orange",height:"15px",width:"35px"}} class="fa fa-bell fa-1x"></i></div>
                          <div style={this.state.aside==="members"?{color:"#0073b1"}:{color:"black"}} onClick={()=>this.asideHandler("members")}> <i style={{color:"pink",height:"15px",width:"35px"}} class="fa fa-users fa-1x"></i> </div>
                      </div>
                      {this.state.aside==="activities"?
                     <MissionNotification missionId={this.props.match.params.missionId}/>:
                      <div className="projectDashboard__col2_members">
                        {this.state.members
                        .map((member,i)=>

                        <MissionMember  member={member} />

                         )}

                      </div>}
                 </div>
           </div>
           </>
      )
    }
  }


 export default withRouter(MissionDashboard);
