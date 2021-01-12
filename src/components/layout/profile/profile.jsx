import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

 class Profile extends Component {

    componentDidMount=()=>{
        
        if(this.getCookie("jwt")===null)
                 this.props.history.push("/");

                 this.props.imageHandler(null);

    }

    getCookie=(value)=> {

        let cookies= document.cookie+";";
    
        if(cookies.indexOf(value)<0)
        return null;
    
       return cookies.substring(cookies.indexOf(value)+(value.length+1),cookies.indexOf(";",cookies.indexOf(value)+1));
    
     }

    render() {
        return (
            <div className="createProjectWrapper">
            User Profile
            </div>
        )
    }
}


export default withRouter(Profile);