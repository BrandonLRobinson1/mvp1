// console.log('hello world');

import React from 'react';
import ReactDOM from 'react-dom';
import {Username} from './UserName.jsx'
import $ from 'jquery'

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      user: ''
    };
  }

  render () {

    return(
      <div>
        <Username user={this.state.user}/>
      </div>
    )
    
  }
}


ReactDOM.render( <App/>, document.getElementById('app') );