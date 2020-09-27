import React, {Component} from "react"
import Nav from "./nav/nav"
import CreateProject from "./create-project/create-project"
import Join from "./join/join"
import { Switch,Route } from "react-router-dom"


  class Layout extends Component{

    render(){

      return (
               <div className="layout">
                      <Nav authenticated={this.props.authenticated}/>
                     <Switch>

                     <Route exact path="/"><Join authenticated={this.props.authenticated}/></Route>
                    
                     <Route exact path="/createProject"><CreateProject authenticated={this.props.authenticated}/></Route>
                      
                      </Switch> 
               </div>
      )
    }
  }


 export default Layout;
