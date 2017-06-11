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
  }

  addTodo(title, description){
    const listOfTodos = this.state.listOfTodos.slice();
    listOfTodos.push({'title':title, 'description':description});
    this.setState({listOfTodos});
  }
  render() {
    return (
      <div>
        <div className="App">
          <NewTodoForm addTodo ={this.addTodo} /> 
          <Todolist list={this.state.listOfTodos} />
        </div>
      </div>
    );
  }
}

export default App;


// populate listOfTodos array by grabbing user input (state of TodoForm) 

  // populateListOfTodos(){
  //   var arr = [];
  //   arr.push(this.props.title, this.props.description);
  //   this.state.listOfTodos.push(arr);
  // }

  // Take the submitted value of NewTodoForm component and store it as prop on App comp