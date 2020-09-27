import React, {Component} from "react"


  class Register extends Component{

    render(){

      return (
            <form onSubmit={(e)=>this.props.onSubmitHandler(e,"register")} className="join__child register">
                <input onChange={(e)=>this.props.onChangeHandler(e,"register")} value={this.props.register.email} name="email" requored placeholder="username or email" className="register__input" type="email"/>
                <div className="register__row">
                   <input onChange={(e)=>this.props.onChangeHandler(e,"register")} value={this.props.register.firstname} name="firstname" requored placeholder="first name" className="register__input register__row_input register__row_first" type="text"/>
                   <input onChange={(e)=>this.props.onChangeHandler(e,"register")} value={this.props.register.lastname} name="lastname" requored placeholder="Last name" className="register__input register__row_input" type="text"/>
                </div>
                <div className="register__row">
                   <input onChange={(e)=>this.props.onChangeHandler(e,"register")} value={this.props.register.password} name="password" requored placeholder="password" className="register__input register__row_input register__row_first" type="password"/>
                   <input onChange={(e)=>this.props.onChangeHandler(e,"register")} value={this.props.register.confirmPassword} name="confirmPassword" requored placeholder="confirm password" className="register__input register__row_input" type="password"/>
                </div>
                <input id="register__btn" className="register__btn createProjectSubmit" value="sign up" type="submit"/>
            </form>
      )
    }
  }


 export default Register;
