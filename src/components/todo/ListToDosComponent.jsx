import React, { Component } from 'react';
import TodoDataService from '../../api/todo/TodoDataService.js';
import AuthenticationService from './AuthenticationService.js';
import moment from 'moment';

class ListToDosComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todos : [], // Creating an Array of Tasks
			message : null
		}
		this.deleteTodoClicked = this.deleteTodoClicked.bind(this);
		this.updateTodoClicked = this.updateTodoClicked.bind(this);
		this.addTodoClicked = this.addTodoClicked.bind(this);
		this.refreshTodos = this.refreshTodos.bind(this);
	}

	componentWillUnmount() { // React Lifecycle Method
		console.log('componentwillmount');
	}

	// This method allows your Component to exit the Update life cycle if there is no reason to apply a new render.
	shouldComponentUpdate(nextProps, nextState) {
		return true;
	}

	// After all the elements of the page is rendered correctly, this method is called.
	componentDidMount() { //We made a call to the service and returned the data -- React Lifecycle Method
		this.refreshTodos();
	}

	// Delete Function in the frontend from the backend
	deleteTodoClicked(id) {
		let username = AuthenticationService.getLoggedInUserName();

		TodoDataService.deleteToDo(username, id).then(response => {
			this.setState({message : `Delete of todo Nr.${id}`}); // Delete Message
			this.refreshTodos(); // Refreshing the List
		})
	}

	// Update Redirect and routes to the specific IDs in the list page
	updateTodoClicked(id) {
		this.props.history.push(`/list/${id}`);
	}

	// Adding a New Todo
	addTodoClicked() {
		this.props.history.push('/list/-1');
	}

	// Refresh todos list after a todo has been modified
	refreshTodos() {
		let username = AuthenticationService.getLoggedInUserName();
		TodoDataService.retrieveAllTodos(username).then( response => {
			this.setState({todos : response.data});
		})
	}

	render() {
		return(
			<div>
				<h1>To Do List</h1>
				<div className="alert alert-success">{this.state.message}</div>
				<div className="container">
					<table className="table">
						<thead>
							<tr>
								<th>ID</th>
								<th>Description</th>
								<th>Target Date</th>
								<th>Done?</th>
								<th>Update</th>
								<th>Delete</th>
							</tr>
						</thead>

						<tbody>
							{
								this.state.todos.map (
									todo =>
									<tr key = {todo.id}>
										<td>{todo.id}</td>
										<td>{todo.description}</td>
										<td>{moment(todo.targetDate).format('YYYY-MM-DD')}</td>
										<td>{todo.done.toString()}</td>
										<td><button onClick={() => this.updateTodoClicked(todo.id)} className="btn btn-warning">Update</button></td>
										<td><button onClick={() => this.deleteTodoClicked(todo.id)} className="btn btn-danger">Delete</button></td>
									</tr>
								)
							}
						</tbody>
					</table>

					<div className="row">
						<button className="btn btn-success" onClick={this.addTodoClicked}>Add New To Do Task</button>
					</div>
				</div>
			</div>
		);
	}
}

export default ListToDosComponent