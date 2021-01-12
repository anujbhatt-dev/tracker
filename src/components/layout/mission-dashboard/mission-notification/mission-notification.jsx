import axios from 'axios'
import React, { Component } from 'react'

export default class MissionNotification extends Component {
 
    state={
        notification:[],
    }

    componentDidMount=()=>{
        
axios.get("/v1/mission/"+this.props.missionId+"/notification")
.then(res=>{this.setState({notification:res.data})})
.catch(err=>alert("Something went wrong "+err ))

    }
    
    render() {

        return (
            <div className="projectDashboard__col2_activities">
        
        {this.state.notification.map(notification=>
        
        <div  className="projectDashboard__col2_activities--div">{notification.message}</div> 
        
        )    
        }
     </div>
        )
    }
}
