import React, {Component} from "react"
import { NavLink } from "react-router-dom";




  class VerticalNav extends Component{

    render(){

      return (
        <div  className={"verticalNav "+(this.props.show?"show":"dontShow")}>
           <NavLink to="/createProject">  <div  aria-hidden="true" style={{background:"white",color:"red"}} className="verticalNav__item"><i className="fa fa-plus-circle" aria-hidden="true"></i></div></NavLink>
           <NavLink to="/projects">  <div  aria-hidden="true" style={{background:"white",color:"green"}} className="verticalNav__item"><i className="fa fa-object-group" aria-hidden="true"></i></div></NavLink>
           <NavLink to="/">  <div  aria-hidden="true" style={{background:"white",color:"blue"}}  className="verticalNav__item"><i className="fa fa-user" aria-hidden="true"></i></div></NavLink>
           <NavLink to="/">  <div  aria-hidden="true" style={{background:"white",color:"black"}} className="verticalNav__item"><i className="fa fa-area-chart" aria-hidden="true"></i></div></NavLink>
        </div>
      )
    }
  }


 export default VerticalNav;
