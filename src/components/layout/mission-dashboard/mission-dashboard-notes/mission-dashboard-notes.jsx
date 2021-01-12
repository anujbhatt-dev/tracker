import React, {Component} from "react"
import Modal from "../../../../UI/modal"
import axios from "axios"


  class MissionDashboardNotes extends Component{

    state={
      notes:[
        {
          title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum quaerat aliquid labore voluptate rem dolorum corporis dolores, modi esse accusantium!",
          description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero similique, eum distinctio, nam laboriosam et at fugiat corporis voluptates praesentium, deserunt magni fuga vel minima exercitationem ipsam sunt deleniti nesciunt delectus ad odio facilis. Quod dolorum voluptatem quo accusamus recusandae, expedita omnis rem impedit! Tenetur error eius earum recusandae alias blanditiis praesentium explicabo inventore, incidunt magni odit ducimus atque voluptatibus dicta, suscipit tempore, necessitatibus aspernatur perferendis ab neque illum minus adipisci doloremque ullam animi? Distinctio inventore maiores sunt animi adipisci aliquid at soluta totam, voluptatibus, accusantium modi, tempore! Possimus aperiam temporibus magni libero id optio odio molestias deserunt, non quidem.",
          toggle:false
        },
        
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
     axios.get("/v1/mission/"+this.props.missionId+"/note")
     .then(res=>{
    this.setState({notes:res.data});
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
      // console.log(this.state.newNote);


      axios.post("/v1/mission/"+this.props.missionId+"/note",{...this.state.newNote})
      .then(res=>console.log(res.data))
      .catch(err=>alert("something went wrong "+err))

      e.preventDefault();
    }

    updateNoteSubmitHandler=(e)=>{
      e.preventDefault();

      //axios call 
      //inside then

      axios.put("/v1/mission/note/"+this.state.selectedNote.id,{...this.state.selectedNote})
      .then(res=>{
        let newNotes=[...this.state.notes];
        newNotes[this.state.selectedIndex]=this.state.selectedNote;
        this.setState({notes:newNotes,show:false});
            })
      .catch(err=>alert("something went wrong "+err))
          
    
    }


    toggleHandler=(i)=>{
       const newNotes =this.state.notes
       newNotes[i].toggle = !newNotes[i].toggle
       this.setState({
           notes:[...newNotes]
       })
    }


    

    render(){

      return (
        <div className="projectDashboardNotes">
        <button className="projectDashboardNotes__update_addForm-btn projectDashboardNotes__update_addForm-plus" onClick={()=>this.setState({show:"ADD"})}><i className="fa fa-plus" aria-hidden="true"></i> Add</button>
        {this.state.notes.map((note,i)=>{
          return <div key={note.title+i} className="projectDashboardNotes__notes">
                     <div  className="title">
                       <div className="title__text">{note.title}</div>
                       <div>
                           <div onClick={()=>this.modalHandler(note,i)} className="title__arrow"><i className="fa fa-ellipsis-h" aria-hidden="true"></i></div>
                           <div onClick={()=>this.toggleHandler(i)} className="title__arrow"><i className="fa fa-angle-double-down" aria-hidden="true"></i></div>
                       </div>
                     </div>
                     <div style={!note.toggle?{display:"none"}:{display:"block"}} className="description">{note.description}</div>
                  </div>
        })}
        {this.state.show?
           this.state.show==="ADD"?<Modal modalHandler={this.modalCloseHandler}>
           <div className="projectDashboardNotes__update">
                <h1 className="projectDashboardNotes__update_head">ADD NOTE</h1>
                <form  onSubmit={(e)=>this.newNoteSubmitHandler(e)} className="projectDashboardNotes__update_addForm" action="">
                     <input value={this.state.newNote.title} onChange={(e)=>this.newOnChangeHandler(e)} name="title" placeholder="* title" className="projectDashboardNotes__update_addForm-title" type="text"/>
                     <textarea  value={this.state.newNote.description} onChange={(e)=>this.newOnChangeHandler(e)} name="description" placeholder="* description" className="projectDashboardNotes__update_addForm-description" type="text"></textarea>
                     <button  type="submit" className="projectDashboardNotes__update_addForm-btn"> <i className="fa fa-upload" aria-hidden="true"></i><span>New Note</span></button>

                </form>
                 </div>
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

 export default MissionDashboardNotes;
