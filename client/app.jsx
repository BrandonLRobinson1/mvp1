// console.log('hello world');



import React from 'react';
import ReactDOM from 'react-dom';
import {Username} from './UserName.jsx'
import {Messages} from './messages.jsx'
import {Pokeobj} from './pokeobj.jsx'
import $ from 'jquery'

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      user: 'charmander',
      photo: '',
      messages: '',
      pokemon: []
    };
   
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
 var context = this;
 var poke = {"name": this.state.user}
 $.ajax({
    url: 'http://127.0.0.1:3000/pokemon',
    type: 'GET',
    dataType: 'JSON',
    data: poke,
    success: (data)=>{
      console.log(context)
      console.log(data)
      context.setState({
        pokemon: [].concat(data)
      })
    },
    error: (err)=>{
      console.log(error);
    }
  })
 //end ajax
 }


  render () {

    return(
      <div>
     
        <Username addNewUser={this.addNewUser.bind(this)}/> 
        <Messages addNewMessage={this.addNewMessage.bind(this)}/>
        <Pokeobj />
      </div>
    )

  }
}


ReactDOM.render( <App/>, document.getElementById('app') );


 //var context = this;


  
// for(var i = 1; i < 10; i++){
  


//   $.ajax({
//       url: 'http://pokeapi.co/api/v2/pokemon/' + i + '/',
//       //getting information
//       type: "GET",
//       success: function(pokemon){
//         //$("body").append(pokemon.id, pokemon.name, pokemon.base_experience, pokemon.height, pokemon.order, pokemon.weight, pokemon.sprites.front_default);
//         // var newPokemon;
//         allpokemon[pokemon.name] = new PokeObj(pokemon.name, pokemon.height, pokemon.weight, pokemon.order, pokemon.id,pokemon.base_experience, pokemon.sprites.front_default);
//         console.log(allpokemon)
//         context.setState({
//           pokemon: allpokemon[pokemon.name];
//         });

//       },
//       error: function(){
//         console.log('fisssssssurreeeee')
//       }
//       // complete: function(){},
//   });


// }










// $( document ).ready(function() {

// $(".GetPokemon").on('click', () => {
//   console.log('hello')
// })

//  })


//user={this.state.user}