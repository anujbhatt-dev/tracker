import React, { Component } from 'react'
import { CircularProgressbar,buildStyles,CircularProgressbarWithChildren  } from 'react-circular-progressbar';


export default class UserProgress extends Component {

    progressStyle={
                 
        rotation: 0.25,
             strokeLinecap: 'butt',
             textSize: '16px',
           pathTransitionDuration: 0.5,
           pathColor: `rgba(62, 152, 199, 70)`,
            textColor: '#f88',
            trailColor: '#d6d6d6',
            backgroundColor: 'white',
            trail: {
                // Trail color
                stroke: 'white',
                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                strokeLinecap: 'butt',
                // Rotate the trail
                transform: 'rotate(0.25turn)',
                transformOrigin: 'center center',
              },
    }

    render() {
        return (
            <div>
                 <CircularProgressbar  
                   styles={buildStyles({...this.progressStyle,pathColor:this.props.user.userInsights.completedObjectiveCount/this.props.user.userInsights.objectiveCount*100<30?'red':this.props.user.userInsights.completedObjectiveCount/this.props.user.userInsights.objectiveCount*100<70?'yellow':'green'})}
                   value={this.props.user.userInsights.completedObjectiveCount/this.props.user.userInsights.objectiveCount*100} 
                  />
            </div>
        )
    }
}
