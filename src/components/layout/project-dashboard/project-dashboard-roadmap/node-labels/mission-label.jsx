import React, { Component } from 'react'

class MissionLabel extends Component {
    render() {
        return (
            <div>
                Mission
                <button onClick={()=>this.props.modalHandler("MISSION",this.props.data)} >PRESS</button>

            </div>
        )
    }
}


export default  MissionLabel;
