import React, { Component } from 'react'
import MissionAddMission from '../mission-add-mission';


 class MissionLeafDetailView extends Component {


    componentDidMoun=()=>{
        
    }


    render() {

       // console.log(this.props)

        return (
            <div>
                Mission Leaf Detail View
                <MissionAddMission/>
                {this.props.missionId}
            </div>
        )
    }
}


export default MissionLeafDetailView;