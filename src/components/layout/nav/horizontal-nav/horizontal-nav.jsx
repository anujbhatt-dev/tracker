import React, {Component} from "react"


  class HorizontalNav extends Component{

    render(){

      return (
         <div className={"horizontalNav "+(this.props.show?"show":"dontShow")}>
             <div style={{color:"red",background:"white" }} className="horizontalNav__item"><i  aria-hidden="true" class="fa fa-bullseye "/> </div>
             <div style={{color:"yellow",background:"white" }} className="horizontalNav__item"><i  aria-hidden="true" class="fa fa-clipboard "/> </div>
             <div style={{color:"green",background:"white" }} className="horizontalNav__item"><i  aria-hidden="true" class="fa fa-paperclip "/> </div>
             <div style={{color:"black",background:"white" }} className="horizontalNav__item"><i  aria-hidden="true" class="fa fa-cog "/> </div>
         </div>

      )
    }
  }


 export default HorizontalNav;
