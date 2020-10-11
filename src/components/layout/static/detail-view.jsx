import React, {Component} from "react"
import Modal from "../../../UI/modal"


  class DetailView extends Component{
    state={
      show:true
    }

    modalHandler=()=>{
      this.setState({
        show:!this.state.show
      })
    }

    render(){

      return (
        <Modal show={this.state.show} modalHandler={this.modalHandler}>
            <div className="detailView">
              <div className="detailViewRow">

               <div className="detailView__col1">
                  <div className="detailView__col1_row1">
                     <div className="detailView__col1_row1-id">gdfgfhdfdfds4165464</div>
                     <div className="detailView__col1_row1-todo">
                         <div className="detailView__col1_row1-todo_text">Todo</div>
                         <div className="detailView__col1_row1-todo_count">56</div>
                     </div>
                     <div className="detailView__col1_row1-high">
                         <div className="detailView__col1_row1-high_text">Todo</div>
                         <div className="detailView__col1_row1-high_count">56</div>
                     </div>
                     <div className="detailView__col1_row1-tech">
                         <div className="detailView__col1_row1-tech_text">Todo</div>
                         <div className="detailView__col1_row1-tech_count">56</div>
                     </div>
                  </div>

                  <div className="detailView__col1_row2">
                      <div>Added By: <strong>anuj bhatt</strong></div>
                      <div>Starting Date: <strong>02/12/2020</strong></div>
                  </div>
                  <div className="detailView__col1_row3">
                      <div>Added On: <strong>02/12/2020</strong></div>
                      <div>Ending Date: <strong>02/12/2020</strong></div>
                  </div>
               </div>
               <div className="detailView__col2">
                   circle
               </div>
              </div>

              <div  className="detailViewRow">
                 <div className="detailView__description">
                    <div className="detailView__description_head">
                       discription
                    </div>
                    <div className="detailView__description_des">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt temporibus rerum nemo unde aliquid maiores accusamus omnis delectus, corporis vitae, praesentium, incidunt sint dolorem facere quidem hic placeat nihil doloribus repudiandae magnam voluptatum similique officiis illum nostrum ducimus. Provident id unde ipsam deserunt ad sequi eligendi officia facilis, ullam asperiores!</div>
                 </div>
                 <div className="detailView__elements">
                      <div className="detailView__description_head">
                        Elements
                      </div>
                      <div>members: <strong>44</strong></div>
                      <div>objectives: <strong>44</strong></div>
                      <div>completed objectives: <strong>44</strong></div>
                      <div>Notes: <strong>44</strong></div>
                      <div>Links: <strong>44</strong></div>
                 </div>
              </div>
            </div>

        </Modal>
      )
    }
  }


 export default DetailView;
