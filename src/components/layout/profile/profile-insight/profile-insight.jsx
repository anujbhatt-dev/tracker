import React, { Component } from 'react'
import { CircularProgressbar,CircularProgressbarWithChildren,buildStyles } from 'react-circular-progressbar';
import {Dashboard} from "precise-ui"
import ProfileDetail from './profile-detail/profile-detail';
import UserProgress from './user-progress/user-progress';


export default class ProfileInsight extends Component {




    render() {

        console.log(this.props)

        const style = {
            height: '100%',
            width: '100%',
            background: '#ccc',
    
          };
          const tiles = [
            { id: '0',colSpan:1,rowSpan:3,},
            { id: '1',colSpan:3,rowSpan:1,},  
            { id: '2',colSpan:3,rowSpan:1,},
              {id:'3',colSpan:3,rowSpan:1},
              {id:'4',colSpan:3,rowSpan:1},
          ];


        return (
            <Dashboard defaultTiles={tiles} rowHeight={100} disabled>
<br/>
           <div style={style} >
               <img  className="createProjectMember__result_item-fig_img createProjectMember__result_item-fig_img--circle"
                src={this.props.user.imageUrl} alt="profile image"/>
           </div>
           <div style={{...style}} >
             <ProfileDetail user={this.props.user}/>
           </div>
           <div style={style} >
               <UserProgress user={this.props.user}/>
           </div>
           <div></div>


            </Dashboard>
        )
    }
}
