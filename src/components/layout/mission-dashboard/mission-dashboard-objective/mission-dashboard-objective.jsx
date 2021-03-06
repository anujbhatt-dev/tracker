import React, {Component} from "react"
import Modal from "../../../../UI/modal"
import AddObjective from "./add-objective/add-objective"
import axios from "axios"
import MissionObjective from "./mission-objective/mission-objective"


  class MissionDashboardObjective extends Component{

    state={
      r1b1:["TODO","COMPLETED","IN-PROGRESS", "NEXT"],
      r1b2:["TECHNICAL","STRATIGICAL","BUSSINESS","OPTIMIZATION","BRAINSTORMING","BUG-FIXING"],
      r1b3:["LOW","MEDIUM","HIGH","CRITICAL"],
      r1b4:["PRIORITY","LATEST","OLDEST","DEADLINE"],
      objectives:[],
      modalShow:false,
    }


    componentDidMount=()=>{
        axios.get("/v1/mission/"+this.props.missionId+"/objective")
        .then(res=>this.setState({objectives:res.data}));
    }


    modalCloseHandler=()=>{
        this.setState({modalShow:false});
    }


    modalOpenHandler=()=>{
        this.setState({modalShow:true});
    }

    render(){
      const r1b1 = Math.ceil(this.state.r1b1.length/4)
      const r1b2 = Math.ceil(this.state.r1b2.length/4)
      const r1b3 = Math.ceil(this.state.r1b2.length/4)

      return (
          <>
          {this.state.modalShow?<Modal modalHandler={this.modalCloseHandler}>
            <AddObjective missionId={this.props.missionId}/>
          </Modal>:null}
         <div className="missionDashboardObjective">
             <div className="missionDashboardObjective__r1">
                <div  className="missionDashboardObjective__r1_b1">
                    <div className="missionDashboardObjective__head">status</div>
                     {this.state.r1b1.map((item,i)=>{
                  return <div className="inputLabelWrapper">
                             <input name="r1b1" id={item} type="checkbox"/>
                             <label htmlFor={item}>{item}</label>
                         </div>
                     })}
                </div>
                <div  className="missionDashboardObjective__r1_b2">
                     <div className="missionDashboardObjective__head">category</div>
                     {this.state.r1b2.map((item,i)=>{
                  return <div className="inputLabelWrapper">
                             <input name="r1b2" id={item} type="checkbox"/>
                             <label htmlFor={item}>{item}</label>
                         </div>
                     })}
                </div>
                <div  className="missionDashboardObjective__r1_b3">
                     <div className="missionDashboardObjective__head">priority</div>
                     {this.state.r1b3.map((item,i)=>{
                  return <div className="inputLabelWrapper">
                             <input name="r1b3" id={item} type="checkbox"/>
                             <label htmlFor={item}>{item}</label>
                         </div>
                     })}
                </div>
                <div  className="missionDashboardObjective__r1_b4">
                    <div className="missionDashboardObjective__head">sort by</div>
                     {this.state.r1b4.map((item,i)=>{
                  return <div className="inputLabelWrapper">
                             <input name="r1b4" id={item} type="radio"/>
                             <label htmlFor={item}>{item}</label>
                         </div>
                     })}
                </div>
             </div>


             <div className="missionDashboardObjective__search">
                 <button className="projectDashboardNotes__update_addForm-btn">SEARCH</button>
             </div>
             <div className="missionDashboardObjective__search">
                 <button onClick={()=>this.setState({modalShow:true})} className="projectDashboardNotes__update_addForm-btn">ADD</button>
             </div>

             <div className="missionDashboardObjective__r2">


                {this.state.objectives.map(objective=><div className="missionDashboardObjective__r2_b1"><MissionObjective missionId={this.props.missionId} {...objective}/></div>)
                }
                <div className="missionDashboardObjective__r2_b2">

                <h2>Make a list for all trasactions of September 2020 </h2>
                <br/>
                <hr/>
                <br/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem dolore velit corrupti, reprehenderit delectus fugit placeat? Cumque placeat nobis, sapiente tempore nesciunt veniam ullam et labore repudiandae eos animi nulla?</p>

                </div>
                <div className="missionDashboardObjective__r2_b3">
                <h2>Release the next update</h2>
                <br/>
                <hr/>
                <br/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem dolore velit corrupti, reprehenderit delectus fugit placeat? Cumque placeat nobis, sapiente tempore nesciunt veniam ullam et labore repudiandae eos animi nulla?</p>

               
                </div>
             </div>
         </div>
         </>
      )
    }
  }


 export default MissionDashboardObjective;
