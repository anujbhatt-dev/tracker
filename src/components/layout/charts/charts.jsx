import axios from 'axios';
import React, { Component } from 'react'
import { Chart } from 'react-charts'
import {Dashboard} from "precise-ui"

export default class Charts extends Component {



  state = {

    interactionDate: undefined,
    interactionDay: undefined,
    conversationDate: undefined,
    conversationMonth: undefined,
    commentDate: undefined,
    commentMonth: undefined,


  }

  componentDidMount = () => {

    setTimeout(() => {
      axios.get("/v1/user/charts")
      .then(res => {
        let arrDate = [];
        let arrDay = [];
        res.data.interaction.forEach(i => {
          arrDate.push([i.date, i.count]);
          arrDay.push([i.day, i.count]);
        });

        let commentDateArr = [];
        let commentMonthArr = [];
        let conversationDateArr = [];
        let conversationtMonthArr = [];

        res.data.comment.date.forEach(item => {
          commentDateArr.push([ item.date,item.count]);
        }
        )

        res.data.comment.month.forEach(item => {
          commentMonthArr.push([ item.month,item.count]);
        }
        )
        res.data.conversation.date.forEach(item => {
          conversationDateArr.push([ item.date,item.count]);
        }
        )
        res.data.conversation.month.forEach(item => {
          conversationtMonthArr.push([ item.month,item.count]);
        }
        )



        this.setState({
          interactionDate: [{ label: "interactionDate test", data: [...arrDate]}],
          interactionDay: [{ label: "interactionDay test", data: [...arrDay] }],
          conversationDate: [{ label: "conversation date", data: [...conversationDateArr] }],
          conversationMonth: [{ label: "conversation month", data: [...conversationtMonthArr] }],
          commentDate: [{ label: "comment date", data: [...commentDateArr] }],
          commentMonth: [{ label: "comment label", data: [...commentMonthArr] }],

        })
      })
    .catch(err=>alert(err));
    }, 1000);


  
  }

  render() {
    const style = {
      height: '100%',
      width: '100%',
      background: '#ccc',
      

    };
    const tiles = [
      { id: '1', rowSpan: 3, colSpan:2},
      { id: '2', rowSpan: 3, colSpan:2},
      { id: '3', rowSpan: 3, colSpan:2},
      { id: '4', rowSpan: 3, colSpan:2},
      { id: '5', rowSpan: 3, colSpan:2},
      { id: '6', rowSpan: 3, colSpan:2},
      
    ];


    const axes = [
      { primary: true, type: 'linear', position: 'bottom' },
      { type: 'linear', position: 'left' }
    ];

    const axes1 = [
      { primary: true, type: 'ordinal', position: 'bottom' },
      { type: 'linear', position: 'left' }
    ];



    if (!this.state.interactionDate)
      return null;

    return (
      <div className="createProjectWrapper">

        
             <Dashboard defaultTiles={tiles} rowHeight={this.props.rowHeight?this.props.rowHeight:150} columnWidth={this.props.colWidth?this.props.colWidth:150} disabled>

        <div
          style={{
             height: '100%',
             width: '100%',
          }}
        >
 
        <Chart data={this.state.interactionDate} series={{type:"bar"}} axes={axes1} tooltip />
          {/* <Chart data={this.state.interactionDate} axes={axes} /> */}
        </div>

        <div
          style={{
             height: '100%',
             width: '100%',
          }}
        >
          <Chart data={this.state.interactionDay} series={{type:"bar"}} axes={axes1} tooltip />
        </div>
        <div
          style={{
             height: '100%',
             width: '100%',
          }}
        >
          <Chart data={this.state.commentDate} axes={axes} />
        </div>
        <div
          style={{
             height: '100%',
             width: '100%',
          }}
        >
          <Chart data={this.state.commentMonth} axes={axes} />
        </div>
        <div
          style={{
             height: '100%',
             width: '100%',
          }}
        >
          <Chart data={this.state.conversationDate} axes={axes} />
        </div>
        <div
          style={{
             height: '100%',
             width: '100%',
          }}
        >
          <Chart data={this.state.conversationMonth} axes={axes} />
        </div>
</Dashboard>
      </div>
    )
  }
}
