import React, {Component} from "react"


  class CreateProjectAdded extends Component{

    render(){

      return (
          <div className="createProjectAdded">
              <input placeholder="Find a soilder" className="createProjectSearch__box" type="text"/>
              <div className="createProjectSearch__result">

              </div>
          </div>
      )
    }
  }


 export default CreateProjectAdded;
