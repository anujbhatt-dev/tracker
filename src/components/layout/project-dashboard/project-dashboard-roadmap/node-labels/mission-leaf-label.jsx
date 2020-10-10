import React, { Component } from 'react'

 class MissionLeafLabel extends Component {
    render() {
        return (
            <div>
                Leaf
                <button onClick={()=>this.props.modalHandler("MISSIONLEAF",this.props)} >PRESS</button>

            </div>
        )
    }
}


export default MissionLeafLabel;