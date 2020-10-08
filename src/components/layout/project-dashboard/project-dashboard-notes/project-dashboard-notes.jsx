import React, {Component} from "react"
import axios from "axios"
import Modal from "../../../../UI/modal";


  class ProjectDashboardNotes extends Component{

    state={
      notes:[
        {
          title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum quaerat aliquid labore voluptate rem dolorum corporis dolores, modi esse accusantium!",
          description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero similique, eum distinctio, nam laboriosam et at fugiat corporis voluptates praesentium, deserunt magni fuga vel minima exercitationem ipsam sunt deleniti nesciunt delectus ad odio facilis. Quod dolorum voluptatem quo accusamus recusandae, expedita omnis rem impedit! Tenetur error eius earum recusandae alias blanditiis praesentium explicabo inventore, incidunt magni odit ducimus atque voluptatibus dicta, suscipit tempore, necessitatibus aspernatur perferendis ab neque illum minus adipisci doloremque ullam animi? Distinctio inventore maiores sunt animi adipisci aliquid at soluta totam, voluptatibus, accusantium modi, tempore! Possimus aperiam temporibus magni libero id optio odio molestias deserunt, non quidem.",
          toggle:false
        },
        {
          title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum quaerat aliquid labore voluptate rem dolorum corporis dolores, modi esse accusantium!",
          description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero similique, eum distinctio, nam laboriosam et at fugiat corporis voluptates praesentium, deserunt magni fuga vel minima exercitationem ipsam sunt deleniti nesciunt delectus ad odio facilis. Quod dolorum voluptatem quo accusamus recusandae, expedita omnis rem impedit! Tenetur error eius earum recusandae alias blanditiis praesentium explicabo inventore, incidunt magni odit ducimus atque voluptatibus dicta, suscipit tempore, necessitatibus aspernatur perferendis ab neque illum minus adipisci doloremque ullam animi? Distinctio inventore maiores sunt animi adipisci aliquid at soluta totam, voluptatibus, accusantium modi, tempore! Possimus aperiam temporibus magni libero id optio odio molestias deserunt, non quidem.",
          toggle:false
        },
        {
          title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum quaerat aliquid labore voluptate rem dolorum corporis dolores, modi esse accusantium!",
          description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero similique, eum distinctio, nam laboriosam et at fugiat corporis voluptates praesentium, deserunt magni fuga vel minima exercitationem ipsam sunt deleniti nesciunt delectus ad odio facilis. Quod dolorum voluptatem quo accusamus recusandae, expedita omnis rem impedit! Tenetur error eius earum recusandae alias blanditiis praesentium explicabo inventore, incidunt magni odit ducimus atque voluptatibus dicta, suscipit tempore, necessitatibus aspernatur perferendis ab neque illum minus adipisci doloremque ullam animi? Distinctio inventore maiores sunt animi adipisci aliquid at soluta totam, voluptatibus, accusantium modi, tempore! Possimus aperiam temporibus magni libero id optio odio molestias deserunt, non quidem.",
          toggle:false
        },
        {
          title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum quaerat aliquid labore voluptate rem dolorum corporis dolores, modi esse accusantium!",
          description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero similique, eum distinctio, nam laboriosam et at fugiat corporis voluptates praesentium, deserunt magni fuga vel minima exercitationem ipsam sunt deleniti nesciunt delectus ad odio facilis. Quod dolorum voluptatem quo accusamus recusandae, expedita omnis rem impedit! Tenetur error eius earum recusandae alias blanditiis praesentium explicabo inventore, incidunt magni odit ducimus atque voluptatibus dicta, suscipit tempore, necessitatibus aspernatur perferendis ab neque illum minus adipisci doloremque ullam animi? Distinctio inventore maiores sunt animi adipisci aliquid at soluta totam, voluptatibus, accusantium modi, tempore! Possimus aperiam temporibus magni libero id optio odio molestias deserunt, non quidem.",
          toggle:false
        },
        {
          title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum quaerat aliquid labore voluptate rem dolorum corporis dolores, modi esse accusantium!",
          description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero similique, eum distinctio, nam laboriosam et at fugiat corporis voluptates praesentium, deserunt magni fuga vel minima exercitationem ipsam sunt deleniti nesciunt delectus ad odio facilis. Quod dolorum voluptatem quo accusamus recusandae, expedita omnis rem impedit! Tenetur error eius earum recusandae alias blanditiis praesentium explicabo inventore, incidunt magni odit ducimus atque voluptatibus dicta, suscipit tempore, necessitatibus aspernatur perferendis ab neque illum minus adipisci doloremque ullam animi? Distinctio inventore maiores sunt animi adipisci aliquid at soluta totam, voluptatibus, accusantium modi, tempore! Possimus aperiam temporibus magni libero id optio odio molestias deserunt, non quidem.",
          toggle:false
        },
      ],
      show:false
    }

    modalHandler=()=>{
      this.setState({
        show:!this.state.show
      })
    }

    componentDidMount=()=>{
     axios.get("/v1/project/"+this.props.projectId+"/note")
     .then(res=>{
    this.setState({notes:res.data});
     })

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
             {this.state.notes.map((note,i)=>{
               return <div key={note.title+i} className="projectDashboardNotes__notes">
                          <div  className="title">
                            <div className="title__text">{note.title}</div>
                            <div>
                                <div onClick={this.modalHandler} className="title__arrow"><i className="fa fa-ellipsis-h" aria-hidden="true"></i></div>
                                <div onClick={()=>this.toggleHandler(i)} className="title__arrow"><i className="fa fa-angle-double-down" aria-hidden="true"></i></div>
                            </div>
                          </div>
                          <div style={!note.toggle?{display:"none"}:{display:"block"}} className="description">{note.description}</div>
                       </div>
             })}
             {this.state.show?<Modal modalHandler={this.modalHandler}>
                <div className="projectDashboardNotes__update">
                     <h1 className="projectDashboardNotes__update_head">ADD NOTE</h1>
                     <form  className="projectDashboardNotes__update_addForm" action="">
                          <input placeholder="* title" className="projectDashboardNotes__update_addForm-title" type="text"/>
                          <textarea placeholder="* description" className="projectDashboardNotes__update_addForm-description" type="text"></textarea>
                          <button type="submit" className="projectDashboardNotes__update_addForm-btn"> <i className="fa fa-upload" aria-hidden="true"></i><span>New Note</span></button>

                     </form>
                     <h1 className="projectDashboardNotes__update_head">UPDATE NOTE</h1>
                     <form  className="projectDashboardNotes__update_addForm" action="">
                          <input  placeholder="* title" className="projectDashboardNotes__update_addForm-title" type="text"/>
                          <textarea  placeholder="* description" className="projectDashboardNotes__update_addForm-description" type="text"></textarea>
                          <button type="submit" className="projectDashboardNotes__update_addForm-btn"> <i className="fa fa-pencil" aria-hidden="true"></i><span>Update Note</span></button>
                     </form>
                     <button type="submit" className="projectDashboardNotes__update_addForm-btn projectDashboardNotes__update_addForm-delete"> <i className="fa fa-trash" aria-hidden="true"></i><span>Delete Note</span></button>
                </div>
             </Modal>:null}
         </div>
      )
    }
  }


 export default ProjectDashboardNotes;
