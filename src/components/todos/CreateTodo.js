// ./src/components/todos/CreateTodo.js

import React, { Component } from 'react';
import { connect } from 'react-redux';

class CreateTodo extends Component {
  handleInputChange = ({ target }) => {
    this.props.inputTodo(target.value)
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addTodo(todo);
  }
 
  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>add todo</label>
            <input value={this.props.todo} onChange={this.handleInputChange} type="text" />
          </p>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

const mapStateToProps = state => ({
  todo: state.todo
});

const mapDispatchToProps = dispatch => ({
  addTodo: todo => dispatch({ type: 'ADD_TODO', todo }),
  inputTodo: todoText => dispatch({ type: 'INPUT_TODO_TEXT', todoText })
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateTodo);