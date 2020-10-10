import React, {Component} from "react"
import ReactFlow,{ReactFlowProps} from "react-flow-renderer";
import ProjectLabel from "./node-labels/project-label";
import MissionLabel from "./node-labels/mission-label";
import MissionLeafLabel from "./node-labels/mission-leaf-label";
import Modal from "../../../../UI/modal";

import MissionLeafDetailView from "./detail-view/mission-view/mission-leaf-detail-view/mission-leaf-detail-view"
import MissionDetailView from "./detail-view/mission-view/mission-detail-view/mission-detail-view";
import ProjectDetailView from "./detail-view/project-detail-view/project-detail-view";

  class ProjectDashboardRoadmap extends Component{


    state={
     modalShow:false,
     detailData:{},
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
     projectNode.data={label:<ProjectLabel modalHandler={this.modalHandler}  {...projectNode} />}

     let element=[projectNode];
     
     let level=0;
     let flag=true;

     while(queue.length!=0){
        
             let node=queue.shift();

             if(level!=node.level)
                {
                  level=node.level;
                  y+=200;
                  x=0;
                }
                if(flag)
                {
                  flag=!flag
                y+=50;
              }else{
                flag=!flag
              y-=50;
            }

            x+=100;

            node.children.forEach(child=>{
              queue.push(child);
            })

            if(node.level==1)
              {
                node.position={x:x,y:y};
                node.data={label:<MissionLabel  modalHandler={this.modalHandler} {...node} />}
                node.type='input';
                element.push({
                  ...node
                });
                element.push( { id: projectNode.id+"-"+node.id, source:projectNode.id, target:node.id, animated: true })
              }
            else{

              if(node.children && node.children.length!=0)

           {   node.position={x:x,y:y};
           node.type='input';

              node.data={label:<MissionLabel  modalHandler={this.modalHandler} {...node}/>}

              element.push({
                ...node
              })
              element.push({ id: node.parentId+"-"+node.id, source:hashMap[node.parentId], target:node.id, animated: true})
            }else{
              node.position={x:x,y:y};
              node.type='output';

              node.data={label:<MissionLeafLabel  modalHandler={this.modalHandler} {...node}/>}

              element.push({
                ...node
              })
              element.push({ id: node.parentId+"-"+node.id, source:hashMap[node.parentId], target:node.id, animated: true})
          

            }
              }

              hashMap[node.missionId]=node.id;



     }

this.setState({elements:element})

    }


    modalHandler=(value,data)=>{

      this.setState({modalShow:value,detailData:data});
    }

    modalCloseHandler=()=>{
      this.setState({modalShow:false});
    }



    render(){
       
      return (
         <>
         {this.state.modalShow?
           this.state.modalShow==="PROJECT"?<Modal modalHandler={this.modalCloseHandler}><ProjectDetailView {...this.state.detailData}/></Modal>
           :this.state.modalShow==="MISSION"?<Modal modalHandler={this.modalCloseHandler}><MissionDetailView {...this.state.detailData}/></Modal>
           :<Modal modalHandler={this.modalCloseHandler}><MissionLeafDetailView {...this.state.detailData}/></Modal>
           :null}
         <div style={{ height: 1000 }} className="projectDashboardRoadmap">
              <ReactFlow  elements={this.state.elements} />
          </div>
         </>
      )
    }
  }


 export default ProjectDashboardRoadmap;
