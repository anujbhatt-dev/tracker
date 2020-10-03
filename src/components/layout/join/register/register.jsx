import React, {Component} from "react"
import axios from "axios";


  class Register extends Component{

    fileUpload=(e)=>{

      let file = e.target.files[0];
      let form = new FormData();
      form.append("image",file);    
       
    

      axios.post("https://api.imgbb.com/1/upload",form,{params:{key:"dcbdc94a138d3a04d52f008ec67168a5"}})
        .then(res=>{
        console.log(res.data);
        this.props.imageUrlUpdateHandler(res.data.data.display_url,res.data.data.delete_url,res.data.data.thumb.url);
         })
         ;

    
  }

    render(){

      return (
            <form onSubmit={(e)=>this.props.onSubmitHandler(e,"register")} className="join__child register">
                <input onChange={(e)=>this.props.onChangeHandler(e,"register")} value={this.props.register.email} name="email" requored placeholder="username or email" className="register__input" type="email"/>
                <div className="register__row">
                   <input onChange={(e)=>this.props.onChangeHandler(e,"register")} value={this.props.register.firstName} name="firstName" requored placeholder="first name" className="register__input register__row_input register__row_first" type="text"/>
                   <input onChange={(e)=>this.props.onChangeHandler(e,"register")} value={this.props.register.lastName} name="lastName" requored placeholder="Last name" className="register__input register__row_input" type="text"/>
                </div>
                <div className="register__row">
                   <input onChange={(e)=>this.props.onChangeHandler(e,"register")} value={this.props.register.password} name="password" requored placeholder="password" className="register__input register__row_input register__row_first" type="password"/>
                   <input onChange={(e)=>this.props.onChangeHandler(e,"register")} value={this.props.register.confirmPassword} name="confirmPassword" requored placeholder="confirm password" className="register__input register__row_input" type="password"/>
                </div>
                <input onChange={e=>this.fileUpload(e)} type="file" name=""    id=""/>
                              
                <input id="register__btn" className="register__btn createProjectSubmit" value="sign up" type="submit"/>
            </form>
      )
    }
  }


 export default Register;
