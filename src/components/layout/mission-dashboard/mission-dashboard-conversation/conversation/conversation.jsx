import React, { Component } from 'react'
import axios from 'axios';


class Conversation extends Component {

    state={
        comment:"",
        description:"",
    }

    submitComment=(e)=>{
        e.preventDefault();
        axios.post("/v1/mission/conversation"+this.props.id+"/comment",)
    }

    onChangeHandler=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }

    render() {
        return (
            <div>
                {this.props.title}
                {this.props.description}
                {this.props.comments.map((comment,i)=>(i+1))}
            
            <input onChange={((e)=>this.onChangeHandler(e))} type="text" name="comment" value={this.state.comment}/>
            <input onChange={((e)=>this.onChangeHandler(e))} type="text" name="description" value={this.state.description}/>

            <button onClick={(e)=>this.submitComment(e)}>Submit</button>
            
            </div>

        )
    }
}



export default Conversation;