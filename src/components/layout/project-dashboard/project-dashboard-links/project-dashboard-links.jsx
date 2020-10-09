import React, {Component} from "react"
import { withRouter } from "react-router-dom"
import axios from "axios";
import Modal from "../../../../UI/modal";


  class ProjectDashboardLinks extends Component{

    state={
      links:[
        {
          link:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum quaerat aliquid labore voluptate rem dolorum corporis dolores, modi esse accusantium!",
          description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero similique, eum distinctio, nam laboriosam et at fugiat corporis voluptates praesentium, deserunt magni fuga vel minima exercitationem ipsam sunt deleniti nesciunt delectus ad odio facilis. Quod dolorum voluptatem quo accusamus recusandae, expedita omnis rem impedit! Tenetur error eius earum recusandae alias blanditiis praesentium explicabo inventore, incidunt magni odit ducimus atque voluptatibus dicta, suscipit tempore, necessitatibus aspernatur perferendis ab neque illum minus adipisci doloremque ullam animi? Distinctio inventore maiores sunt animi adipisci aliquid at soluta totam, voluptatibus, accusantium modi, tempore! Possimus aperiam temporibus magni libero id optio odio molestias deserunt, non quidem.",
          toggle:false
        }
      ],
      show:false,
      selectedLink:{},
      newLink:{},
      selectedIndex:-1,
    }

   
    modalHandler=(link,i)=>{
      
      this.setState({
        show:"UPDATE",
        selectedLink:{... link},
        selectedIndex:i,
      })
    }

    modalCloseHandler=()=>{
      this.setState({
        show:false
      })
    }


    componentDidMount=()=>{
      axios.get("/v1/project/"+this.props.projectId+"/link")
      .then(res=>{
     this.setState({links:res.data});
      })

     }

     selectedOnChangeHandler=(e)=>{
        
      let newLink= {... this.state.selectedLink};

      newLink[e.target.name]=e.target.value;

      this.setState({selectedLink:{... newLink}});
    }


    newOnChangeHandler=(e)=>{
        
      let newLink= {... this.state.newLink};

      newLink[e.target.name]=e.target.value;

      this.setState({newLink:{... newLink}});
    }


    newLinkSubmitHandler=(e)=>{
      console.log(this.state);
      e.preventDefault();
    }

    updateLinkSubmitHandler=(e)=>{
      e.preventDefault();


      //axios call 
      //inside then
          
       let newLinks=[...this.state.links];
       newLinks[this.state.selectedIndex]=this.state.selectedLink;

       console.log(this.state.selectedIndex)
       this.setState({links:newLinks,show:false});



    }

    toggleHandler=(i)=>{
       const newLinks =this.state.links
       newLinks[i].toggle = !newLinks[i].toggle
       this.setState({
           notes:[...newLinks]
       })
    }

    render(){


      return (
        <div className="projectDashboardNotes">
                     <button onClick={()=>this.setState({show:"ADD"})}>ADD</button>

            {this.state.links.map((link,i)=>{
              return <div key={link.title+i} className="projectDashboardNotes__notes">
                         <div className="title">
                           <a href={link.title} className="title__text">{link.link}</a>
                           <div>
                              <div onClick={()=>this.modalHandler(link,i)}  className="title__arrow"><i class="fa fa-ellipsis-h" aria-hidden="true"></i></div>
                              <div onClick={()=>this.toggleHandler(i)}  className="title__arrow"><i className="fa fa-angle-double-down" aria-hidden="true"></i></div>
                           </div>
                         </div>
                         <div style={!link.toggle?{display:"none"}:{display:"block"}} className="description">{link.description}</div>
                      </div>
            })}
           {this.state.show?
                this.state.show==="ADD"?<Modal modalHandler={this.modalCloseHandler}>
                <div className="projectDashboardNotes__update">
                     <h1 className="projectDashboardNotes__update_head">ADD Link</h1>
                     <form  onSubmit={(e)=>this.newLinkSubmitHandler(e)} className="projectDashboardNotes__update_addForm" action="">
                          <input value={this.state.newLink.link} onChange={(e)=>this.newOnChangeHandler(e)} name="link" placeholder="* title" className="projectDashboardNotes__update_addForm-title" type="text"/>
                          <textarea  value={this.state.newLink.description} onChange={(e)=>this.newOnChangeHandler(e)} name="description" placeholder="* description" className="projectDashboardNotes__update_addForm-description" type="text"></textarea>
                          <button  type="submit" className="projectDashboardNotes__update_addForm-btn"> <i className="fa fa-upload" aria-hidden="true"></i><span>New Note</span></button>

                     </form>
                      </div>
             </Modal>:
             <Modal modalHandler={this.modalCloseHandler}>
             <div className="projectDashboardNotes__update">
            <h1 className="projectDashboardNotes__update_head">UPDATE link</h1>
             <form onSubmit={(e)=>this.updateLinkSubmitHandler(e)}   className="projectDashboardNotes__update_addForm" action="">
                  <input value={this.state.selectedLink.link} onChange={(e)=>this.selectedOnChangeHandler(e)} name="link" placeholder="* title" className="projectDashboardNotes__update_addForm-title" type="text"/>
                  <textarea  value={this.state.selectedLink.description} onChange={(e)=>this.selectedOnChangeHandler(e)} name="description" placeholder="* description" className="projectDashboardNotes__update_addForm-description" type="text"></textarea>
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


 export default withRouter(ProjectDashboardLinks);
