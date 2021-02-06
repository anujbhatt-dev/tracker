
import React, { useState } from 'react'
import { Component } from 'react'

import { Jutsu } from 'react-jutsu'

class JistsiWindow extends Component{

state={
    join:false,
}

handleClick = () => {
    this.setState({join:true});
  }

endMeeting=()=>{

    alert("ended")
 this.setState({join:false})
 this.props.checkForLiveMeeting();

}


render=()=>{

  return this.state.join ? (
    <Jutsu
      roomName={"TestSagar"}
      displayName={"name"}
      password={'123'}
      onMeetingEnd={this.endMeeting}
      loadingComponent={<p>loading ...</p>}
      errorComponent={<p>Oops, something went wrong</p>}
      configOverwrite={{'disableInviteFunctions':'true'}}
      interfaceConfigOverwrite={{'HIDE_INVITE_MORE_HEADER': 'false'}}
      userInfo= {{
        email: 'email@jitsiexamplemail.com',
        displayName: 'John Doe'}
    }
      />
  ) : (
     <button onClick={this.handleClick} type='submit'>
        Join
      </button>

  )
}
}
export default JistsiWindow;