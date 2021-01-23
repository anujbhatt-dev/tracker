import React, { Component } from 'react'
import { CircularProgressbar,CircularProgressbarWithChildren,buildStyles } from 'react-circular-progressbar';


 class MissionMember extends Component {
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



        let progressValue=2;


      if(this.props.projectInsight==null){

      }else{

        progressValue=70;
      }

      if(progressValue<=40)
      progressStyle.pathColor='red'
      else if(progressValue<=70)
      progressStyle.pathColor='yellow'

        {
            return (

            <div key={this.props.member.member.user.email} className="projectDashboardNotes__notes" >
                       <div  className="projectDashboardMember__member">
                           <div className="createProjectMember__result_item-fig_img">
                           <CircularProgressbarWithChildren
              styles={buildStyles({...progressStyle,pathColor:this.props.member.missionMemberInsight.completedObjectiveCount/this.props.member.missionMemberInsight.objectiveCount*100<30?'red':this.props.member.missionMemberInsight.completedObjectiveCount/this.props.member.missionMemberInsight.objectiveCount*100<70?'yellow':'green'})}
              value={this.props.member.missionMemberInsight.completedObjectiveCount/this.props.member.missionMemberInsight.objectiveCount*100} >
              <img
                         className="createProjectMember__result_item-fig_img createProjectMember__result_item-fig_img--circle"
                         src={this.props.member.member.user.thumbnailUrl?this.props.member.member.user.thumbnailUrl:this.props.member.member.user.imageUrl}
                        //  src="https://i.ibb.co/nbGYCsw/me.jpg"
                          alt=""/>
                                    </CircularProgressbarWithChildren>
                           </div>
                         <div className="projectDashboardMember__member_textWrapper">
                             <div className="projectDashboardMember__member_text">{this.props.member.member.user.email}</div>
                             <div className="projectDashboardMember__member_text">{this.props.member.member.user.firstName} {this.props.member.member.user.lastName}</div>
                             <div className="projectDashboardMember__member_text">{this.props.member.member.user.authority}</div>
                         </div>
                         <div className="projectDashboardMember__member_date"><strong>Added on:</strong> {this.props.member.member.user.addedOn}</div>
                         <div onClick={()=>this.props.modalHandler(this.props.member,this.props.i)} className="title__arrow"><i className="fa fa-ellipsis-h" aria-hidden="true"></i></div>
                       </div>
              </div>
            )
          }
    }
}


export default MissionMember;
