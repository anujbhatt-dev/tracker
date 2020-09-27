import React, {Component} from "react"


  class Login extends Component{

    render(){

      return (
            <form onSubmit={(e)=>this.props.onSubmitHandler(e,"login")} className="join__child login">
                <input value={this.props.login} name="email" onChange={(e)=>this.props.onChangeHandler(e,"login")} placeholder="username or email" className="login__input" type="text"/>
                <input value={this.props.login} name="password" onChange={(e)=>this.props.onChangeHandler(e,"login")} placeholder="password" className="login__input" type="password"/>
                <input id="login__btn" className="login__btn createProjectSubmit" value="sign in" type="submit"/>
            </form>
      )
    }
  }


 export default Login;
