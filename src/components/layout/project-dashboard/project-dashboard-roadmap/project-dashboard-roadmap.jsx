import React, {Component} from "react"
import ReactFlow,{ReactFlowProps} from "react-flow-renderer";
import ProjectLabel from "./node-labels/project-label";
import MissionLabel from "./node-labels/mission-label";
import MissionLeafLabel from "./node-labels/mission-leaf-label";



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

      //converting  data to element


     let queue= [...this.props.data.children];

     let  hashMap={};

     const projectNode={
       ...this.props.data.project
     }

     let x= 250;
     let y =100

     projectNode.position={x:x,y:y};
     projectNode.data={label:<ProjectLabel projectNode={projectNode} />}

     let element=[projectNode];
     
     let level=0;

     while(queue.length!=0){
        
             let node=queue.shift();

             if(level!=node.level)
                {
                  level=node.level;
                  y+=200;
                  x=0;
                }
                
                x+=100;

            node.children.forEach(child=>{
              queue.push(child);
            })

            if(node.level==1)
              {
                node.position={x:x,y:y};
                node.data={label:<MissionLabel data={node}/>}
                element.push({
                  ...node
                });
                element.push( { id: projectNode.id+"-"+node.id, source:projectNode.id, target:node.id, animated: true })
              }
            else{

              if(node.children && node.children.length!=0)

           {   node.position={x:x,y:y};
              node.data={label:<MissionLabel data={node}/>}

              element.push({
                ...node
              })
              element.push({ id: node.parentId+"-"+node.id, source:hashMap[node.parentId], target:node.id, animated: true})
            }else{
              node.position={x:x,y:y};
              node.data={label:<MissionLeafLabel data={node}/>}

              element.push({
                ...node
              })
              element.push({ id: node.parentId+"-"+node.id, source:hashMap[node.parentId], target:node.id, animated: true})
          

            }
              }

              hashMap[node.missionId]=node.id;



     }

     console.log(element);

this.setState({elements:element})

    }




    render(){
       
  
      

      return (
         <div style={{ height: 1000 }} className="projectDashboardRoadmap">
           123
               <ReactFlow  elements={this.state.elements} />
           
         </div>
      )
    }
  }


 export default ProjectDashboardRoadmap;
