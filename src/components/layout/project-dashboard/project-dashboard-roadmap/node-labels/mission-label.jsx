import React, { Component } from 'react'
import { CircularProgressbar,buildStyles,CircularProgressbarWithChildren  } from 'react-circular-progressbar';

class MissionLabel extends Component {


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
        return (
            <div>
                <CircularProgressbarWithChildren  styles={buildStyles({...this.state.progressStyle})}
                                       value={70} >

                  Mission
                <button onClick={()=>this.props.modalHandler("MISSION",this.props)} >PRESS</button>
                
                 </CircularProgressbarWithChildren>
            </div>
        )
    }
}


export default  MissionLabel;
