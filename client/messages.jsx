import React from 'react'

class Messages extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      message: ''
    }
  }

  handleMessage(e){
    this.setState({
      message: e.target.value
    })
    console.log(this.state.message)
  }

  handleSubmit(){
    //e.preventDefault();
    this.props.addNewMessage(this.state)
  }

  render(){
    console.log(this.props)
    return(
      <div>
        <textarea type="text" value={this.state.message} onChange={this.handleMessage.bind(this)}/>
        <button onClick={this.handleSubmit.bind(this)}> Add Message </button>
      </div>
      )
  }
}

export {Messages}