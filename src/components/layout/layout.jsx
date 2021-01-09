import React, {Component} from "react"
import Nav from "./nav/nav"
import CreateProject from "./create-project/create-project"
import Join from "./join/join"
import ProjectDashboard from "./project-dashboard/project-dashboard"
import { Switch,Route } from "react-router-dom"
import MissionDashboard from "./mission-dashboard/mission-dashboard"
import Projects from "./projects/projects"
// to be remove after use!!!
import DetailView from "./static/detail-view"
import AddMission from "./static/add-mission"
import Modal from "../../UI/modal"
import OAuthSuccessHandler from "./join/oauth-success-handler/oauth-success-handler"
import Profile from "./profile/profile"


  class Layout extends Component{

    render(){

      return (
               <div className="layout">
                      <Nav authenticated={this.props.authenticated}/>

                     <Switch>

                     <Route exact path="/"><Join authenticated={this.props.authenticated}/></Route>
                     <Route exact path="/profile"><Profile/></Route>

                     <Route exact path="/createProject"><CreateProject authenticated={this.props.authenticated}/></Route>
                     <Route exact path="/projects"><Projects authenticated={this.props.authenticated} /></Route>

                     <Route exact path="/projectDashboard/:projectId/mission/:missionId"><MissionDashboard authenticated={this.props.authenticated}/></Route>
                    <Route exact path="/projectDashboard/:id"><ProjectDashboard authenticated={this.props.authenticated}/></Route>
                    <Route  path="/oauth/:code/redirect/:jwt/:email/:name"><OAuthSuccessHandler/></Route>

                    </Switch>
                   
                   {/* <Modal>
                    <DetailView/>
                    </Modal> */}

               </div>
      )
    }
  }


 export default Layout;
