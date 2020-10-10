import React, { Component } from 'react'

 class MissionLeafDetailView extends Component {


    componentDidMoun=()=>{
        
    }


    render() {

        console.log(this.props)

        return (
            <div>
                Mission Leaf Detail View
                {this.props.data.projectId}
            </div>
        )
    }
}


export default MissionLeafDetailView;