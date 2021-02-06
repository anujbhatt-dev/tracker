import { Dashboard } from 'precise-ui/dist/es6'
import React, { Component } from 'react'


export default class ProfileDetail extends Component {
    render() {


        
        const style = {
            height: '100%',
            width: '100%',
            background: '#ccc',
    
          };
          const tiles = [
            // { id: '0',colSpan:1,rowSpan:3,},
            { id: '1',colSpan:4,},  
            { id: '2',colSpan:4,},
              {id:'3',colSpan:4,},
          ];
        
        return (
            <Dashboard defaultTiles={tiles} rowHeight={10} disabled>

                <div style={style}>since : {this.props.user.addedOn}</div>
                <div style={style}>{this.props.user.email}</div>
                <div style={style}>{this.props.user.firstName} {this.props.user.lastName}</div>
                {/* <div style={style}></div> */}
                
            </Dashboard>
        )
    }
}
