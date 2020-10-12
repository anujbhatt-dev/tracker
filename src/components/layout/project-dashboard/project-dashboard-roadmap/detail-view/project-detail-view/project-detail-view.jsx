import React, { Component } from 'react'
import Modal from "../../../../../../UI/modal"
import AddMission from '../add-mission/add-mission'
import { CircularProgressbar,buildStyles,CircularProgressbarWithChildren  } from 'react-circular-progressbar';


 class ProjectDetailView extends Component {

  
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


    // if(this.props.missionInsight==null){

    // }else{
          
    //   progressValue=70;
    // }

    // if(progressValue<=40)
    // progressStyle.pathColor='red'
    // else if(progressValue<=70)
    // progressStyle.pathColor='yellow'
  
        return (
              <div className="detailView">
                <div className="detailViewRow">
  
                 <div className="detailView__col1">
                    <div className="detailView__col1_row1">
                       <div className="detailView__col1_row1-id">gdfgfhdfdfds4165464</div>
                       <div className="detailView__col1_row1-todo">
                           <div className="detailView__col1_row1-todo_text">Todo</div>
                           <div className="detailView__col1_row1-todo_count">56</div>
                       </div>
                       <div className="detailView__col1_row1-high">
                           <div className="detailView__col1_row1-high_text">Todo</div>
                           <div className="detailView__col1_row1-high_count">56</div>
                       </div>
                       <div className="detailView__col1_row1-tech">
                           <div className="detailView__col1_row1-tech_text">Todo</div>
                           <div className="detailView__col1_row1-tech_count">56</div>
                       </div>
                    </div>
                     <br/><hr/><br/><br/>
                    <div className="detailView__col1_row2">
                        <div>Added By: <strong>anuj bhatt</strong></div>
                        <div>Starting Date: <strong>02/12/2020</strong></div>
                    </div>
                    <div className="detailView__col1_row3">
                        <div>Added On: <strong>02/12/2020</strong></div>
                        <div>Ending Date: <strong>02/12/2020</strong></div>
                    </div>
                 </div>
                </div>
                <br/><hr/><br/><br/>

                <div  className="detailViewRow">
                   <div className="detailView__description">
                      <div className="detailView__description_head">
                         discription
                      </div>
                      <div className="detailView__description_des">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt temporibus rerum nemo unde aliquid maiores accusamus omnis delectus, corporis vitae, praesentium, incidunt sint dolorem facere quidem hic placeat nihil doloribus repudiandae magnam voluptatum similique officiis illum nostrum ducimus. Provident id unde ipsam deserunt ad sequi eligendi officia facilis, ullam asperiores!</div>
                   </div>
                   <div className="detailView__elements">

                   <div className="detailView__description_head">
                   <CircularProgressbar  styles={buildStyles({...progressStyle})}
                                       value={progressValue}/>
                        </div>
                        <div className="detailView__description_head">
                          Elements
                        </div>
                        <div>members: <strong>44</strong></div>
                        <div>objectives: <strong>44</strong></div>
                        <div>completed objectives: <strong>44</strong></div>
                        <div>Notes: <strong>44</strong></div>
                        <div>Links: <strong>44</strong></div>
                   </div>
                </div>
                <i className="fa fa-arrow-right detailView__arrow"></i>
                <AddMission projectId={this.props.projectId} type={"project"}/>
              </div>
          )
      }
    }
  

export default ProjectDetailView
