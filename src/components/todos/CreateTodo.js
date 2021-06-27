// ./src/components/todos/CreateTodo.js

import React, { Component } from 'react';
import { connect } from 'react-redux';

class CreateTodo extends Component {
  state = {
    todo: ''
  }

  handleInputChange = ({ target }) => {
    this.setState({
      todo: target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addTodo(this.state.todo);
    this.setState({
      todo: ''
    });
  }
 
  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>add todo</label>
            <input value={this.state.todo} onChange={this.handleInputChange} type="text" />
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