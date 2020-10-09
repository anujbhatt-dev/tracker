import React, { Component } from 'react'
import axios from 'axios'


class ProjectDashboardMembersAdd extends Component {
    state={
        search:"",
        data:[],
        totalPages:"0",
        page:0,
        loading:false,
        members:[],
        addedEmails:[],
        updating:false,
      }
  
  
      componentDidUpdate=()=>{
        if(this.state.loading && this.state.search.length>4){
          axios.get(`/v1/user/${this.state.search}/${this.state.page}`).then(res=>{
            console.log(res.data);
            this.setState(state=>{
              return {
                data:state.data.concat(res.data.content),
                totalPages:res.data.totalPages,
                loading:false
              }
            });
          }).catch(err=>{
            alert("oops !!");
            this.setState({loading:false});
          })
        }
        if(this.state.updating){
          this.setState({updating:false})
        }
      }

      addMembers=()=>{
        this.props.updateMembers(this.state.members);
        this.props.modalHandler();
      }
  
  
  
      memberAddHandler=(member)=>{
        member.authority="SOLDIER"
        this.setState(state=>{
          return {
            members:[member].concat(state.members),
            addedEmails:[member.email].concat(state.addedEmails),
            updating:true,
          }
        });
      }
  
  
      memberRemoveHandler=(email,index)=>{
        let members= [...this.state.members];
        let addedEmails=[...this.state.addedEmails];
        members.splice(index,1);
        addedEmails.splice(index,1);
        this.setState(state=>{
          return {
            members:members,
            addedEmails:addedEmails,
            updating:true,
          }
        });
      }
  
  
      authorityChangeHandler=(index,authority)=>{
        let members= [...this.state.members];
        members[index].authority=authority;
        this.setState({
          members:members,
          updating:true,
        });
      }

  
  
  
  
      render(){
        return (
          <>
             {/* members */}
             <button onClick={this.addMembers}>ADD</button>

            <div className="createProjectMember">
                 <input onChange={e=>{ this.setState({search:e.target.value});if(e.target.value.length>4)this.setState({loading:true,data:[],page:0}) }} value={this.state.search}   placeholder="search" className="createProjectMember__box" type="text"/>
                 <div className="createProjectMember__result">
                   {this.state.data.map(member=>
                     <div className="createProjectMember__result_item">
                       <figure className="createProjectMember__result_item-fig">
                       <img className="createProjectMember__result_item-fig_img" src={member.thumbnailUrl?member.thumbnailUrl:member.imageUrl} alt=""/>
                          <figcaption className="createProjectMember__result_item-fig_cap">{member.email}</figcaption>
                       </figure>
                       <div className="createProjectMember__result_item createProjectMember__result_item-col2">
                            <div className="createProjectMember__result_item-name">{member.firstName} {member.lastName}</div>
                            <div className="createProjectMember__result_item-since"><strong>SINCE:</strong> {member.addedOn}</div>
                       </div>
                       <button className="createProjectMember__result_item createProjectMember__result_item--btn" disabled={this.state.addedEmails.indexOf(member.email)>=0} onClick={()=>this.memberAddHandler(member)} ><i className="fa fa-plus plusIcon" aria-hidden="true"></i></button>
                    </div>)}
                    <button className="createProjectMember__result_btn" disabled={this.state.page+1>=this.state.totalPages} onClick={()=>this.setState((state)=>{return {page:state.page+1,loading:true}})} >Load More</button>
                 </div>
            </div>
  
            {/* added */}
            <div className="createProjectAdded">
            <input placeholder="Find a SOLDIER" className="createProjectMember__box" type="text"/>
            <div className="createProjectMember__result">
               <br/>
               <h2 className="createProjectMember__result_h2">Creator</h2>
               <hr/>
               LoggedIn user
               <br/>
               <h2  className="createProjectMember__result_h2">Chief</h2>
               <hr/>
               <div className="createProjectMember__result-2 createProjectMember__result">
                 {this.state.members.map((member,i)=>{
                  if(member.authority==="CHIEF"){
                    return <div className="createProjectMember__result_item">
                               <figure className="createProjectMember__result_item-fig">
                                  <img className="createProjectMember__result_item-fig_img" src={member.thumbnailUrl?member.thumbnailUrl:member.imageUrl} alt=""/>
                                 
                                  <figcaption className="createProjectMember__result_item-fig_cap">{member.email}</figcaption>
                               </figure>
                               <div className="createProjectMember__result_item createProjectMember__result_item-col2">
                                    <div className="createProjectMember__result_item-name">{member.firstName} {member.lastName}</div>
                                    <div className="createProjectMember__result_item-since"><strong>SINCE:</strong> {member.addedOn}</div>
                               </div>
                               <div >
                                  <i onClick={()=>this.memberRemoveHandler(member.email,i)} className="fa fa-times removeIcon removeIcon_mod-1" aria-hidden="true"></i>
                                  <select id="selectAdded" className="select" onChange={(e)=>this.authorityChangeHandler(i,e.target.value)}><i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                                    <option className="select__option" defaultChecked value="CHIEF">Chief</option>
                                    <option className="select__option" value="SOLDIER">SOLDIER</option>
                                  </select>
                                </div>
                          </div>
                 }})}
               </div>
               <br/>
               <h2 className="createProjectMember__result_h2">SOLDIER</h2>
               <hr className="hr"/>
               <div className="createProjectMember__result-2 createProjectMember__result">
               {this.state.members.map((member,i)=>{
                 if(member.authority==="SOLDIER"){
                   return <div className="createProjectMember__result_item">
                              <figure className="createProjectMember__result_item-fig">
                              <img className="createProjectMember__result_item-fig_img" src={member.thumbnailUrl?member.thumbnailUrl:member.imageUrl} alt=""/>
                                 <figcaption className="createProjectMember__result_item-fig_cap">{member.email}</figcaption>
                              </figure>
                              <div className="createProjectMember__result_item createProjectMember__result_item-col2">
                                   <div className="createProjectMember__result_item-name">{member.firstName} {member.lastName}</div>
                                   <div className="createProjectMember__result_item-since"><strong>SINCE:</strong> {member.addedOn}</div>
                              </div>
                              <div >
                                 <i onClick={()=>this.memberRemoveHandler(member.email,i)} className="fa fa-times removeIcon removeIcon_mod-1" aria-hidden="true"></i>
                                 <select className="select" onChange={(e)=>this.authorityChangeHandler(i,e.target.value)} >
                                   <option className="select__option" defaultChecked value="SOLDIER">SOLDIER</option>
                                   <option className="select__option" value="CHIEF">Chief</option>
                                 </select>
                               </div>
                         </div>
                }})}
                </div>
            </div>
        </div>
        </>
        )
      }
    }
  

export default ProjectDashboardMembersAdd;