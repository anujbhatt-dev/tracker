import React, { Component } from 'react'
import Modal from '../../../../UI/modal';
import axios from 'axios';


 class StartConversation extends Component {


    state={
        conversation:"",
        title:"",
        startedOver:""
    }

    componentDidMount=()=>{
                this.setState({startedOver:this.props.startedOver})
    }

    startConversationHandler=(e)=>{

        e.preventDefault();

        if(this.props.category==="PROJECT"){

            axios.post("");

        }else{
            axios.post("/v1/mission/"+this.props.missionId+"/conversation",this.state)
            .then(res=>console.log(res.data));
        }
    }

    onChangeHandler=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }



    render() {
        return (
            <Modal modalHandler={this.props.modalHandler}>
             <div className="projectDashboardNotes__update">
                     <h1 className="projectDashboardNotes__update_head">Conversation</h1>
                     <form  onSubmit={(e)=>this.startConversationHandler(e)} className="projectDashboardNotes__update_addForm" action="">
                     <input value={this.state.startedOver} onChange={(e)=>this.onChangeHandler(e)} name="startedOver" placeholder="startedOver" className="projectDashboardNotes__update_addForm-title" type="text"/>

                          <input value={this.state.title} onChange={(e)=>this.onChangeHandler(e)} name="title" placeholder="title" className="projectDashboardNotes__update_addForm-title" type="text"/>
                          <textarea  value={this.state.conversation} onChange={(e)=>this.onChangeHandler(e)} name="conversation" placeholder="conversation" className="projectDashboardNotes__update_addForm-description" type="text"></textarea>
                          <button  type="submit" className="projectDashboardNotes__update_addForm-btn"> <i className="fa fa-upload" aria-hidden="true"></i><span>start</span></button>
                          
                     </form>
                      </div>
            </Modal>
        )
    }
}


export default StartConversation;
