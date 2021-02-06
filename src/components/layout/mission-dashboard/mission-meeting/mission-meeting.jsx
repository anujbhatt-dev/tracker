import React, { Component } from 'react';
import { Form, Button, TextField, Dashboard } from 'precise-ui';
import axios from 'axios';
import JistsiWindow from "./jitsi/jitsi"

export default class MissionMeeting extends Component {


    state={

        live:false,
        meeting:{
            name:"",
            displayName:"",    
            password:"",
        },


    }


    // componentDidMount=()=>{

    //     axios.get("/v1/mission/meeting/"+this.props.missionId)
    //     .then(res=>{
            
            

    //     })
    //     .catch(err=>
    //         alert("Oops !"))

    // }

    checkForLiveMeeting=()=>{
        //     axios.get("/v1/mission/meeting/"+this.props.missionId)
    //     .then(res=>{
            
            

    //     })
    //     .catch(err=>
    //         alert("Oops !"))

    // }
    }

    startNewMeeting=(e)=>{
        
        //axios call;
           //axios end meeting
            // axios.post("/v1/mission/meeting/"+this.props.missionId, meeting)
            //     .then(res=>{
                    
                    
        
            //     })
            //     .catch(err=>
            //         alert("Oops !"))
        
            // }
         // then
        this.setState({live:true, meeting:{name:"test", displayName:"DISPLAY NAME", password:"123"}});


    }


     removeMeeting=()=>{
            //axios end meeting
            // axios.delete("/v1/mission/meeting/"+this.props.missionId)
            //     .then(res=>{
                    
                    
        
            //     })
            //     .catch(err=>
            //         alert("Oops !"))
        
            // }
     }


    render() {


        const style = {
            height: '100%',
            width: '100%',
            background: 'white',
          };
          const tiles = [
            { id: '1', rowSpan: 3, colSpan:5},
            { id: '2', rowSpan: 10, colSpan:1},
            { id: '3', rowSpan: 1,colSpan:4 },
            { id: '4', rowSpan: 3,colSpan:4 },
          ];
        
  
        if(this.state.live){
            return (

                <Dashboard defaultTiles={tiles} rowHeight={150} disabled>
                    <div style={style}>  <JistsiWindow  {... this.state.meeting} checkForLiveMeeting={this.checkForLiveMeeting}  /></div>
                  <div></div>
                    <div style={style}>USE PASSWORD: {this.state.meeting.password}</div>
                    <div style={style}> <Button icon="Close" theme={{ buttonIconPosition: 'left'}} buttonStyle='secondary'>END MEETING FOR ALL</Button></div>
              </Dashboard>
                
            )
        }



        return (

            <>

<h2>NO LIVE MEETING </h2>
    
    <h3>Start A New Meeting</h3>
            <Form onSubmit={e =>this.startNewMeeting(e)}>
            <div>
              Topic:
            </div>
            <div>
              <TextField name="topic" />
            </div>
            <div>
              Description:
            </div>
            <div>
              <TextField name="description" />
            </div>
            <div>
              <Button>Create</Button>
            </div>
          </Form>
          </>
        )
    }
}
