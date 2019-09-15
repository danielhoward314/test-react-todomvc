
import React, { useState } from 'react';
import '../styles/base.scss'
import '../styles/app.scss';

const todos = [
  {
    id: 1,
    description: 'create hard-coded app',
    isCompleted: false
  },
  {
    id: 2,
    description: 'create reducer',
    isCompleted: false
  },
  {
    id: 3,
    description: 'create event handlers with dispatches',
    isCompleted: false
  },
]

const App = () => {
    // state of form input and event handlers
    const [description, setDescription] = useState('')
    const [isEmpty, setIsEmpty] = useState(true)
    const handleSubmit = (evt) => {
        evt.preventDefault()
        setDescription('')
        setIsEmpty(true)
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
                {todos && (
                    <p>
                        <strong>{todos.length}</strong>
                        <span>{` item${todos.length === 1 ? '' : 's'}`}</span>
                    </p>
                )}
            </header>
            <form  onSubmit={handleSubmit}>
                <input  autoFocus value={description} onChange={handleChange}/>
                <button  disabled={isEmpty}>
                    <span>+</span>
                </button>
            </form>
            {!!todos.length && (
                <ul>
                    {todos.map((todo) => {
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
