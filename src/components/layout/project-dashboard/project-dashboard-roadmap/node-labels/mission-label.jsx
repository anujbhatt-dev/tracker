import React, { Component } from 'react'
import { CircularProgressbar,buildStyles,CircularProgressbarWithChildren  } from 'react-circular-progressbar';

class MissionLabel extends Component {


    state={
      
    }

    render() {


     let   progressStyle={
                 
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

      console.log("------ "+this.props)

      if(this.props.missionInsight===null)
         return null;

        return (
            <div>
                <CircularProgressbarWithChildren  
                 styles={buildStyles({...progressStyle,pathColor:this.props.missionInsight.completedObjectiveCount/this.props.missionInsight.objectiveCount*100<30?'red':this.props.missionInsight.completedObjectiveCount/this.props.missionInsight.objectiveCount*100<70?'yellow':'green'})}
                 value={this.props.missionInsight.completedObjectiveCount/this.props.missionInsight.objectiveCount*100} >

<i onClick={()=>this.props.modalHandler("MISSION",this.props)} class="fa fa-chevron-right fa-3x"></i>
                
                {this.props.name}

                 </CircularProgressbarWithChildren>
            </div>
        )
    }
}


export default  MissionLabel;
