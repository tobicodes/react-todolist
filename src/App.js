import React, { Component } from 'react';
import Todolist from './Todolist'
import NewTodoForm from './NewTodoForm';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
      this.state ={
        listOfTodos : []
      }
  this.addTodo = this.addTodo.bind(this);
  this.removeTodo = this.removeTodo.bind(this)
  }

  // creates a long random string separated by dashes
  // use this as id for each todo

  guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
}

  addTodo(title, description){
    const listOfTodos = this.state.listOfTodos.slice();
    listOfTodos.push({'id': this.guid(), 'title':title, 'description':description});
    this.setState({listOfTodos});
  }

  removeTodo(id){
    let listOfTodos = this.state.listOfTodos.slice();
    for (var i=0; i< listOfTodos.length; i++){
      if(listOfTodos[i].id === id) break;
    }
    listOfTodos.splice(i,1);
    this.setState({listOfTodos});
  }

  render() {
    return (
      <div>
        <div className="App">
          <NewTodoForm addTodo ={this.addTodo} /> 
          <Todolist removeMe ={this.removeTodo} list={this.state.listOfTodos} />
        </div>
      </div>
    );
  }
}

export default App;


