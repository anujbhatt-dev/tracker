
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

 class OAuthSuccessHandler extends Component {


    componentDidMount=()=>{
      
        let params=this.props.match.params;

        this.setCookie("jwt",params["jwt"].substring(1).substring(0,params["jwt"].substring(1).length-1));
        this.setCookie("email",params["email"].substring(1).substring(0,params["email"].substring(1).length-1));
        this.setCookie("name",params["name"].substring(1).substring(0,params["name"].substring(1).length-1));

       this.props.history.push("/profile");

    }

      setCookie(name, value) {
        document.cookie = name +'='+ value +'; Path=/; expires='+this.getCookieExpireTime();
      }
       deleteCookie(name) {
        document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
      }
      getCookie=(value)=> {

        let cookies= document.cookie+";";
    
        if(cookies.indexOf(value)<0)
        return null;
    
       return cookies.substring(cookies.indexOf(value)+(value.length+1),cookies.indexOf(";",cookies.indexOf(value)+1));
    
     }

     getCookieExpireTime=()=>{
        var now = new Date();
        var time = now.getTime();
        var expireTime = time + 1000*36000;
        now.setTime(expireTime);
        return now.toGMTString();
      }

    render() {

        console.log(this.props)
        return (
            <div>
                OAUTH
            </div>
        )
    }
}


export default withRouter(OAuthSuccessHandler)