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
        
        <div style={{width:'100%'}} className="projectDashboard__col2_activities">
        
        <table style={{ width:"100%", border:"0", align:"center", cellpadding:"0", cellspacing:"0"}}>
        {this.state.notification.map(notification=>
 <tr
          style={{'border-bottom':'1px solid #ebebeb', 'margin-bottom':'26px', 'padding-bottom':'29px', 'display':'block'}}>
          <td style={{ width:"20%", height:"20%"}}>
            <p style={{height: '64px',  width: '64px', 'text-align':'center', display:'block'}}>
              <img src="https://api.adorable.io/avatars/60/abott@adorable.png" alt="Profile Picture" style={{'border-radius':'50%'}}/>
            </p>
          </td>
          <td style={{'vertical-align':'top',width:"100%"}}>
            <h3 style={{color: '#4d4d4d', 'font-size': '10px', 'font-weight': 100, 'line-height': '10px', 'margin-bottom': '2px', 'margin-top':0}}>
                 {notification.message}
                        </h3>
            <span style={{color:'#737373', 'font-size':'7px'}}>5 Minutes Ago</span>
          </td>
        </tr>
          )    
       }

      </table>
       
     
    </div>
       
        )    
        }
     </div>
        )
    }
}
