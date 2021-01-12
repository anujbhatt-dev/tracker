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
import Notification from "react-web-notification"
import axios from "axios"


  class Layout extends Component{


    state={
      image:null,
    }

    imageHandler=(image)=>{
      this.setState({image:image});
    }

    componentDidMount=()=>{
      if(this.getCookie("jwt")!==null)
      axios.defaults.headers.common['Authorization'] = this.getCookie("jwt");
    }


    componentDidUpdate=()=>{
      if(this.getCookie("jwt")!==null)
      axios.defaults.headers.common['Authorization'] = this.getCookie("jwt");
    }

    getCookie=(value)=> {

      let cookies= document.cookie+";";
  
      if(cookies.indexOf(value)<0)
      return null;
  
     return cookies.substring(cookies.indexOf(value)+(value.length+1),cookies.indexOf(";",cookies.indexOf(value)+1));
  
   }


    render(){

      return (
               <div className="layout">

                      <Nav imageHandler={this.imageHandler} image={this.state.image} authenticated={this.props.authenticated}/>

                     <Switch>

                     <Route exact path="/"><Join authenticated={this.props.authenticated}/></Route>
                     <Route exact  path="/profile"><Profile imageHandler={this.imageHandler}/></Route>

                     <Route exact path="/createProject"><CreateProject authenticated={this.props.authenticated}/></Route>
                     <Route exact path="/projects"><Projects authenticated={this.props.authenticated} /></Route>

                     <Route  path="/projectDashboard/:projectId/mission/:missionId"><MissionDashboard authenticated={this.props.authenticated}/></Route>
                    <Route  path="/projectDashboard/:id"><ProjectDashboard authenticated={this.props.authenticated}/></Route>
                    <Route  path="/oauth/:code/redirect/:jwt/:email/:name"><OAuthSuccessHandler /></Route>

                    </Switch>
                   
                   {/* <Modal>
                    <DetailView/>
                    </Modal> */}

               </div>
      )
    }
  }


 export default Layout;
