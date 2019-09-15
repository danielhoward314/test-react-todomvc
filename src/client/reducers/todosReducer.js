import uuid from 'uuid/v4'

export const initialState = {
  todos: []
}

const ADD = 'ADD'
const REMOVE = 'REMOVE'

export const addTodo = (description) => {
  description = description.trim()
  const id = uuid()
  return {
    type: ADD,
    todo: {
      id,
      description,
      isCompleted: false
    }
  }
}

export const removeTodo = (todo) => {
  return {
    type: REMOVE,
    todo
  }
}

function todosReducer(state, action) {
  switch (action.type) {
    case ADD:
      return {
        todos: state.todos.concat(action.todo)
      }
    case REMOVE:
      return {
        todos: state.todos.filter((todo) => todo.id !== action.todo.id)
      }
    default:
      return state
  }
}

export default todosReducer
