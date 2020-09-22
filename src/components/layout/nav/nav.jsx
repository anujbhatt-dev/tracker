import React, {Component} from "react"
import HorizontalNav from "./horizontal-nav/horizontal-nav"
import VerticalNav from "./vertical-nav/vertical-nav"


  class Nav extends Component{

    state={
      show:false
    }

    showHandler=()=>{
      this.setState({
        show:!this.state.show
      })
    }

    render(){

      return (
             <div className="nav">
                   <div onClick={this.showHandler} className="nav__item">{!this.state.show?<i class="fa fa-bars" aria-hidden="true"></i>:<i class="fa fa-times" aria-hidden="true"></i>}</div>
                   <VerticalNav show={this.state.show}/>
                   <HorizontalNav show={this.state.show}/>
             </div>
      )
    }
  }


 export default Nav;
