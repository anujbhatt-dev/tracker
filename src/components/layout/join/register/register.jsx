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
            <div className="join__child register">
                                        <h1>Hey !!</h1>
                                         <h2>Continue With</h2>
<br/>
<br/><br/>
<br/>
<br/><br/>
               <a href="http://localhost:8085/oauth2/authorization/google"> <button id="register__btn" style={{backgroundColor:"#DB4437"}} className="register__btn createProjectSubmit" >Google</button></a>
               <a href="http://localhost:8085/oauth2/authorization/facebook/"> <button id="register__btn" style={{backgroundColor:"#4267B2"}} className="register__btn createProjectSubmit" >Facebook</button></a>
               <a href="http://localhost:8085/oauth1/authorization/twitter/"><button id="register__btn" style={{backgroundColor:"#1DA1F2"}} className="register__btn createProjectSubmit"  >Twitter</button></a>
               <a href="http://localhost:8085/oauth2/authorization/github"> <button id="register__btn" style={{backgroundColor:"black"}} className="register__btn createProjectSubmit"  >GitHub</button></a>
            </div>
      )
    }
  }


 export default Register;
