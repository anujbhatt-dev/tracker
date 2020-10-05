import React, {Component} from "react"


  class ProjectDashboardNotes extends Component{

    state={
      notes:[
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

    toggleHandler=(i)=>{
       const newNotes =this.state.notes
       newNotes[i].toggle = !newNotes[i].toggle
       this.setState({
           notes:[...newNotes]
       })
    }

    render(){

      return (
         <div className="projectDashboardNotes">
             {this.state.notes.map((note,i)=>{
               return <div key={note.title+i} className="projectDashboardNotes__notes">
                          <div onClick={()=>this.toggleHandler(i)} className="title">
                            <div className="title__text">{note.title}</div>
                            <div className="title__arrow"><i className="fa fa-angle-double-down" aria-hidden="true"></i></div>
                          </div>
                          <div style={!note.toggle?{display:"none"}:{display:"block"}} className="description">{note.description}</div>
                       </div>
             })}
         </div>
      )
    }
  }


 export default ProjectDashboardNotes;
