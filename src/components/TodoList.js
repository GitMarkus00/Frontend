import React, { useState } from 'react';


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

                   
                  <table>
            <thead>
                  <tr>
                        <th>Date</th>
                        <th>Description</th>
                        
                  </tr>
            </thead>
            <tbody>
                  {todos.map((todo, index) =>
                        <tr key={index}>
                              <td>{todo.date}</td>
                              <td>{todo.desc}</td>
                              <td><button onClick={() => deleteTodo(index)}>Delete</button></td>
                        </tr>
                  )}
            </tbody>
      </table>
            </div>
      );
};

export default TodoList;