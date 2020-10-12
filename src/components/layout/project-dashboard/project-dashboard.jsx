import React, {Component} from "react"
import {Switch , Route ,withRouter} from "react-router-dom"
import ProjectDashboardNav from "./project-dashboard-nav/project-dashboard-nav"
import ProjectDashboardNotes from "./project-dashboard-notes/project-dashboard-notes"
import ProjectDashboardLinks from "./project-dashboard-links/project-dashboard-links"
import ProjectDashboardRoadmap from "./project-dashboard-roadmap/project-dashboard-roadmap"
import ProjectDashboardMembers from "./project-dashboard-members/project-dashboard-members"
import axios from "axios"
import ProjectMember from "./project-member"


class ProjectDashboard extends Component{

    state={
      aside:"activities",
      members:[],
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
           <div style={{background:"white"}} className="projectDashboard">
                 <div style={{background:"grey"}} className="projectDashboard__col1">
                      <ProjectDashboardNav projectId={projectId}/>

                      {this.state.roadMapData?<Switch>

                    <Route exact path="/projectDashboard/:id"><ProjectDashboardRoadmap data={this.state.roadMapData} projectId={projectId}/></Route>
                    <Route exact path="/projectDashboard/:id/roadMap"><ProjectDashboardRoadmap data={this.state.roadMapData} projectId={projectId}/></Route>

                     <Route exact path="/projectDashboard/:id/notes"><ProjectDashboardNotes projectId={projectId}/></Route>

                     <Route exact path="/projectDashboard/:id/links"><ProjectDashboardLinks projectId={projectId}/></Route>

                     <Route exact path="/projectDashboard/:id/members"><ProjectDashboardMembers  projectId={projectId}/></Route>
                        </Switch>:null}


                 </div>
                 <div className="projectDashboard__col2">
                      <div className="projectDashboard__col2_toggler">
                          <div style={this.state.aside==="activities"?{color:"#0073b1"}:{color:"black"}} onClick={()=>this.asideHandler("activities")}><i      style={{color:"orange",height:"15px",width:"35px"}} class="fa fa-bell fa-1x"></i></div>
                          <div style={this.state.aside==="members"?{color:"#0073b1"}:{color:"black"}} onClick={()=>this.asideHandler("members")}> <i style={{color:"pink",height:"15px",width:"35px"}} class="fa fa-users fa-1x"></i> </div>
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

                        <ProjectMember  member={member} />
                        
                         )}

                      </div>}
                 </div>
           </div>
      )
    }
  }


 export default withRouter(ProjectDashboard);
