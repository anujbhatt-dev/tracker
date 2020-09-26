import React, {Component} from "react"
import Login from "./login/login"
import Register from "./register/register"
import GoogleAuth from "./google-auth/google-auth"

  class Join extends Component{

    render(){
      // <GoogleAuth/>

      return (
             <div className="join">
                 <Login/>
                 <Register/>
             </div>
      )
    }
  }


 export default Join;
