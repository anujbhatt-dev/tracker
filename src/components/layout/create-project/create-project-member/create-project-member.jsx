import React, {Component} from "react"
import axios from "axios";


  class CreateProjectMember extends Component{


    state={
      search:"",
      data:[],
      totalPages:"0",
      page:"0",
      loading:false,
      members:[],
      addedEmails:[],
      updating:false,
    }


    componentDidUpdate(){
      
      // console.log(this.state.members)
      if(this.state.loading && this.state.search.length>4)
        axios.get(`/v1/user/${this.state.search}/${this.state.page}`)
        .then(res=>{
          this.setState(state=>{return {data:state.data.concat(res.data.content),totalPages:res.data.totalPages,loading:false}});
          
        })
        .catch(err=>{
          alert("oops !!");
          this.setState({loading:false});
        })

        if(this.state.updating)
       { this.props.membersUpdateHandler(this.state.members);
      this.setState({updating:false})}



    }


    memberAddHandler=(member)=>{

      member.authority="SOILDER"

      this.setState(state=>{return {
                                 members:[member].concat(state.members),
                                 addedEmails:[member.email].concat(state.addedEmails),
                                 updating:true,
                                    }}); 
           
    }


    memberRemoveHandler=(email,index)=>{
      

      let members= [...this.state.members];
      let addedEmails=[...this.state.addedEmails];
         
      members.splice(index,1);
      addedEmails.splice(index,1);
 
      this.setState(state=>{return {
                                 members:members,
                                 addedEmails:addedEmails,
                                 updating:true,
                                    }}); 
                           
    }


    authorityChangeHandler(index,authority){


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
          <div className="createProjectSearch">
               <input onChange={e=>{ this.setState({search:e.target.value});if(e.target.value.length>4)this.setState({loading:true,data:[]}) }} value={this.state.search}   placeholder="search" className="createProjectSearch__box" type="text"/>
               <div className="createProjectSearch__result">
                 {this.state.data.map(member=>
                                <>
                                  <span>{member.email}</span>
                                  <button disabled={this.state.addedEmails.indexOf(member.email)>=0} onClick={()=>this.memberAddHandler(member)} >ADD</button>
                                  <br/>
                                  </> 
                                  )}
               </div>
          </div>
          <div className="createProjectAdded">
          <input placeholder="Find a soilder" className="createProjectSearch__box" type="text"/>
          <div className="createProjectSearch__result">
                

                 <br/>
                <h2>Creator</h2>
                <hr/>
          
              LoggedIn user
              

             
             
                <br/>
           <h2>Chief</h2>
                <hr/>
                {this.state.members
             .map((member,i)=>
              {if(member.authority==="CHIEF")
              return ( <>
              {member.email} {member.firstName} {member.authority}
              <button onClick={()=>this.memberRemoveHandler(member.email,i)} >Remove</button>
              <select  onChange={(e)=>this.authorityChangeHandler(i,e.target.value)}>
              <option defaultChecked value="CHIEF">Chief</option>
              <option value="SOILDER">Soilder</option>
              </select>
               <br/>
               </>)}
               )}



 
             <br/>
            <h2>Soilder</h2>
                 <hr/>
             {this.state.members
             .map((member,i)=>
                  {if(member.authority==="SOILDER")
                  return ( <>
                  {member.email} {member.firstName} {member.authority}
                  <button onClick={()=>this.memberRemoveHandler(member.email,i)} >Remove</button>
                  <select onChange={(e)=>this.authorityChangeHandler(i,e.target.value)} >
                  <option  defaultChecked value="SOILDER">Soilder</option>
                 <option value="CHIEF">Chief</option>
              </select>
                   <br/>
                   </>)}
               )}
        


          </div>
      </div>
      </>
      )
    }
  }


 export default CreateProjectMember;
