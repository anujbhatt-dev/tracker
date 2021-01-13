import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import style from "./project-discussion.css"


export default class ProjectDiscussion extends Component {
    render() {
        return (
            <div class="comment_block">
                <div class="create_new_comment">

                    <div class="user_avatar">
                        <img src="https://s3.amazonaws.com/uifaces/faces/twitter/BillSKenney/73.jpg" />
                    </div>
                    <div class="input_comment">
                        <input type="text" placeholder="Join the conversation.." />
                    </div>

                </div>

    <br/><br/>



                <div class="new_comment">

                    <ul class="user_comment">

                        <div class="user_avatar">
                            <img src="https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/73.jpg" />
                        </div>
                        <div class="comment_body">
                        <p><div class="replied_to">
                                    <p>
                                        <span class="user">Sarah Walkman:</span>
                            Pork belly migas flexitarian messenger bag Brooklyn gluten-free. Tilde kitsch skateboard Helvetica, lumbersexual four loko direct trade pour-over. Cronut deep v keffiyeh cornhole food truck
                            </p></div>
                                </p></div>

                        <div class="comment_toolbar">

                            <div class="comment_details">
                                <ul>
                                    <li><i class="fa fa-clock-o"></i> 13:94</li>
                                    <li><i class="fa fa-calendar"></i> 04/01/2015</li>
                                    <li><i class="fa fa-pencil"></i> <span class="user">Sarah Walkman</span></li>
                                </ul>
                            </div>
                            <div class="comment_tools">
                                <ul>
                                    <li><i class="fa fa-share-alt"></i></li>
                                  <li> <Link to={"/projectDashboard/"+this.props.projectId+"/discussion/123/comment"}><i class="fa fa-reply"></i></Link> </li>
                                    <li><i class="fa fa-heart love"></i></li>
                                </ul>
                            </div>

                        </div>
                     </ul>
                 </div> <br/><br/>



            </div>
        )
    }
}
