import React, {Component} from "react"


  class VerticalNav extends Component{

    render(){

      return (
        <div  className={"verticalNav "+(this.props.show?"show":"dontShow")}>
            <div className="verticalNav__item"><i class="fa fa-university" aria-hidden="true"></i> <div>231</div></div>
            <div className="verticalNav__item"><i class="fa fa-university" aria-hidden="true"></i> <div>231</div></div>
            <div className="verticalNav__item"><i class="fa fa-university" aria-hidden="true"></i> <div>231</div></div>
            <div className="verticalNav__item"><i class="fa fa-university" aria-hidden="true"></i> <div>231</div></div>
        </div>
      )
    }
  }


 export default VerticalNav;
