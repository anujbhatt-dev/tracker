import React, {Component} from "react"


  class HorizontalNav extends Component{

    render(){

      return (
         <div className={"horizontalNav "+(this.props.show?"show":"dontShow")}>
             <div className="horizontalNav__item"><i class="fa fa-university" aria-hidden="true"></i>  <div>231</div></div>
             <div className="horizontalNav__item"><i class="fa fa-university" aria-hidden="true"></i>  <div>231</div></div>
             <div className="horizontalNav__item"><i class="fa fa-university" aria-hidden="true"></i>  <div>231</div></div>
             <div className="horizontalNav__item"><i class="fa fa-university" aria-hidden="true"></i>  <div>231</div></div>
         </div>

      )
    }
  }


 export default HorizontalNav;
