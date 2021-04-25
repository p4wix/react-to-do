import React, { Component } from "react";
import "./App.css";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tasks: [
				{
					id: 0,
					text: "zagrać w gre",
					date: "2021-05-20",
					importat: true,
					active: true,
					finishDate: null
				},
				{
					id: 1,
					text: "posprzatac",
					date: "2022-09-10",
					importat: false,
					active: true,
					finishDate: null
				},
				{
					id: 3,
					text: "zdac studia",
					date: "2023-04-23",
					importat: true,
					active: false,
					finishDate: null
				},
				{
					id: 4,
					text: "task1",
					date: "2023-04-23",
					importat: true,
					active: true,
					finishDate: null
				},
				{
					id: 5,
					text: "task5",
					date: "2023-04-23",
					importat: true,
					active: true,
					finishDate: null
				}
			]
		};
	}

	// Usuwanie obiektow z tablicy ze state
	deleteTask = id => {
		//console.log("delete id " + id);
		const tasks = [...this.state.tasks];
		const index = tasks.findIndex(task => task.id === id);
		//console.log(tasks);
		if (index === -1) {
			throw Error("Index not found");
		}
		tasks.splice(index, 1);
		//console.log(index);
		this.setState({
			tasks: tasks
		});
	};

	changeTaskStatus = id => {
		console.log("change id " + id);
		const tasks = [...this.state.tasks];

		tasks.forEach(task => {
			if (task.id === id) {
				task.active = false;
				task.finishDate = new Date().getTime();
			}
		});

		this.setState({
			tasks: tasks
		});
	};

	render() {
		return (
			<div className="App">
				To do
				<AddTask />
				<TaskList
					tasks={this.state.tasks}
					delete={this.deleteTask}
					change={this.changeTaskStatus}
				/>
			</div>
		);
	}
}

export default App;
