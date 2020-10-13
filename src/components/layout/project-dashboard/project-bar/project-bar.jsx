import React, {Component} from "react"


  class ProjectBar extends Component{

    render(){

      return (
            <div className="projectBar">
               <div className="projectBar__img">
                   <img src="" alt=""/>
               </div>
               <div className="projectBar__details">
                   <div className="projectBar__details_col1">
                       <div className="projectBar__details_col1-div"><span className="projectBar__details_col1-div_first">Project Id</span><span className="projectBar__details_col1-div_second">dfgsddfdsfdsff</span></div>
                       <div className="projectBar__details_col1-div"><span className="projectBar__details_col1-div_first">project Name</span><span className="projectBar__details_col1-div_second">test2</span></div>
                       <div className="projectBar__details_col1-div"><span className="projectBar__details_col1-div_first">Creator</span><span className="projectBar__details_col1-div_second">Anuj Bahtt</span></div>
                       <div className="projectBar__details_col1-div"><span className="projectBar__details_col1-div_first">Added On</span><span className="projectBar__details_col1-div_second">02/12/2020</span></div>
                       <div className="projectBar__details_col1-div"><span className="projectBar__details_col1-div_first">Starting Date</span><span className="projectBar__details_col1-div_second">02/12/2020</span></div>
                       <div className="projectBar__details_col1-div"><span className="projectBar__details_col1-div_first">Ending Date</span><span className="projectBar__details_col1-div_second">02/12/2020</span></div>
                   </div>
                   <div className="projectBar__details_col2">
                        <div className="projectBar__details_col2-element">Elements</div>
                        <div className="projectBar__details_col2-div">
                            <div className="projectBar__details_col1-div"><span className="projectBar__details_col1-div_first">Missions</span><span className="projectBar__details_col1-div_second">5</span></div>
                            <div className="projectBar__details_col1-div"><span className="projectBar__details_col1-div_first">Notes</span><span className="projectBar__details_col1-div_second">10</span></div>
                        </div>
                        <div className="projectBar__details_col2-div">
                            <div className="projectBar__details_col1-div"><span className="projectBar__details_col1-div_first">Links</span><span className="projectBar__details_col1-div_second">12</span></div>
                            <div className="projectBar__details_col1-div"><span className="projectBar__details_col1-div_first">conversations</span><span className="projectBar__details_col1-div_second">12</span></div>
                        </div>
                        <hr className="hr"/>
                        <div className="projectBar__details_col2-div">
                            <div className="projectBar__details_col1-div"><span className="projectBar__details_col1-div_first">Menbers</span><span className="projectBar__details_col1-div_second">12</span></div>
                            <div className="projectBar__details_col1-div"><span className="projectBar__details_col1-div_first">Chief</span><span className="projectBar__details_col1-div_second">12</span></div>
                        </div>
                        <div className="projectBar__details_col2-last"><div className="projectBar__details_col1-div"><span className="projectBar__details_col1-div_first">Soilder</span><span className="projectBar__details_col1-div_second">12</span></div></div>
                   </div>
               </div>
            </div>
      )
    }
  }


 export default ProjectBar;
