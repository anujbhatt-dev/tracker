import axios from 'axios'
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'


 class MissionComment extends Component {


    state={
     conversationId:null,   
     
     conversation:null,
    
     comment:{
         comment:"",
         description:""
     }
    }

    componentDidMount=()=>{
         axios.get("/v1/mission/conversation/"+this.props.match.params.discussionId)
         .then(res=>this.setState({conversation:res.data, conversationId:this.props.match.params.discussionId}))
         .catch(err=>alert(err));
    }


    onChangeHandler=(e)=>{

        let newComment={...this.state.comment};

        newComment[e.target.name]=e.target.value;
        this.setState({comment:{...newComment}});
     }

     deleteCommentHandler=(id,i)=>{
         
        axios.delete("/v1/mission/comment/"+id)
        .then(res=>{
            let newConversation={...this.state.conversation};
            newConversation["comments"].splice(i,1);
            this.setState({conversationId:newConversation});
        })
        .catch(err=>alert(err))
     }


     onSubmitHandler=(e)=>{

        e.preventDefault();

        axios.post("/v1/mission/conversation/"+this.state.conversationId+"/comment", this.state.comment)
        .then(res=>{
            let comments=[res.data,...this.state.conversation.comments];
            let newConversation={...this.state.conversation};
            newConversation["comments"]=comments;
            this.setState({conversation:newConversation,  comment:{
                comment:"",
                description:""
            }});
        })
        .catch(err=>alert(err))
     }

    render() {

        return (
            <div class="comment_block">

<br/><br/>


{this.state.conversationId===null?null:

this.state.conversation.comments.map(
    (comment,i)=>

        <>    <div class="new_comment">

                <ul class="user_comment">

                    <div class="user_avatar">
                        <img src={comment.addedByImage}/>
                    </div>
                    <div class="comment_body">
                    <p><div class="replied_to">
                                <p>
                                    <span class="user">{comment.addedBy}:</span>
                                    <h3>{comment.comment}</h3>
                                    {comment.description}
                        </p></div>
                            </p></div>

                    <div class="comment_toolbar">

                        <div class="comment_details">
                            <ul>
                                    <li style={{color:'black'}}><i class="fa fa-clock-o"></i> {comment.addedOn.substring(comment.addedOn.indexOf('::')+2)}</li>
                                    <li style={{color:'black'}}><i class="fa fa-calendar"></i> {comment.addedOn.substring(0,comment.addedOn.indexOf('::'))}</li>
                                    <li style={{color:'black'}}><i class="fa fa-pencil"></i> <span class="user">{comment.addedBy}</span></li>
                                  </ul>
                        </div>
                        <div class="comment_tools">
                            <ul>
                                <li style={{color:'black'}}><i class="fa fa-share-alt"></i></li>
                                <li style={{color:'black'}}><i class="fa fa-heart love"></i></li>
                                <li style={{color:'black'}} onClick={()=>this.deleteCommentHandler(comment.id,i)}><i class="fa fa-trash"></i></li>

                            </ul>
                        </div>

                    </div>
                 </ul>
             </div> <br/><br/>
             </>
)}
    

             <div class="create_new_comment">

<form class="input_comment" onSubmit={this.onSubmitHandler}>
    <input name="comment" value={this.state.comment.comment}  onChange={this.onChangeHandler} type="text" placeholder="Join the conversation.." />
    <textarea name="description" value={this.state.comment.description} onChange={this.onChangeHandler} placeholder="description" cols="60" rows="10"></textarea>
   <br/><br/>
    <input type="submit" value='POST'/>
</form>

</div>



        </div>
        )
    }
}


export default withRouter(MissionComment);