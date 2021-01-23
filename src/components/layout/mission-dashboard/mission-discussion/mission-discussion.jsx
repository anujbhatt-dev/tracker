import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Conversation from '../mission-dashboard-conversation/conversation/conversation'
import style from "./mission-discussion.css"


export default class MissionDiscussion extends Component {


    state={
        newConversation:{
            title:"",
            conversation:"",
        },

        conversations:[],
    }

    componentDidMount=()=>{

        axios.get("/v1/mission/"+this.props.missionId+"/conversation")
        .then(res=>this.setState({conversations:res.data}))
        .catch(err=>alert(err));

    }


    addNewConversation=(e)=>{
        e.preventDefault();

        axios.post("/v1/mission/"+this.props.missionId+"/conversation", this.state.newConversation)
        .then(res=>{
                   let newConversations=[res.data,...this.state.conversations];
                   this.setState({conversations:newConversations, newConversation:{title:"", conversation:""}});
        })
        .catch(err=>alert(err));

    }

    onChangeHandler=(e)=>{
        let conv={...this.state.newConversation};

        conv[e.target.name]=e.target.value;
        this.setState({newConversation:conv});

    }

    render() {
        return (
            <div class="comment_block">
                <div class="create_new_comment">
{/* 
                    <div class="user_avatar">
                        <img src="https://s3.amazonaws.com/uifaces/faces/twitter/BillSKenney/73.jpg" />
                    </div> */}
                    <form onSubmit={this.addNewConversation} class="input_comment">
                        <h3>Start A conversation</h3>
                        <input name="title" onChange={this.onChangeHandler} value={this.state.newConversation.title} type="text" placeholder="Topic" />
                        <textarea name="conversation" onChange={this.onChangeHandler} value={this.state.newConversation.conversation} type="text" placeholder="Comment/Description" cols="70" rows="10" />
                         <input type="submit" value="START" id=""/>
                    </form>

                </div>

    <br/><br/>

               

               {this.state.conversations.map(conversation=>
                
                
                
                
               <>
                <div class="new_comment">

                    <ul class="user_comment">

                        <div class="user_avatar">
                            <img src={conversation.startedByImage} />
                        </div>
                        <div class="comment_body">
                        <p><div class="replied_to">
                                    <p>
                                        <span class="user">{conversation.startedBy}:</span>
                                        <h3>{conversation.title}</h3>
                                   {conversation.conversation}
                             </p></div>
                                </p></div>

                        <div class="comment_toolbar">

                            <div class="comment_details" style={{color:'black'}}>
                                <ul>
                                    <li style={{color:'black'}}><i class="fa fa-clock-o"></i> {conversation.startedOn.substring(conversation.startedOn.indexOf('::')+2)}</li>
                                    <li style={{color:'black'}}><i class="fa fa-calendar"></i> {conversation.startedOn.substring(0,conversation.startedOn.indexOf('::'))}</li>
                                    <li style={{color:'black'}}><i class="fa fa-pencil"></i> <span class="user">{conversation.startedBy}</span></li>
                                </ul>
                            </div>
                            <div class="comment_tools">
                                <ul>
                                    <li style={{color:'black'}}><i class="fa fa-share-alt"></i></li>
                                    <li style={{color:'black'}}> <Link to={"discussion/"+conversation.id+"/comment"}><i class="fa fa-reply"></i></Link> </li>
                                    <li style={{color:'black'}}><i class="fa fa-heart love"></i></li>
                                </ul>
                            </div>

                        </div>
                     </ul>
                 </div>
                  <br/><br/>
                  </>
                  )}


            </div>
        )
    }
}
