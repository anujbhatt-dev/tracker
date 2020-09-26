import React, {Component} from "react"


  class CreateProjectMain extends Component{

    render(){

      return (
          <div className="createProjectMain">
              <div>
                 <input placeholder="Project name" name="projectName" type="text"/><br/>
                 <input placeholder="project Id" name="projectName" type="text"/><br/>
                 <textarea placeholder="descreiption" name="projectName" type="text"></textarea><br/>
                 <div className="floater1">
                   <label htmlFor="startDate">Start Date</label><br/>
                   <input id="stertDate" placeholder="start date" name="projectName" type="date"/>
                 </div>
                 <div>
                   <label htmlFor="endDate">End Date</label><br/>
                   <input id="endDate" placeholder="end date" name="projectName" type="date"/>
                 </div>
              </div>
              <div className="createProjectMain__col2">
                   <div >
                      <br/><br/><hr className="hr"/>
                      <br/><br/><hr className="hr"/>
                      <br/><br/><hr className="hr"/>
                      <br/><br/><hr className="hr"/>
                      <br/><br/><hr className="hr"/>
                   </div>
                   <div >
                      <br/><br/><hr className="hr"/>
                      <br/><br/><hr className="hr"/>
                      <br/><br/><hr className="hr"/>
                      <br/><br/><hr className="hr"/>
                      <br/><br/><hr className="hr"/>
                   </div>
              </div>
          </div>
      )
    }
  }


 export default CreateProjectMain;
