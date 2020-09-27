import React, {Component} from "react"
import Login from "./login/login"
import Register from "./register/register"
import GoogleAuth from "./google-auth/google-auth"
import axios from "axios"

  class Join extends Component{

    state={
      login:{
         email:"",
         password:""
      },
      register:{
        firstname:"",
        lastname:"",
        email:"",
        password:"",
        confirmPassword:""
      }
    }


    onChangeHandler=(e,formName)=>{
         // alert("f")
         let newState;
         if(formName==="register"){
            newState= {...this.state.register}
            newState[e.target.name]= e.target.value;
            this.setState({
              register:{...newState}
            })
         }else if(formName==="login"){
           newState= {...this.state.login}
           newState[e.target.name]= e.target.value;
           this.setState({
             login:{...newState}
           })
         }
    }

    onSubmitHandler=(e,formName)=>{
         e.preventDefault();
         if(formName==="register"){
            if(this.state.register.password===this.state.register.confirmPassword){
              let registerData = {...this.state.register}
              delete registerData.confirmPassword
              axios.post("/register",registerData).then((res)=>{
                  alert("your account has been registered successfully!")
              }).catch((err)=>{
                  let defaultRegister={
                    email:"",
                    password:""
                  }
                  this.setState({
                    login:{...defaultRegister}
                  })
                  alert("your account has not been registered successfully!")
              })
            }else{
              alert("password and confirm password should match")
            }
         }else if(formName==="login"){
           axios.post("/authenticate",this.state.login).then((res)=>{
               alert("your account has been logged in successfully!")
           }).catch((err)=>{
               let defaultRegister={
                 firstname:"",
                 lastname:"",
                 email:"",
                 password:"",
                 confirmPassword:""
               }
               this.setState({
                 register:{...defaultRegister}
               })
               alert("your account has not been logged in successfully!")
           })
         }
    }

    render(){
      // <GoogleAuth/>

      return (
             <div className="join">
                 <Login onSubmitHandler={this.onSubmitHandler} register={this.state.login} onChangeHandler={this.onChangeHandler}/>
                 <Register onSubmitHandler={this.onSubmitHandler} register={this.state.register} onChangeHandler={this.onChangeHandler}/>
             </div>
      )
    }
  }


 export default Join;
