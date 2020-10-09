import React, {Component} from "react"
import axios from "axios"
import Modal from "../../../../UI/modal"
import ProjectDashboardMembersAdd from "./project-dashboard-members-add/project-dashboard-members-add"


  class ProjectDashboardMembers extends Component{

    state={
      members:[
       
        
      ],
      show:false,
      selectedNote:{},
      newNote:{},
      selectedindex:-1,
    }

    modalHandler=(note,i)=>{
      this.setState({
        show:"UPDATE",
        selectedNote:{... note},
        selectedIndex:i,
      })
    }

    modalCloseHandler=()=>{
      this.setState({
        show:false
      })
    }

    componentDidMount=()=>{
     axios.get("/v1/project/"+this.props.projectId+"/member")
     .then(res=>{
    this.setState({members:res.data});
     })

    }

    selectedOnChangeHandler=(e)=>{
        
      let newNote= {... this.state.selectedNote};

      newNote[e.target.name]=e.target.value;

      this.setState({selectedNote:{... newNote}});
    }


    newOnChangeHandler=(e)=>{
        
      let newNote= {... this.state.newNote};

      newNote[e.target.name]=e.target.value;

      this.setState({newNote:{... newNote}});
    }


    newNoteSubmitHandler=(e)=>{
      console.log(this.state);
      e.preventDefault();
    }

    updateNoteSubmitHandler=(e)=>{
      e.preventDefault();

      //axios call 
      //inside then
          
      let newNotes=[...this.state.notes];
      newNotes[this.state.selectedIndex]=this.state.selectedNote;

      console.log(this.state.selectedIndex)
      this.setState({notes:newNotes,show:false});
    }


    toggleHandler=(i)=>{
       const newNotes =this.state.notes
       newNotes[i].toggle = !newNotes[i].toggle
       this.setState({
           notes:[...newNotes]
       })
    }


   
    updateMembers=(addedMembers)=>{
     // let newMembers=[...this.state.members];
      
      let newMembers=[];

      // for each (var item in obj) {
      //   sum += item;
      // }

      
      addedMembers.forEach(member=>{
        console.log(member);

        newMembers.push({user:{...member}});
      });


      newMembers.concat(this.state.members);
console.log(newMembers)
      this.setState({members:newMembers});
    }

    

    render(){

      return (
         <div className="projectDashboardNotes">
           <button onClick={()=>this.setState({show:"ADD"})}>ADD</button>
             {this.state.members.map((member,i)=>{
               return <div key={member.user.email+i} className="projectDashboardNotes__notes">
                          <div  className="title">
                            <div className="title__text">{member.user.email}</div>
                                <div onClick={()=>this.modalHandler(member,i)} className="title__arrow"><i className="fa fa-ellipsis-h" aria-hidden="true"></i></div>
                          </div>
                       </div>
             })}
             {this.state.show?
                this.state.show==="ADD"?<Modal modalHandler={this.modalCloseHandler}>
             <ProjectDashboardMembersAdd modalHandler={this.modalCloseHandler} updateMembers={this.updateMembers} />
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

  


 export default ProjectDashboardMembers;
