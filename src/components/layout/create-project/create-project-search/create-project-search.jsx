import React, {Component} from "react"


  class CreateProjectSearch extends Component{

    render(){

      return (
          <div className="createProjectSearch">
               <input placeholder="Add a soilder" className="createProjectSearch__box" type="text"/>
               <div className="createProjectSearch__result">
                     
               </div>
          </div>
      )
    }
  }


 export default CreateProjectSearch;
