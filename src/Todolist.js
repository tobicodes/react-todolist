import React, { Component } from 'react';
import Todo from './Todo';


class Todolist extends Component{
  constructor(props) {
    super(props);
    var todos = [];
    for (var i = 0; i< this.props.list.length; i++){
      todos.push({
        id: i,
        title: this.props.list[i].title,
        description:this.props.list[i].description
      });
    }
}

  render(){
    const todos = this.props.list.map(todo =>
      <Todo
        key={todo.id}
        title={todo.title}
        description={todo.description}
      />
      );
    return (
      <div>
         
      </div> 
      )
  }
}

export default Todolist;

// to render todos from defaultprops, just render {todos} above in div


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

