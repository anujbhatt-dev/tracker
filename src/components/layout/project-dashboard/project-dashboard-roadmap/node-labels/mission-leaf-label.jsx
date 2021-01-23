import React, { Component } from 'react'
import { CircularProgressbar,buildStyles,CircularProgressbarWithChildren  } from 'react-circular-progressbar';
import { NavLink } from 'react-router-dom';


 class MissionLeafLabel extends Component {


    state={
        progressStyle:{
                 
            rotation: 0.25,
                 strokeLinecap: 'butt',
                 textSize: '16px',
               pathTransitionDuration: 0.5,
               pathColor: `rgba(62, 152, 199, 70)`,
                textColor: '#f88',
                trailColor: '#d6d6d6',
                backgroundColor: '#3e98c7',
                trail: {
                    // Trail color
                    stroke: '#d6d6d6',
                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: 'butt',
                    // Rotate the trail
                    transform: 'rotate(0.25turn)',
                    transformOrigin: 'center center',
                  },
        }
    }

    render() {

       let progressStyle={
                 
            rotation: 0.25,
                 strokeLinecap: 'butt',
                 textSize: '16px',
               pathTransitionDuration: 0.5,
               pathColor: `green`,
                textColor: '#f88',
                trailColor: '#d6d6d6',
                backgroundColor: '#3e98c7',
                trail: {
                    // Trail color
                    stroke: '#d6d6d6',
                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: 'butt',
                    // Rotate the trail
                    transform: 'rotate(0.25turn)',
                    transformOrigin: 'center center',
                  },
        }

      let missionId=this.props.missionId;//.replace(".","$");

      

      if(this.props.missionInsight===null)
      return null;

     return (
         <div>
             <CircularProgressbarWithChildren  
              styles={buildStyles({...progressStyle,pathColor:this.props.missionInsight.completedObjectiveCount/this.props.missionInsight.objectiveCount*100<30?'red':this.props.missionInsight.completedObjectiveCount/this.props.missionInsight.objectiveCount*100<70?'yellow':'green'})}
              value={this.props.missionInsight.completedObjectiveCount/this.props.missionInsight.objectiveCount*100} >

                <i onClick={()=>this.props.modalHandler("MISSIONLEAF",this.props)} class="fa fa-chevron-right fa-3x"></i>
              
                {/* <NavLink to={"/projectDashboard/"+this.props.projectId+"/mission/"+missionId}>-></NavLink> */}

                {this.props.name}

                 </CircularProgressbarWithChildren>

            </div>
        )
    }
}


export default MissionLeafLabel;