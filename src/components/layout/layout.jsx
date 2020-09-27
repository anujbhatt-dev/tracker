import React, {Component} from "react"
import Nav from "./nav/nav"
import CreateProject from "./create-project/create-project"
import Join from "./join/join"

  class Layout extends Component{

    render(){

      return (
               <div className="layout">
                      <Nav authenticated={this.props.authenticated}/>
                      <CreateProject authenticated={this.props.authenticated}/>
                      <Join authenticated={this.props.authenticated}/>
               </div>
      )
    }
  }


 export default Layout;
