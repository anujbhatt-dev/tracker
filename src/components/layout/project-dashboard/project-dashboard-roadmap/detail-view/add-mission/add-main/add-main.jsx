import React, {Component} from "react"



class AddMain extends Component{

    render(){

        return (
          <div >

            <div id="AddMission__flexWrap" className="createProjectMain">
                <div className="createProjectMain__col1">
                   <input className="createProjectMain__col1_input createProjectMain__col1_input--text" value={this.props.name} onChange={e=>this.props.updateHandler(e)} placeholder=" name" name="name" type="text"/><br/>
                   <input className="createProjectMain__col1_input createProjectMain__col1_input--text" value={this.props.category} onChange={e=>this.props.updateHandler(e)} placeholder="category" name="category" type="text"/><br/>
                   <input className="createProjectMain__col1_input createProjectMain__col1_input--text" value={this.props.priority} onChange={e=>this.props.updateHandler(e)} placeholder="priority" name="priority" type="text"/><br/>

                   <textarea className="createProjectMain__col1_input createProjectMain__col1_input--textarea" value={this.props.description} onChange={e=>this.props.updateHandler(e)} placeholder="description" name="description" type="text"></textarea><br/>
                   <div className="floater1">
                     <label className="createProjectMain__col1_label" htmlFor="startDate">Start Date</label><br/>
                     <input className="createProjectMain__col1_input createProjectMain__col1_input--date" value={this.props.startingDate} onChange={e=>this.props.updateHandler(e)} id="stertDate" placeholder="start date" name="startingDate" type="date"/>
                   </div>
                   <div>
                     <label className="createProjectMain__col1_label" htmlFor="endDate">Estimated End Date</label><br/>
                     <input className="createProjectMain__col1_input createProjectMain__col1_input--date" value={this.props.endingDate} onChange={e=>this.props.updateHandler(e)} id="endDate" placeholder="end date" name="endingDate" type="date"/>
                   </div>
                </div>

                <div className="createProjectMain__col2">
                     <div  className="createProjectMain__col2_head">Add Notes</div>
                     <br/>
                     <div id="createProjectMain__col2_row" className="createProjectMain__col2_row">
                         {this.props.notes.map((data,i)=>{
                          return <div  className="createProjectMain__col2_row-item">
                                    <div className="createProjectMain__col2_row-item_paradiv">
                                       <div className="createProjectMain__col2_row-item_paradiv--para">{data.title}</div>
                                       <i onClick={()=>this.props.removeNoteHandler(i)} className="fa fa-times removeIcon" aria-hidden="true"></i>
                                    </div>
                                    <div className="createProjectMain__col2_row-item_des">{data.description}</div>
                                    <hr className="hr"/>
                                </div>
                         })}
                         <div className="createProjectMain__col2_row2">
                           <div>
                               <input className="createProjectMain__col2_row2-input" placeholder="title" onChange={(e)=>this.props.notesChangeHandler(e)} value={this.props.noteInput.title} name="title" type="text"/><br/>
                               <input className="createProjectMain__col2_row2-input" placeholder="description" onChange={(e)=>this.props.notesChangeHandler(e)} value={this.props.noteInput.description} name="description" type="text"/>
                           </div>
                           <i onClick={()=>this.props.addNoteHandler()} className="fa fa-plus plusIcon" aria-hidden="true"></i>
                         </div>
                     </div>
                 </div>


                 <div className="createProjectMain__col2">
                      <div  className="createProjectMain__col2_head">Add Links</div>
                      <br/>
                      <div id="createProjectMain__col2_row" className="createProjectMain__col2_row">
                          {this.props.links.map((data,i)=>{
                           return <div  className="createProjectMain__col2_row-item">
                                     <div className="createProjectMain__col2_row-item_paradiv">
                                        <a href={data.link} target="_blank" rel="noopener noreferrer"  className="createProjectMain__col2_row-item_paradiv--para">{data.link}</a>
                                        <i onClick={()=>this.props.removeLinkHandler(i)} className="fa fa-times removeIcon" aria-hidden="true"></i>
                                     </div>
                                     <div className="createProjectMain__col2_row-item_des">{data.description}</div>
                                     <hr className="hr"/>
                                 </div>
                          })}
                          <div className="createProjectMain__col2_row2">
                            <div>
                                <input className="createProjectMain__col2_row2-input" placeholder="Link" onChange={(e)=>this.props.linksChangeHandler(e)} value={this.props.linkInput.link} name="link" type="text"/><br/>
                                <input className="createProjectMain__col2_row2-input" placeholder="description" onChange={(e)=>this.props.linksChangeHandler(e)} value={this.props.linkInput.description} name="description" type="text"/>
                            </div>
                            <i onClick={()=>this.props.addLinkHandler()} className="fa fa-plus plusIcon" aria-hidden="true"></i>
                          </div>
                      </div>
                  </div>
            </div>
            </div>
        )
      }
    }



 export default AddMain;
