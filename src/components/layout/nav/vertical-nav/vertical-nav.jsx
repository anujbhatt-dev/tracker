import React, {Component} from "react"
import { NavLink } from "react-router-dom";




  class VerticalNav extends Component{

    render(){

      return (
        <div  className={"verticalNav "+(this.props.show?"show":"dontShow")}>
           <NavLink to="/createProject">  <div className="verticalNav__item"><i class="fa fa-shapes" aria-hidden="true"></i></div></NavLink>
           <NavLink to="/projects">  <div className="verticalNav__item"><i class="fa fa-project-diagram" aria-hidden="true"></i></div></NavLink>
           <NavLink to="/">  <div className="verticalNav__item"><i class="fa fa-user" aria-hidden="true"></i></div></NavLink>
           <NavLink to="/">  <div className="verticalNav__item"><i class="fas fa-chart-line" aria-hidden="true"></i></div></NavLink>
        </div>
      )
    }
  }


 export default VerticalNav;
