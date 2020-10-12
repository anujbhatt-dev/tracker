import React, {Component} from "react"


  class AddMission extends Component{

    render(){

      return (
         <div className="AddMission">
             <div className="AddMission__head">
                Add New Mission
             </div>
             <hr className="hr"/>
             <div className="AddMission__wrapper">
                <div className="AddMission__col1">
                    <div className="AddMission__subHead">description</div>
                    <textarea className="AddMission__col1_textarea" name="" id="" cols="30" rows="10"></textarea><br/>
                    <div className="AddMission__subHead">Name</div>
                    <input className="AddMission__col1_input" type="text"/>
                </div>
                <div className="AddMission__col1">
                   <div className="AddMission__subHead">category</div>
                   <input className="AddMission__col1_input" type="text"/>
                   <div className="AddMission__subHead">Name</div>
                    <input className="AddMission__col1_input" type="text"/>
                    <button>Go</button>
                </div>

             </div>
         </div>
      )
    }
  }


 export default AddMission;
