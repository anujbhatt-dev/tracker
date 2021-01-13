import React, {Component} from "react"
import Login from "./login/login"
import Register from "./register/register"
import axios from "axios"
import { withRouter } from "react-router-dom"

  class Join extends Component{

    state={
      login:{
         email:"",
         password:"",
         
      },
      register:{
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:"",
        imageUrl:"",
         thumbnailUrl:"",
         deleteUrl:"",
      },
      rollBack:false,
    }


    getCookie=(value)=> {

      let cookies= document.cookie+";";
  
      if(cookies.indexOf(value)<0)
      return null;
  
     return cookies.substring(cookies.indexOf(value)+(value.length+1),cookies.indexOf(";",cookies.indexOf(value)+1));
  
   }

    componentDidMount=()=>{
      if(this.getCookie("jwt")!==null)
         this.props.history.push("/profile");

      

    }

    componentWillUnmount=()=>{

      if(this.state.rollBack)
      axios.get();

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


    imageUrlUpdateHandler=(imageUrl,deleteUrl,thumbnailUrl)=>{

      let register={...this.state.register}
      register.imageUrl=imageUrl;
      register.deleteUrl=deleteUrl;
      register.thumbnailUrl=thumbnailUrl

      this.setState({
       register:register,
      })
    }

    onSubmitHandler=(e,formName)=>{
         e.preventDefault();
         if(formName==="register"){
            if(this.state.register.password===this.state.register.confirmPassword){
              let registerData = {...this.state.register}
              delete registerData.confirmPassword
              console.log(registerData);
              axios.post("/v1/user/register",registerData).then((res)=>{
                this.setState({rollBack:false})
                  alert("your account has been registered successfully!")
              }).catch((err)=>{
                  let defaultRegister={
                    firstName:"",
                    lastName:"",
                    email:"",
                    password:"",
                    confirmPassword:""
                  }
                  this.setState({
                    register:defaultRegister
                  })
                  alert("your account has not been registered successfully!")
              })
            }else{
              alert("password and confirm password should match")
            }
         }else if(formName==="login"){
           console.log(this.state.login);
           axios.post("/v1/user/authenticate",this.state.login).then((res)=>{
               alert("your account has been logged in successfully!")
           }).catch((err)=>{
               let defaultRegister={
                 email:"",
                 password:""
               }
               this.setState({
                 login:defaultRegister
               })
               alert("your account has not been logged in successfully!")
           })
         }
    }

    render(){
      // <GoogleAuth/>
      

      return (
      
      <div className="join" style={{backgroundColor:"#2d89ff",overflow:"hidden"}}>
                 <Login onSubmitHandler={this.onSubmitHandler} register={this.state.login} onChangeHandler={this.onChangeHandler}/>

                 <Register onSubmitHandler={this.onSubmitHandler} register={this.state.register} imageUrlUpdateHandler={this.imageUrlUpdateHandler} onChangeHandler={this.onChangeHandler}/>
             </div>
      )
    }
  }


 export default withRouter(Join);
