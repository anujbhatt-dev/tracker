import React, {Component} from "react"
import CreateProjectMain from "./create-project-main/create-project-main"
import CreateProjectSearch from "./create-project-search/create-project-search"
import CreateProjectAdded from "./create-project-added/create-project-added"
import CreateProjectAlerts from "./create-project-alerts/create-project-alerts"
import CreateProjectSubmit from "./create-project-submit/create-project-submit"

class CreateProject extends Component{

     state={

     }

     createProject=(e)=>{
           e.preventDefault();
           alert("submitted")
     }

    render(){

      return (
        <div className="createProjectWrapper">
           <form autocomplete="off" onSubmit={this.createProject} className="createProject">
                  <CreateProjectMain/>
                  <div className="createProject__col2">
                    <CreateProjectSearch/>
                    <CreateProjectAdded/>
                    <CreateProjectAlerts/>
                    <CreateProjectSubmit/>
                  </div>
           </form>
         </div>
      )
    }
  }


 export default CreateProject;
