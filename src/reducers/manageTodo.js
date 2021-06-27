export default function manageTodo(state = { todos: [], todo = '' }, { type, todo }) {
  switch(type) {
    case 'ADD_TODO':
      return { ...state, todos: state.todos.concat(todo) };
    
    case 'INPUT_TODO_TEXT':
      return { ...state, todo };

    default:
      return state;  
  }
}