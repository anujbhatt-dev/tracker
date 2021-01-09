import React, {Component} from "react"
import login_pageSVG from "../../../../assets/svg/login_page.svg"

  class Login extends Component{

    render(){

      return (
            <form onSubmit={(e)=>this.props.onSubmitHandler(e,"login")} className="join__child login">
              <img src={login_pageSVG} alt=""/>
            </form>
      )
    }
  }


 export default Login;
