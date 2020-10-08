import React, {Component} from "react"
import { withRouter } from "react-router-dom"
import axios from "axios"


  class ProjectDashboardLinks extends Component{

    state={
      links:[
        {
          title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum quaerat aliquid labore voluptate rem dolorum corporis dolores, modi esse accusantium!",
          description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero similique, eum distinctio, nam laboriosam et at fugiat corporis voluptates praesentium, deserunt magni fuga vel minima exercitationem ipsam sunt deleniti nesciunt delectus ad odio facilis. Quod dolorum voluptatem quo accusamus recusandae, expedita omnis rem impedit! Tenetur error eius earum recusandae alias blanditiis praesentium explicabo inventore, incidunt magni odit ducimus atque voluptatibus dicta, suscipit tempore, necessitatibus aspernatur perferendis ab neque illum minus adipisci doloremque ullam animi? Distinctio inventore maiores sunt animi adipisci aliquid at soluta totam, voluptatibus, accusantium modi, tempore! Possimus aperiam temporibus magni libero id optio odio molestias deserunt, non quidem.",
          toggle:false
        },
        {
          title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum quaerat aliquid labore voluptate rem dolorum corporis dolores, modi esse accusantium!",
          description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero similique, eum distinctio, nam laboriosam et at fugiat corporis voluptates praesentium, deserunt magni fuga vel minima exercitationem ipsam sunt deleniti nesciunt delectus ad odio facilis. Quod dolorum voluptatem quo accusamus recusandae, expedita omnis rem impedit! Tenetur error eius earum recusandae alias blanditiis praesentium explicabo inventore, incidunt magni odit ducimus atque voluptatibus dicta, suscipit tempore, necessitatibus aspernatur perferendis ab neque illum minus adipisci doloremque ullam animi? Distinctio inventore maiores sunt animi adipisci aliquid at soluta totam, voluptatibus, accusantium modi, tempore! Possimus aperiam temporibus magni libero id optio odio molestias deserunt, non quidem.",
          toggle:false
        },
        {
          title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum quaerat aliquid labore voluptate rem dolorum corporis dolores, modi esse accusantium!",
          description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero similique, eum distinctio, nam laboriosam et at fugiat corporis voluptates praesentium, deserunt magni fuga vel minima exercitationem ipsam sunt deleniti nesciunt delectus ad odio facilis. Quod dolorum voluptatem quo accusamus recusandae, expedita omnis rem impedit! Tenetur error eius earum recusandae alias blanditiis praesentium explicabo inventore, incidunt magni odit ducimus atque voluptatibus dicta, suscipit tempore, necessitatibus aspernatur perferendis ab neque illum minus adipisci doloremque ullam animi? Distinctio inventore maiores sunt animi adipisci aliquid at soluta totam, voluptatibus, accusantium modi, tempore! Possimus aperiam temporibus magni libero id optio odio molestias deserunt, non quidem.",
          toggle:false
        },
        {
          title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum quaerat aliquid labore voluptate rem dolorum corporis dolores, modi esse accusantium!",
          description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero similique, eum distinctio, nam laboriosam et at fugiat corporis voluptates praesentium, deserunt magni fuga vel minima exercitationem ipsam sunt deleniti nesciunt delectus ad odio facilis. Quod dolorum voluptatem quo accusamus recusandae, expedita omnis rem impedit! Tenetur error eius earum recusandae alias blanditiis praesentium explicabo inventore, incidunt magni odit ducimus atque voluptatibus dicta, suscipit tempore, necessitatibus aspernatur perferendis ab neque illum minus adipisci doloremque ullam animi? Distinctio inventore maiores sunt animi adipisci aliquid at soluta totam, voluptatibus, accusantium modi, tempore! Possimus aperiam temporibus magni libero id optio odio molestias deserunt, non quidem.",
          toggle:false
        },
        {
          title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum quaerat aliquid labore voluptate rem dolorum corporis dolores, modi esse accusantium!",
          description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero similique, eum distinctio, nam laboriosam et at fugiat corporis voluptates praesentium, deserunt magni fuga vel minima exercitationem ipsam sunt deleniti nesciunt delectus ad odio facilis. Quod dolorum voluptatem quo accusamus recusandae, expedita omnis rem impedit! Tenetur error eius earum recusandae alias blanditiis praesentium explicabo inventore, incidunt magni odit ducimus atque voluptatibus dicta, suscipit tempore, necessitatibus aspernatur perferendis ab neque illum minus adipisci doloremque ullam animi? Distinctio inventore maiores sunt animi adipisci aliquid at soluta totam, voluptatibus, accusantium modi, tempore! Possimus aperiam temporibus magni libero id optio odio molestias deserunt, non quidem.",
          toggle:false
        },
      ]
    }

    componentDidMount=()=>{
      axios.get("/v1/project/"+this.props.projectId+"/note")
      .then(res=>{
     this.setState({links:res.data});
      })
     
     }

    toggleHandler=(i)=>{
       const newLinks =this.state.links
       newLinks[i].toggle = !newLinks[i].toggle
       this.setState({
           notes:[...newLinks]
       })
    }

    render(){

      console.log(this.props) 


      return (
        <div className="projectDashboardNotes">
            {this.state.links.map((link,i)=>{
              return <div key={link.title+i} className="projectDashboardNotes__notes">
                         <div className="title">
                           <a href={link.title} className="title__text">{link.title}</a>
                           <div onClick={()=>this.toggleHandler(i)}  className="title__arrow"><i className="fa fa-angle-double-down" aria-hidden="true"></i></div>
                         </div>
                         <div style={!link.toggle?{display:"none"}:{display:"block"}} className="description">{link.description}</div>
                      </div>
            })}
        </div>
      )
    }
  }


 export default withRouter(ProjectDashboardLinks);
