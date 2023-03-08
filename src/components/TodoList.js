import React, { useState } from 'react';
import TodoTable from './TodoTable';

function TodoList() {
      const [todo, setTodo] = useState({ desc: '', date: '' });
      const [todos, setTodos] = useState([]);

      const addTodo = (event) => {
            event.preventDefault();
            setTodos([...todos, todo]);
            setTodo({ desc: '', date: '' });
      }

      const inputChanged = (event) => {
            setTodo({ ...todo, [event.target.name]: event.target.value });
      }
      const deleteTodo = (index) => {
            const newTodos = [...todos];
            newTodos.splice(index, 1);
            setTodos(newTodos);
      }
     
      
      return (
            <div> 
                  <h1>Todolist</h1>
                  <form onSubmit={addTodo}>
                        <p>Add todo:</p>
                        <label htmlFor="date">
                              Date
                        </label>

                        <input type="date" id="date" name="date" value={todo.date} onChange={inputChanged} />
                        <label htmlFor="desc">
                              Description
                        </label>
                        <input type="text" id="desc" name="desc" value={todo.desc} onChange={inputChanged} />
                        <input type="submit" value="Add" />
                  </form>

                  <TodoTable todos={todos} deleteTodo={deleteTodo}/> 
                  
            </div>
      );
};

export default TodoList;