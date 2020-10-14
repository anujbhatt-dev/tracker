import React, {Component} from "react"
import { CircularProgressbar,buildStyles,CircularProgressbarWithChildren  } from 'react-circular-progressbar';
import axios from "axios";


  class ProjectBar extends Component{


    state={

    }



    componentDidMount=()=>{

      axios.get("/v1/project/"+this.props.projectId+"/detail")
      .then(res=>this.setState({...res.data}))

    }


    render(){




        
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
  
  
  
        let progressValue=2;
  
        if(!this.state.projectInsight)
        return null;

      return (
            <div className="projectBar">
                
                
               <div className="projectBar__img">
                   {/* <img src="" alt=""/> */}
                 <CircularProgressbar  styles={buildStyles({...progressStyle})}
                                       value={progressValue}/>
                 
               </div>
               
               <div className="projectBar__details">
                   <div className="projectBar__details_col1">
      <div className="projectBar__details_col1-div"><span className="projectBar__details_col1-div_first">{this.state.projectId}</span></div>
      <div className="projectBar__details_col1-div"><span className="projectBar__details_col1-div_first">{this.state.projectName}</span></div>
      <div className="projectBar__details_col1-div"><span className="projectBar__details_col1-div_first">Creator</span><span className="projectBar__details_col1-div_second">{this.state.createBy}</span></div>
      <div className="projectBar__details_col1-div"><span className="projectBar__details_col1-div_first">Added On</span><span className="projectBar__details_col1-div_second">{this.state.addOn}</span></div>
      <div className="projectBar__details_col1-div"><span className="projectBar__details_col1-div_first">Starting Date</span><span className="projectBar__details_col1-div_second">{this.state.startingDate}</span></div>
      <div className="projectBar__details_col1-div"><span className="projectBar__details_col1-div_first">Ending Date</span><span className="projectBar__details_col1-div_second">{this.state.endingDate}</span></div>
                   </div>
                   <div className="projectBar__details_col2">
                        <div className="projectBar__details_col2-element">Elements</div>
                        
                        <br/>
                        <div className="projectBar__details_col2-div">
      <div className="projectBar__details_col1-div"><span className="projectBar__details_col1-div_first">Missions</span><span className="projectBar__details_col1-div_second">{this.state.missionCount}</span></div>
                            <div className="projectBar__details_col1-div"><span className="projectBar__details_col1-div_first">Notes</span><span className="projectBar__details_col1-div_second">{this.state.projectInsight.noteCount}</span></div>
                        </div>
                        <div className="projectBar__details_col2-div">
                            <div className="projectBar__details_col1-div"><span className="projectBar__details_col1-div_first">Links</span><span className="projectBar__details_col1-div_second">{this.state.projectInsight.linkCount}</span></div>
                            <div className="projectBar__details_col1-div"><span className="projectBar__details_col1-div_first">conversations</span><span className="projectBar__details_col1-div_second">{4}</span></div>
                        </div>
                        <br/>
                        <hr className="hr"/>
                        <br/>
                        <div className="projectBar__details_col2-div">
                            <div className="projectBar__details_col1-div"><span className="projectBar__details_col1-div_first">Members</span><span className="projectBar__details_col1-div_second">{this.state.memberCount}</span></div>
                            <div className="projectBar__details_col1-div"><span className="projectBar__details_col1-div_first">Chief</span><span className="projectBar__details_col1-div_second">{this.state.chiefCount}</span></div>
                        </div>
                        <div className="projectBar__details_col2-last"><div className="projectBar__details_col1-div"><span className="projectBar__details_col1-div_first">Soilder</span><span className="projectBar__details_col1-div_second">{this.state.soilderCount}</span></div></div>
                   </div>
               </div>
            </div>
      )
    }
  }


 export default ProjectBar;
