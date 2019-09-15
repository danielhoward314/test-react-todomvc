
import React, { useReducer, useState } from 'react';
import '../styles/base.scss'
import '../styles/app.scss';

import todosReducer, { initialState, addTodo } from '../reducers/TodosReducer'

const App = () => {
  // reducer for state management of todos array
  const [state, dispatch] = useReducer(todosReducer, initialState);

  // state of form input and event handlers
  const [description, setDescription] = useState('')
  const [isEmpty, setIsEmpty] = useState(true)
  const handleSubmit = (evt) => {
    evt.preventDefault()
    setDescription('')
    setIsEmpty(true)
    return dispatch(addTodo(description))
  }
  const handleChange = (evt) => {
    setDescription(evt.target.value)
    if (!evt.target.value) setIsEmpty(true)
    else setIsEmpty(false)
  }

    return (
        <main>
            <header>
                <h3>Todos List</h3>
                {state.todos && (
                    <p>
                        <strong>{state.todos.length}</strong>
                        <span>{` item${state.todos.length === 1 ? '' : 's'}`}</span>
                    </p>
                )}
            </header>
            <form onSubmit={handleSubmit}>
                <input autoFocus value={description} onChange={handleChange}/>
                <button disabled={isEmpty}>
                    <span >+</span>
                </button>
            </form>
            {!!state.todos.length && (
                <ul>
                    {state.todos.map((todo) => {
                        return (
                            <li key={todo.id}>
                                <span>{todo.description}</span>
                                <button>
                                    <span>✓</span>
                                </button>
                            </li>
                        )
                    })}
                </ul>
            )}
        </main>
    )
}

export default App;
