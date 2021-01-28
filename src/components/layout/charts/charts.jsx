import axios from 'axios';
import React, { Component } from 'react'
import { Chart } from 'react-charts'


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
          interactionDate: [{ label: "interactionDate test", data: [...arrDate] }],
          interactionDay: [{ label: "interactionDay test", data: [...arrDay] }],
          conversationDate: [{ label: "conversation date", data: [...conversationDateArr] }],
          conversationMonth: [{ label: "conversation month", data: [...conversationtMonthArr] }],
          commentDate: [{ label: "comment date", data: [...commentDateArr] }],
          commentMonth: [{ label: "comment label", data: [...commentMonthArr] }],

        })
      })
    //.catch(err=>alert(err));
  }

  render() {
    console.log(this.state);


    // const  data = [
    //         {
    //           label: 'Series 1',
    //           data: [[26,10],[27,19]]
    //         },
    //         {
    //           label: 'Series 2',
    //           data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
    //         }
    //       ]

    const axes = [
      { primary: true, type: 'linear', position: 'bottom' },
      { type: 'linear', position: 'left' }
    ];




    if (!this.state.interactionDate)
      return null;

    return (
      <>
        <div
          style={{
            width: '400px',
            height: '300px'
          }}
        >
          <Chart data={this.state.interactionDate} axes={axes} />
        </div>

        <div
          style={{
            width: '400px',
            height: '300px'
          }}
        >
          <Chart data={this.state.interactionDay} axes={axes} />
        </div>
        <div
          style={{
            width: '400px',
            height: '300px'
          }}
        >
          <Chart data={this.state.commentDate} axes={axes} />
        </div>
        <div
          style={{
            width: '400px',
            height: '300px'
          }}
        >
          <Chart data={this.state.commentMonth} axes={axes} />
        </div>
        <div
          style={{
            width: '400px',
            height: '300px'
          }}
        >
          <Chart data={this.state.conversationDate} axes={axes} />
        </div>
        <div
          style={{
            width: '400px',
            height: '300px'
          }}
        >
          <Chart data={this.state.conversationMonth} axes={axes} />
        </div>

      </>
    )
  }
}
