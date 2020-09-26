import React, {Component} from "react"


  class Login extends Component{

    render(){

      return (
            <div className="join__child login">
                <input placeholder="username or email" className="login__input" type="text"/>
                <input placeholder="password" className="login__input" type="password"/>
                <input id="login__btn" className="login__btn createProjectSubmit" value="sign in" type="submit"/>
            </div>
      )
    }
  }


 export default Login;
