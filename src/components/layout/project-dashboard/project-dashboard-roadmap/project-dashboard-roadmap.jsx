import React, {Component} from "react"
import ReactFlow,{ReactFlowProps} from "react-flow-renderer";
import ProjectLabel from "./node-labels/project-label";



  class ProjectDashboardRoadmap extends Component{


    state={
      elements: [
        {
          id: '1',
          type: 'input', // input node
          data: { label: <ProjectLabel/> },
          position: { x: 250, y: 25 },
        },
        // default node
        {
          id: '2',
          // you can also pass a React component as a label
          data: { label: <div>Default Node</div> },
          position: { x: 100, y: 125 },
        },
        {
          id: '3',
          type: 'output', // output node
          data: { label: 'Output Node' },
          position: { x: 250, y: 250 },
        },
        // animated edge
        { id: 'e1-2', source: '1', target: '2', animated: true },
        { id: 'e2-3', source: '1', target: '3' },
      ]
    }



    componentDidMount=()=>{
        
      this.setState({data:this.props.data});


      //convert data to element

    }




    render(){
       
  
      

      return (
         <div style={{ height: 300 }} className="projectDashboardRoadmap">
           123
               <ReactFlow  elements={this.state.elements} />
           
         </div>
      )
    }
  }


 export default ProjectDashboardRoadmap;
