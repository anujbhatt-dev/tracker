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

      let progressValue=2;


      if(this.props.missionInsight==null){

      }else{
            
        progressValue=70;
      }

      if(progressValue<=40)
      progressStyle.pathColor='red'
      else if(progressValue<=70)
      progressStyle.pathColor='yellow'



      let missionId=this.props.missionId;//.replace(".","$");

      

        return (
            <div>
                <CircularProgressbarWithChildren  styles={buildStyles({...progressStyle})}
                                       value={progressValue} >

                <i onClick={()=>this.props.modalHandler("MISSIONLEAF",this.props)} class="fa fa-chevron-right fa-3x"></i>
              
                {/* <NavLink to={"/projectDashboard/"+this.props.projectId+"/mission/"+missionId}>-></NavLink> */}

                 </CircularProgressbarWithChildren>

            </div>
        )
    }
}


export default MissionLeafLabel;