import React, {Component} from "react"


  class Register extends Component{

    render(){

      return (
            <div className="join__child register">
                <input placeholder="username or email" className="register__input" type="email"/>
                <div className="register__row">
                   <input placeholder="first name" className="register__input register__row_input register__row_first" type="text"/>
                   <input placeholder="Last name" className="register__input register__row_input" type="text"/>
                </div>
                <div className="register__row">
                   <input placeholder="password" className="register__input register__row_input register__row_first" type="password"/>
                   <input placeholder="confirm password" className="register__input register__row_input" type="password"/>
                </div>
                <input id="register__btn" className="register__btn createProjectSubmit" value="sign up" type="submit"/>
            </div>
      )
    }
  }


 export default Register;
