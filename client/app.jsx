// console.log('hello world');



import React from 'react';
import ReactDOM from 'react-dom';
import {Username} from './UserName.jsx'
import {Messages} from './messages.jsx'
import $ from 'jquery'
var newPokemon;
class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      user: 'charmander',
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

  class PokeObj {
  constructor(name, height, weight, order, id, baseExperience, sprites)
  {
    this.name = name;
    this.height = height;
    this.weight = weight;
    this.order = order;
    this.id = id;
    this.baseExperience = baseExperience;
    this.sprites = sprites;
  }
}


  $.ajax({
      url: 'http://pokeapi.co/api/v2/pokemon/' + 'charmander' + '/',
      //getting information
      type: "GET",
      success: function(pokemon){
        //$("body").append(pokemon.id, pokemon.name, pokemon.base_experience, pokemon.height, pokemon.order, pokemon.weight, pokemon.sprites.front_default);
        // var newPokemon;
        newPokemon = new PokeObj(pokemon.name, pokemon.height, pokemon.weight, pokemon.order, pokemon.id,pokemon.base_experience, pokemon.sprites.front_default);
        console.log(newPokemon)
      },
      error: function(){
        console.log('wroooong biaaaatch')
      }
      // complete: function(){},
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