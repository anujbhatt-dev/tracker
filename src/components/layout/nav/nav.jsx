import React, {Component} from "react"
import HorizontalNav from "./horizontal-nav/horizontal-nav"
import VerticalNav from "./vertical-nav/vertical-nav"


  class Nav extends Component{

    state={
      show:false
    }

    getCookie=(value)=> {

      let cookies= document.cookie+";";
  
      if(cookies.indexOf(value)<0)
      return null;
  
     return cookies.substring(cookies.indexOf(value)+(value.length+1),cookies.indexOf(";",cookies.indexOf(value)+1));
  
   }

    showHandler=()=>{
      this.setState({
        show:!this.state.show
      })
    }

    render(){

      if(this.getCookie("jwt")===null)
      return null ;

      return (
             <div className="nav">
                   <div style={{color:"black",background:"white"}} onClick={this.showHandler} className="nav__item">{!this.state.show?<i class="fa fa-bars" aria-hidden="true"></i>:<i class="fa fa-times" aria-hidden="true"></i>}</div>
                   <VerticalNav reloadHandler={this.props.reloadHandler} show={this.state.show}/>
                   <HorizontalNav show={this.state.show}/>
             </div>
      )
    }
  }


 export default Nav;
