import React, {Component} from "react"
import { NavLink, withRouter } from "react-router-dom";




  class VerticalNav extends Component{



    deleteCookie(name) {
      document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }
    logout=()=>{
      this.deleteCookie("jwt");
      this.deleteCookie("name");
      this.deleteCookie("email");

      this.props.imageHandler(null);
      this.props.history.push("/");

    }

    render(){

      return (
        <div  className={"verticalNav "+(this.props.show?"show":"dontShow")}>
           <NavLink to="/createProject">  <div  aria-hidden="true" style={{background:"white",color:"red"}} className="verticalNav__item"><i className="fa fa-plus-circle" aria-hidden="true"></i></div></NavLink>
           <NavLink to="/projects">  <div  aria-hidden="true" style={{background:"white",color:"green"}} className="verticalNav__item"><i className="fa fa-object-group" aria-hidden="true"></i></div></NavLink>
           <NavLink to="/">  <div  aria-hidden="true" style={{background:"white",color:"blue"}}  className="verticalNav__item"><i className="fa fa-user" aria-hidden="true"></i></div></NavLink>
           <NavLink to="/">  <div  aria-hidden="true" style={{background:"white",color:"black"}} className="verticalNav__item"><i className="fa fa-area-chart" aria-hidden="true"></i></div></NavLink>
           <button onClick={this.logout}>Logout</button>
        </div>
      )
    }
  }


 export default withRouter(VerticalNav);
