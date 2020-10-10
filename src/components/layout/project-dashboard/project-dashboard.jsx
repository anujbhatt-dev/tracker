import React, {Component} from "react"
import {Switch , Route ,withRouter} from "react-router-dom"
import ProjectDashboardNav from "./project-dashboard-nav/project-dashboard-nav"
import ProjectDashboardNotes from "./project-dashboard-notes/project-dashboard-notes"
import ProjectDashboardLinks from "./project-dashboard-links/project-dashboard-links"
import ProjectDashboardRoadmap from "./project-dashboard-roadmap/project-dashboard-roadmap"
import ProjectDashboardMembers from "./project-dashboard-members/project-dashboard-members"
import axios from "axios"


class ProjectDashboard extends Component{

    state={
      aside:"activities",
      members:[],
      roadMapData:{},
    }

    asideHandler=(aside)=>{
      this.setState({
        aside:aside
      })
    }

    componentDidMount=()=>{
      axios.get("/v1/project/"+this.props.match.params.id+"/member")
      .then(res=>
        {
          this.setState({members:res.data});

        }
      );

      axios.get("/v1/project/"+this.props.match.params.id+"/dashboard")
      .then(res=>{
        console.log(res.data);
        this.setState({roadMapData:res.data});
      })

    }

    render(){

      const projectId= this.props.match.params.id;
      return (
           <div className="projectDashboard">
                 <div className="projectDashboard__col1">
                      <ProjectDashboardNav projectId={projectId}/>

                      <Switch>

                    <Route exact path="/projectDashboard/:id"><ProjectDashboardRoadmap projectId={projectId}/></Route>
                    <Route exact path="/projectDashboard/:id/roadMap"><ProjectDashboardRoadmap data={this.state.roadMapData} projectId={projectId}/></Route>

                     <Route exact path="/projectDashboard/:id/notes"><ProjectDashboardNotes projectId={projectId}/></Route>

                     <Route exact path="/projectDashboard/:id/links"><ProjectDashboardLinks projectId={projectId}/></Route>

                     <Route exact path="/projectDashboard/:id/members"><ProjectDashboardMembers  projectId={projectId}/></Route>
                        </Switch>


                 </div>
                 <div className="projectDashboard__col2">
                      <div className="projectDashboard__col2_toggler">
                          <div style={this.state.aside==="activities"?{color:"#0073b1"}:{color:"black"}} onClick={()=>this.asideHandler("activities")}>Activities</div>
                          <div style={this.state.aside==="members"?{color:"#0073b1"}:{color:"black"}} onClick={()=>this.asideHandler("members")}>Members</div>
                      </div>
                      {this.state.aside==="activities"?
                      <div className="projectDashboard__col2_activities">
                            <div  className="projectDashboard__col2_activities--div">sagar chutiye!!</div>
                            <div  className="projectDashboard__col2_activities--div">sagar chutiye!!</div>
                            <div  className="projectDashboard__col2_activities--div">sagar chutiye!!</div>
                            <div  className="projectDashboard__col2_activities--div">sagar chutiye!!</div>
                            <div  className="projectDashboard__col2_activities--div">sagar chutiye!!</div>
                            <div  className="projectDashboard__col2_activities--div">sagar chutiye!!</div>
                            <div  className="projectDashboard__col2_activities--div">sagar chutiye!!</div>
                            <div  className="projectDashboard__col2_activities--div">sagar chutiye!!</div>
                            <div  className="projectDashboard__col2_activities--div">sagar chutiye!!</div>
                            <div  className="projectDashboard__col2_activities--div">sagar chutiye!!</div>
                      </div>:
                      <div className="projectDashboard__col2_members">
                        {this.state.members
                        .map((member,i)=>
                          <div key={member.user.email+i} className="projectDashboardNotes__notes ">
                                     <div  className="projectDashboardMember__member">
                                       <img className="createProjectMember__result_item-fig_img" src={member.user.thumbnailUrl?member.user.thumbnailUrl:member.user.imageUrl} alt=""/>
                                       <div className="projectDashboardMember__member_textWrapper">
                                           <div className="projectDashboardMember__member_text">{member.user.email}</div>
                                           <div className="projectDashboardMember__member_text">{member.user.firstName} {member.user.lastName}</div>
                                           <div className="projectDashboardMember__member_text">{member.user.authority}</div>
                                       </div>
                                       <div className="projectDashboardMember__member_date"><strong>Added on:</strong> {member.user.addedOn}</div>
                                       <div onClick={()=>this.modalHandler(member,i)} className="title__arrow"><i className="fa fa-ellipsis-h" aria-hidden="true"></i></div>
                                     </div>
                                  </div>
                         )}

                      </div>}
                 </div>
           </div>
      )
    }
  }


 export default withRouter(ProjectDashboard);
