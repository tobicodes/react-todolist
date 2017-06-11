import React, { Component } from 'react';
import Todolist from './Todolist'
import NewTodoForm from './NewTodoForm';
import './App.css';


// // your app should be in charge of passing an array of todos to the TodoList

// and it should be in charge of getting data from the newTodo form 
// and creating a new todo

 
// and then re-rendering the todolist with the new todo


class App extends Component {
  constructor(props){
    super(props);
      this.state ={
        listOfTodos : []
      }
  this.populateListOfTodos = this.populateListOfTodos.bind(this);
  }

  // populate listOfTodos array by grabbing user input (state of TodoForm) 

  populateListOfTodos(){
    var arr = [];
    arr.push(this.props.title, this.props.description);
    this.state.listOfTodos.push(arr);
  }

  addTodo(){
        this.props.title = this.state.maybeTitle;
        this.props.description = this.state.maybeDescription; 
      }
  // Take the submitted value of NewTodoForm component and store it as prop on App comp

  // title={this.props.title} description = {this.props.description}
  render() {
    return (
      <div>
        <div className="App">
          <NewTodoForm addTodo ={this.addTodo.bind(this)} title={this.props.title} description = {this.props.description}/> 
          <Todolist list={this.state.listOfTodos} />
        </div>
      </div>
    );
  }
}

export default App;
