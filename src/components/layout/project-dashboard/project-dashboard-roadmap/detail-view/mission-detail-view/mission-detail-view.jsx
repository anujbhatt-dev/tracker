import React, { Component } from 'react'
import AddMission from '../add-mission/add-mission';
import { CircularProgressbar,buildStyles,CircularProgressbarWithChildren  } from 'react-circular-progressbar';
import { NavLink } from 'react-router-dom'


class MissionDetailView extends Component {
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


      if(this.props.missionInsight==null){

      }else{

        progressValue=70;
      }

      if(progressValue<=40)
      progressStyle.pathColor='red'
      else if(progressValue<=70)
      progressStyle.pathColor='yellow'



        return (
              <div className="detailView">
                <div className="detailViewRow">

                 <div className="detailView__col1">
                    <div className="detailView__col1_row1">
                       <div className="detailView__col1_row1-id">{this.props.missionId}</div>
                       <div className="detailView__col1_row1-todo">
                           <div className="detailView__col1_row1-todo_text">STATUS</div>
                           <div className="detailView__col1_row1-todo_count">{this.props.status}</div>
                       </div>
                       <div className="detailView__col1_row1-high">
                           <div className="detailView__col1_row1-high_text">PRIORITY LEVEL</div>
                           <div className="detailView__col1_row1-high_count">{this.props.priority}</div>
                       </div>
                       <div className="detailView__col1_row1-tech">
                           <div className="detailView__col1_row1-tech_text">CATEGORY</div>
                           <div className="detailView__col1_row1-tech_count">{this.props.category}</div>
                       </div>
                    </div>
                    <br/><hr className="hr"/><br/><br/>

                    <div className="detailView__col1_row2">
                        <div>Added By: <strong>{this.props.addedBy}</strong></div>
                        <div>Starting Date: <strong>{this.props.sartingDate}</strong></div>
                    </div>
                    <div className="detailView__col1_row3">
                        <div>Added On: <strong>{this.props.addedOn}</strong></div>
                        <div>Ending Date: <strong>{this.props.endingDate}</strong></div>
                    </div>
                 </div>

                </div>
                <br/><hr  className="hr"/><br/><br/>

                <div  className="detailViewRow">
                   <div className="detailView__description">
                      <div className="detailView__description_head">
                         discription
                      </div>
                      <div className="detailView__description_des">{this.props.description}</div>
                   </div>
                   <div className="detailView__elements">
                   <div className="detailView__description_head">
                   <CircularProgressbar  styles={buildStyles({...progressStyle})}
                                       value={progressValue}/>
                        </div>
                        <div className="detailView__description_head">
                          Elements
                        </div>
                        <div>members: <strong>{this.props.memberCount}</strong></div>
                        <div>objectives: <strong>17</strong></div>
                        <div>completed objectives: <strong>4</strong></div>
                        <div>Notes: <strong>{this.props.notes}</strong></div>
                        <div>Links: <strong>{this.props.linkCount}</strong></div>
                   </div>
                </div>
                {this.props.children.length===0?
                 <NavLink to={"/projectDashboard/"+this.props.projectId+"/mission/"+this.props.missionId}>
                    <i className="fa fa-plane detailView__arrow"></i>
                 </NavLink>
              :null}

                <AddMission  projectId={this.props.projectId} missionId={this.props.missionId} type={"MISSION"}/>
              </div>
          )
      }
}

export default  MissionDetailView;
