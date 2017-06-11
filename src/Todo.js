import React, { Component } from 'react';
import './Todo.css';


class Todo extends Component{
  render(){
  
  return(
    <div className='todo'>
      <p><span className="todoTitle">{this.props.title}:</span> {this.props.description}</p>
      <button className ="deleteButton" onClick={this.props.removeMe}>Complete</button>
    </div>
    )
  }
}

export default Todo;

