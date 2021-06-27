export default function manageTodo(state = { todos: [], todo: '' }, { type, todo }) {
  switch(type) {
    case 'ADD_TODO':
      return { ...state, todos: state.todos.concat(todo) };
    
    case 'INPUT_TODO_TEXT':
      console.log('Input Todo >> ', todo)
      return { ...state, todo };

    default:
      return state;  
  }
}