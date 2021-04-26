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
					important: true,
					active: true,
					finishDate: true
				},
				{
					id: 1,
					text: "posprzatac",
					date: "2022-09-10",
					important: false,
					active: true,
					finishDate: null
				},
				{
					id: 3,
					text: "zdac studia",
					date: "2023-04-23",
					important: true,
					active: true,
					finishDate: null
				},
				{
					id: 4,
					text: "wynieść śmieci",
					date: "2023-04-23",
					important: false,
					active: true,
					finishDate: null
				},
				{
					id: 5,
					text: "pograć w piłkę",
					date: "2023-04-23",
					important: false,
					active: true,
					finishDate: null
				}
			]
		};
	}

	counter = 9;

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

	addTask = (text, date, important) => {
		console.log("dodany obiekt");

		const task = {
			id: this.counter,
			text: text, // tekst z inputa
			date: date, // text z date inputa
			important: important, // wartosc z checkboxa
			active: true,
			finishDate: true
		};

		++this.counter;

		this.setState(prevState => ({
			tasks: [...prevState.tasks, task]
		}));

		return true;
	};

	render() {
		return (
			<div className="App">
				<h1>Todo App</h1>
				<AddTask addTask={this.addTask} />
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
