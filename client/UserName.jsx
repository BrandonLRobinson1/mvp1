import React from 'react'

class Username extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      user: props.user
    };
  }

  render () {
    console.log(this.props)
    return(
      <form>
        Enter your UserName:
        <input onSubmit={this.handleSubmit} value={this.state.Username} />
        <button type="submit">Submit</button>
      </form>
    

    )
  }
}

export {Username}