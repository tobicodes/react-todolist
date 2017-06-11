import React, { Component } from 'react';

class NewTodoForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      maybeTitle : '',
      maybeDescription:'',
      actualTitle:'',
      actualDescription:''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}
    handleChange(e){
      this.setState({
        [e.target.name] : e.target.value
      });
    }


    addTodo(){
      this.props.title = this.state.maybeTitle;
      this.props.description = this.state.maybeDescription; 
    }

    handleSubmit(e){
      e.preventDefault;
      this.setState({
        maybeTitle : '',
        maybeDescription:'',
        actualTitle:this.state.maybeTitle,
        actualDescription:this.state.maybeDescription
      });
      this.props.addTodo();
    }

     
    

    render(){
      return(
        <div>
          <h2 className="text-center"> Yet another todo app ;) </h2>
          <form onSubmit={this.handleSubmit}>
            <input 
              name='maybeTitle'
              value={this.state.maybeTitle}
              onChange={this.handleChange}
              type='text'
              placeholder='Title'
            />
            <input 
              name='maybeDescription'
              value={this.state.maybeDescription}
              onChange={this.handleChange}
              type='text'
              placeholder='Description'
            />  
            <input type='submit' className="btn btn-success"/>
          </form>
        </div>
      )
    }
  }

export default NewTodoForm;









// so your app component should render a TodoList and a TodoForm
// the TodoForm should have a prop called something like addTodo
// inside of that prop in the TodoForm, you would invoke `this.props.addTodo()`
// and pass in some state from the `TodoForm`
// then in your `App` you will handle that function being run
// so it would be something like `<TodoForm addTodo={this.handleTodo}/>` 
// and `handleTodo` is a function implemented in the `App` component


// addTodo(){
      //   this.props.title = this.state.maybeTitle;
      //   this.props.description = this.state.maybeDescription; 
      // }

      // You should pass a prop down from the app
      // And pass the state from todoform to that prop
      // And then inside the app component, add the todo to the list

      // The TodoForm should have a prop called something like addTodo
      // inside of that prop in the TodoForm, you would invoke `this.props.addTodo()`
      // and pass in some state from the `TodoForm`
      // then in your `App` you will handle that function being run










