
import React, { useState } from 'react';

function AddTodoForm({ onAddTodo }) {

    const [todoTitle, setTodoTitle] = useState('');

    const handleAddTodo = (event) => {
        event.preventDefault();
        onAddTodo(todoTitle);
        event.target.reset();
    }

    const handleTitleChange = (event) => {
        event.preventDefault();
        const todoTitleFromUser = event.target.value;
        console.log(todoTitleFromUser);
        setTodoTitle(todoTitleFromUser);
    }

    return (
        <form onSubmit={handleAddTodo}>
            <label htmlFor="todoTitle">Title : </label>
            <input id="todoTitle" type="text" name="title" value={todoTitle} onChange={handleTitleChange} />
            <button type="submit">Add</button>
        </form>
    );

}

export default AddTodoForm