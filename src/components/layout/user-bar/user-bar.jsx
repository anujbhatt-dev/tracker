import React, { Component } from 'react'
import AppContext from '../../.././app-context'


 class UserBar extends Component {

    static contextType=AppContext;

    render() {


        console.log("CONTEXT "+JSON.stringify(this.context))

        return (
            <div>
                UserBar
            </div>
        )
    }
}


export default  UserBar
