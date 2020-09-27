import React, {Component} from "react"
import CreateProjectMain from "./create-project-main/create-project-main"
import CreateProjectMember from "./create-project-member/create-project-member"
import CreateProjectAlerts from "./create-project-alerts/create-project-alerts"
import CreateProjectSubmit from "./create-project-submit/create-project-submit"
import axios from "axios"

class CreateProject extends Component{

     state={
     
      projectName:"",
      projectId:"",
      description:"",
      startingDate:"",
      endingDate:"",
      member:{
        email:"",
        authority:""
      },
      updating:false,


     }

     createProject=(e)=>{
           e.preventDefault();
           
           axios.post("/v1/project",this.state)
           .then(res=>{
             console.log(res.data);
           })
     }

     updateHandler=(e)=>{
      
      this.setState({[e.target.name]:e.target.value});

     }


     membersUpdateHandler=(members)=>{

      this.setState({member:members})
     }


    render(){

      return (
        <div className="createProjectWrapper">
           <form autocomplete="off" onSubmit={this.createProject} className="createProject">
                   <CreateProjectMain data={this.state} updateHandler={this.updateHandler}/>
                   <div className="createProject__col2">
                    <CreateProjectMember  membersUpdateHandler={this.membersUpdateHandler} />
                    <CreateProjectAlerts/>
                    <CreateProjectSubmit/>
                  </div>
           </form>
         </div>
      )
    }
  }


 export default CreateProject;
