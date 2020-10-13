import React, {Component} from "react"
import MissionMember from "./mission-member";
import MissionDashboardMembersAdd from "./mission-dashboard-members-add/mission-dashboard-members-add";
import Modal from "../../../../UI/modal";


  class MissionDashboardMembers extends Component{


    state={
      members:[]
    }

    render(){

      return (
        <div className="projectDashboardNotes">
        <button className="projectDashboardNotes__update_addForm-btn projectDashboardNotes__update_addForm-plus" onClick={()=>this.setState({show:"ADD"})}><i className="fa fa-plus" aria-hidden="true"></i> Add</button>
        {this.state.members.map((member,i)=>
        <MissionMember modalHandler={this.modalHandler} i={i}  member={member}/>
        )}
        {this.state.show?
           this.state.show==="ADD"?<Modal modalHandler={this.modalCloseHandler}>
        <MissionDashboardMembersAdd modalHandler={this.modalCloseHandler} updateMembers={this.updateMembers} />
        </Modal>:
        <Modal modalHandler={this.modalCloseHandler}>
        <div className="projectDashboardNotes__update">
       <h1 className="projectDashboardNotes__update_head">UPDATE NOTE</h1>
        <form onSubmit={(e)=>this.updateNoteSubmitHandler(e)}   className="projectDashboardNotes__update_addForm" action="">
             <input value={this.state.selectedNote.title} onChange={(e)=>this.selectedOnChangeHandler(e)} name="title" placeholder="* title" className="projectDashboardNotes__update_addForm-title" type="text"/>
             <textarea  value={this.state.selectedNote.description} onChange={(e)=>this.selectedOnChangeHandler(e)} name="description" placeholder="* description" className="projectDashboardNotes__update_addForm-description" type="text"></textarea>
             <button type="submit" className="projectDashboardNotes__update_addForm-btn"> <i className="fa fa-pencil" aria-hidden="true"></i><span>Update Note</span></button>
        </form>
        <button type="submit" className="projectDashboardNotes__update_addForm-btn projectDashboardNotes__update_addForm-delete"> <i className="fa fa-trash" aria-hidden="true"></i><span>Delete Note</span></button>
        </div>
        </Modal>
       :null}

    </div>
      )
    }
  }


 export default MissionDashboardMembers;
