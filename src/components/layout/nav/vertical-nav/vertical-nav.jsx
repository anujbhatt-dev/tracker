import React, {Component} from "react"
import { NavLink } from "react-router-dom";




  class VerticalNav extends Component{

    render(){

      return (
        <div  className={"verticalNav "+(this.props.show?"show":"dontShow")}>
           <NavLink to="/createProject">  <div className="verticalNav__item"><i class="fa fa-university" aria-hidden="true"></i> <div>Add Project</div></div></NavLink>
           <NavLink to="/projects">  <div className="verticalNav__item"><i class="fa fa-university" aria-hidden="true"></i> <div>Projects</div></div></NavLink>
           <NavLink to="/">  <div className="verticalNav__item"><i class="fa fa-university" aria-hidden="true"></i> <div>231</div></div></NavLink>
           <NavLink to="/">  <div className="verticalNav__item"><i class="fa fa-university" aria-hidden="true"></i> <div>231</div></div></NavLink>
        </div>
      )
    }
  }


 export default VerticalNav;
