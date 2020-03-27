import React, { Component } from 'react';

class ListToDosComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos : [ // Creating an Array of Tasks
        {
          id: 1,
          description: 'Learn React',
          done: false,
          targetDate: new Date()
        },
        {
          id: 2,
          description: 'Learn Spring Boot',
          done: false,
          targetDate: new Date()
        }, 
        {
          id: 3,
          description: 'Get a Project',
          done: false,
          targetDate: new Date()
        }, 
      ]
    }
  }

  render() {
    return(
      <div>
        <h1>To Do List</h1>

        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Description</th>
                <th>Done?</th>
                <th>Target Date</th>
              </tr>
            </thead>

            <tbody>
              {
                this.state.todos.map (
                  todo =>
                  <tr key = {todo.id}>
                    <td>{todo.id}</td>
                    <td>{todo.description}</td>
                    <td>{todo.done.toString()}</td>
                    <td>{todo.targetDate.toString()}</td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListToDosComponent