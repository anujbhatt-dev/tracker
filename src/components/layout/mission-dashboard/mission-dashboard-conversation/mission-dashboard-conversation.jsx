import React, { Component } from 'react'
import axios from 'axios'
import Conversation from './conversation/conversation'



 class MissionDashboardConversation extends Component {
   

    state={
        data:[],
    }

    componentDidMount=()=>{

        axios.get("/v1/mission/"+this.props.missionId+"/conversation")
        .then(res=> this.setState({data:res.data}));
        
    }


   
    render() {
        return (
            <div>
                <h1>Conversation</h1>
                {this.state.data.map(conversation=><Conversation {...conversation}/>)}

            </div>
        )
    }
}


export default MissionDashboardConversation