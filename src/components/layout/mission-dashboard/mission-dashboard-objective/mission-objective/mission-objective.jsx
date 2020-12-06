import React, { Component } from 'react'
import Modal from '../../../../../UI/modal'
import MissionUpdate from './mission-update/mission-update'
import StartConversation from '../../start-conversation/start-conversation'



 class MissionObjective extends Component {


    state={
        modalShow:false,
        startConversation:false,
    }


    modalClosehandler=()=>{
        this.setState({modalShow:false})
    }

    modalOpenHandler=()=>{
        this.setState({modalShow:true})
        
    }

    startConversation=()=>{
        this.setState({startConversation:true})
    }

    closeConversation=()=>{
        this.setState({startConversation:false})
    }


    render() {

         console.log(this.props)

        return (
            <>
           {this.state.modalShow? <Modal modalHandler={this.modalClosehandler}>
                <MissionUpdate {...this.props} />
            </Modal>:null}
            <div>
                {Object.keys(this.props).map(data=><sapn>{this.props[data]}</sapn>)}
                <button onClick={this.modalOpenHandler} >Update</button>
                <button onClick={this.startConversation} >Start Conversation</button>
            </div>
            {this.state.startConversation?<StartConversation startedOver={this.props.missionId+" "+this.props.description} missionId={this.props.missionId} category={"MISSION"} modalHandler={this.closeConversation} />:null}
            </>
        )
    }
}


export default MissionObjective