import React, { Component } from 'react'
import AppContext from '../../.././app-context'
import { CircularProgressbar,buildStyles,CircularProgressbarWithChildren  } from 'react-circular-progressbar';
import axios from 'axios';


 class UserBar extends Component {

    static contextType=AppContext;



    state={

      user:undefined,

    }


    
  getCookie=(value)=> {

    let cookies= document.cookie+";";

    if(cookies.indexOf(value)<0)
    return null;

   return cookies.substring(cookies.indexOf(value)+(value.length+1),cookies.indexOf(";",cookies.indexOf(value)+1));

 }
    
    componentDidMount=()=>{
      
       if(this.getCookie('jwt')!==null){
         axios.get("/v1/user/my_profile")
         .then(res=>{ this.setState({user:res.data})})
       }

    }

    render() {

        let   progressStyle={
                 
            rotation: 0.25,
                 strokeLinecap: 'butt',
                 textSize: '16px',
               pathTransitionDuration: 0.5,
               pathColor: `rgba(62, 152, 199, 70)`,
                textColor: '#f88',
                trailColor: '#d6d6d6',
                backgroundColor: '#3e98c7',
                trail: {
                    // Trail color
                    stroke: '#d6d6d6',
                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: 'butt',
                    // Rotate the trail
                    transform: 'rotate(0.25turn)',
                    transformOrigin: 'center center',
                  },
        }
  
  

        if(!this.state.user)
               return null;      

        let progressValue=2;
  

        return (
            <div style={{background:"white"}} className="projectDashboard__userSidebar">
            <div className="projectDashboard__userSidebar-wrp">
              <hr className="hr"/>
              <figure>
              <CircularProgressbarWithChildren  styles={buildStyles({...progressStyle})}
                                       value={progressValue}>
                <img
                className="createProjectMember__result_item-fig_img createProjectMember__result_item-fig_img--circle"
                 src={this.state.user.imageUrl}
                 //src="https://i.ibb.co/nbGYCsw/me.jpg"
                 alt=""/>
                 </CircularProgressbarWithChildren>
                 <figcaption>
                    {this.state.user.firstName}
                 </figcaption>
               </figure>
            </div>

               <div className="projectDashboard__userSidebar_obj">
                   <div className="projectDashboard__userSidebar_obj-text">objectives to complete</div>
                   <div className="projectDashboard__userSidebar_obj-count">1234</div>
               </div>


               <div style={{background:"white"}} className="projectDashboard__userSidebar_noti"><i className="fa fa-bell" aria-hidden="true"></i><span className="projectDashboard__userSidebar_noti-count">12</span></div>

         </div>

        )
    }
}


export default  UserBar
