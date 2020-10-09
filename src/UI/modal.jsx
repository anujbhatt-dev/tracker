import React, {Component} from "react"


  class Modal extends Component{

    render(){

      return (
          <div className="modal">
              <div onClick={this.props.modalHandler} className="modal__backdrop">

              </div>
              <div className="modal__content">
                    {this.props.children}
              </div>
          </div>
      )
    }
  }


 export default Modal;
