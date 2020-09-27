import React, {Component} from "react"


  class CreateProjectMain extends Component{

    render(){

      return (
          <div className="createProjectMain">
              <div>
                 <input value={this.props.projectName} onChange={e=>this.props.updateHandler(e)} placeholder="Project name" name="projectName" type="text"/><br/>
                 <input value={this.props.projectId} onChange={e=>this.props.updateHandler(e)} placeholder="project Id" name="projectId" type="text"/><br/>
                 <textarea value={this.props.description} onChange={e=>this.props.updateHandler(e)} placeholder="description" name="description" type="text"></textarea><br/>
                 <div className="floater1">
                   <label htmlFor="startDate">Start Date</label><br/>
                   <input value={this.props.startingDate} onChange={e=>this.props.updateHandler(e)} id="stertDate" placeholder="start date" name="startingDate" type="date"/>
                 </div>
                 <div>
                   <label htmlFor="endDate">Estimated End Date</label><br/>
                   <input value={this.props.endingDate} onChange={e=>this.props.updateHandler(e)} id="endDate" placeholder="end date" name="endingDate" type="date"/>
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
