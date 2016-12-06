import React from 'react'

class Username extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      user: ''
    }

  }


  handleUser(e){
    this.setState({
      user: e.target.value
    });
  }

  addUser(){
    this.props.addNewUser(this.state)
  }

  

  render () {
    console.log(this.props)
    return(
      <div>
        <p>Enter your Username:</p>
        <input type="text" value={this.state.user} onChange={this.handleUser.bind(this)} />
        <button onClick={ this.addUser.bind(this) }>Submit</button>
      </div>
    )

  }

}

export {Username}