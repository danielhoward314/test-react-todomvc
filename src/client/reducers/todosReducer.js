import uuid from 'uuid/v4'

export const initialState = {
  todos: []
}

const ADD = 'ADD'

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

function todosReducer(state, action) {
  switch (action.type) {
    case ADD:
      return {
        todos: state.todos.concat(action.todo)
      }
    default:
      return state
  }
}

export default todosReducer
