import React, { Component } from 'react'
import axios from 'axios';


 class MissionUpdate extends Component {



    state={
        description:"",
         priority:"",
         category:"",
    
    }


    componentDidMount=()=>{
        this.setState({...this.props})
    }


    addObjective=(e)=>{

        e.preventDefault();
        axios.put(`/v1/mission/${this.props.missionId}/objective`,this.state)
        .then(res=>console.log(res.data));

    }


    onChangeHandler=(e)=>{

        this.setState({[e.target.name]:e.target.value})

    }


    render() {
        return (
            <div className="projectDashboardNotes__update">
                     <h1 className="projectDashboardNotes__update_head">ADD Objective</h1>
                     <form  onSubmit={(e)=>this.addObjective(e)} className="projectDashboardNotes__update_addForm" action="">
                          <input value={this.state.priority} onChange={(e)=>this.onChangeHandler(e)} name="priority" placeholder="priority" className="projectDashboardNotes__update_addForm-title" type="text"/>
                          <input value={this.state.category} onChange={(e)=>this.onChangeHandler(e)} name="category" placeholder="category" className="projectDashboardNotes__update_addForm-title" type="text"/>
                          <textarea  value={this.state.description} onChange={(e)=>this.onChangeHandler(e)} name="description" placeholder="description" className="projectDashboardNotes__update_addForm-description" type="text"></textarea>

                          <button  type="submit" className="projectDashboardNotes__update_addForm-btn"> <i className="fa fa-upload" aria-hidden="true"></i><span>upload</span></button>

                     </form>
                      </div>
        )
    }
}



export default MissionUpdate
