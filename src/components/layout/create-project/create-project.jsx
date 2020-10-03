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
      links:[{
        link:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, iste!",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod expedita beatae magnam reprehenderit delectus consequatur ipsa quo fuga nihil saepe, error, adipisci accusamus. Neque architecto officiis voluptas iusto deleniti recusandae rem ipsam laboriosam. Dolore, minus praesentium, dolor similique maxime illum consectetur distinctio tenetur facere nihil repellat animi necessitatibus assumenda cumque, in id voluptatem. Voluptas beatae culpa minus reiciendis tempore"
      }],
      notes:[
      {
        title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, illo.",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque ipsam, doloremque fugiat suscipit exercitationem dolorum consequatur necessitatibus mollitia iure adipisci, dolores temporibus voluptates modi eos est repudiandae quia omnis corporis. Numquam atque nisi sed culpa voluptates debitis aliquam possimus doloribus ipsa! Saepe consectetur quibusdam tempore reiciendis laboriosam assumenda eligendi delectus atque, nam minus voluptatum sit, sint laborum deserunt",
      }
    ],
      linkInput:{
        link:"",
        description:""
      },
      noteInput:{
        title:"",
        description:"",
      }
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


     // *******************Note handlers

    notesChangeHandler=(e)=>{
      const newState = this.state
      newState.noteInput[e.target.name]= e.target.value
      this.setState({
        ...newState
      })
    }

    addNoteHandler=()=>{
       let newState= this.state
       if(newState.noteInput.title.length!==0 && newState.noteInput.description.length!==0){
         newState.notes.push(newState.noteInput);
         newState.noteInput={title:"",description:""};
         this.setState({
           ...newState
         })
         let myDiv = document.getElementById("createProjectMain__col2_row");
         // windo.scrollBy(0,100);
        // alert(myDiv.clientHeight)
        // window.scrollTo({top:myDiv.clientHeight,behavior:"smooth"})
         // this.updateParentFaq();
       }else{
         alert("both fields are neccessary")
       }
     }


     removeNoteHandler=(i)=>{
      let newState = this.state
      newState.notes.splice(i,1);
      this.setState({
         ...newState
      })
      // this.updateParentFaq();
    }


    // *******************Link handlers

    linksChangeHandler=(e)=>{
      const newState = this.state
      newState.linkInput[e.target.name]= e.target.value
      this.setState({
        ...newState
      })
    }

    addLinkHandler=()=>{
       let newState= this.state
       if(newState.linkInput.link.length!==0 && newState.linkInput.description.length!==0){
         newState.links.push(newState.linkInput);
         newState.linkInput={link:"",description:""};
         this.setState({
           ...newState
         })
         // let myDiv = document.getElementById("createProjectMain__col2_row");
         // windo.scrollBy(0,100);
        // alert(myDiv.clientHeight)
        // window.scrollTo({top:myDiv.clientHeight,behavior:"smooth"})
         // this.updateParentFaq();
       }else{
         alert("both fields are neccessary")
       }
     }


     removeLinkHandler=(i)=>{
      let newState = this.state
      newState.links.splice(i,1);
      this.setState({
         ...newState
      })
      // this.updateParentFaq();
    }


    render(){
      return (
        <div className="createProjectWrapper">
           <form autocomplete="off" onSubmit={this.createProject} className="createProject">
                   <CreateProjectMain
                   notesChangeHandler={this.notesChangeHandler}
                   addNoteHandler={this.addNoteHandler}
                   removeNoteHandler={this.removeNoteHandler}
                   linksChangeHandler={this.linksChangeHandler}
                   addLinkHandler={this.addLinkHandler}
                   removeLinkHandler={this.removeLinkHandler}
                   noteInput={this.state.noteInput}
                   linkInput={this.state.linkInput}
                   links={this.state.links}
                   notes={this.state.notes}
                   data={this.state}
                   updateHandler={this.updateHandler}/>
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
