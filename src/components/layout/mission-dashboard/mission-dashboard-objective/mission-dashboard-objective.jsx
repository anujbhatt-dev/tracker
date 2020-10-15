import React, {Component} from "react"


  class MissionDashboardObjective extends Component{

    state={
      r1b1:["anuj","sagar","simran","dimpey","rohan","nikhil","rohit","proteek",],
      r1b2:["Lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipisicing", "elit", "Vel", "molestias" ,"blanditiis", "deserunt" ,"illum" ,"vero", "dolores" ,"dolore" ,"eos", "harum", "ex", "Dolorum"],
      r1b3:["This", "tool", "can", "be", "useful"],
      r1b4:["words", "To", "make", "the", "challenge", "even", "more", "difficult", "the", "writer", "could", "try", "to"]
    }

    render(){
      const r1b1 = Math.ceil(this.state.r1b1.length/4)
      const r1b2 = Math.ceil(this.state.r1b2.length/4)
      const r1b3 = Math.ceil(this.state.r1b2.length/4)

      return (
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
                 <button className="projectDashboardNotes__update_addForm-btn">button 1</button>
             </div>
             <div className="missionDashboardObjective__search">
                 <button className="projectDashboardNotes__update_addForm-btn">button 1</button>
             </div>

             <div className="missionDashboardObjective__r2">

                <div className="missionDashboardObjective__r2_b1"></div>
                <div className="missionDashboardObjective__r2_b2"></div>
                <div className="missionDashboardObjective__r2_b3"></div>
             </div>
         </div>
      )
    }
  }


 export default MissionDashboardObjective;
