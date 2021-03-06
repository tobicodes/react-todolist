import React, { Component } from 'react';
import Todo from './Todo';


class Todolist extends Component{
  render(){
    const todos = this.props.list.map(todo =>
      <Todo
        key={todo.id}
        title={todo.title}
        description={todo.description}
        removeMe ={this.props.removeMe.bind(this,todo.id)}
      />
      );
    return (
      <div>
         {todos}
      </div> 
      )
  }
}

export default Todolist;




// Todolist.defaultProps ={
//   todos: [{title:'Hungry', description: 'Photosynthesize'}, {title:'Thirsty', description:'Drink a pint'}, {title:'Wavy', description:'Fly upside down'}]
// }

// removeToDo(id){
//     let todos = this.props.todos.slice();
//     for (var i=0; i< todos.length; i++){
//       if(todos[i].id === id) break;
//     }
//     todos.splice(i,1);
//     this.setState({todos});
//   }

// removeMe = {this.removeToDo.bind(this,todo.id)}

