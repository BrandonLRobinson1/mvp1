// console.log('hello world');



import React from 'react';
import ReactDOM from 'react-dom';
import {Username} from './UserName.jsx'
import {Messages} from './messages.jsx'
import $ from 'jquery'

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      user: '',
      photo: '',
      messages: ''
    };
    // this.user = '';
  }


    addNewUser(user) {
    // this.state.dogs.push(dog); //already pushed the dog into the array
    // cant have this line in 35 because push doesn't return the array (it returns the length)
    // we have to do set state because if we don't call set state - react will NOT know to re-render
    this.setState({
      user: user
    })
    console.log(this.state.user)
    //this.user = this.state.user;
  }

addNewMessage(message){
  this.setState({
    messages: message
  })
}


componentWillMount(){

  $.ajax({
      url: "http://localhost:3000/pokemon",
      method: "GET",
      // data: ,
      dataType: "json",
      success: ( data ) => {
        console.log(data);
        console.log('success')
      },
      error: ( error ) => {
        console.log( error );
      }

    });

}



  render () {

    return(
      <div>
     
        <Username addNewUser={this.addNewUser.bind(this)}/> 
        <Messages addNewMessage={this.addNewMessage.bind(this)}/>

      </div>
    )

  }
}


ReactDOM.render( <App/>, document.getElementById('app') );


// $( document ).ready(function() {

// $(".GetPokemon").on('click', () => {
//   console.log('hello')
// })

//  })


//user={this.state.user}