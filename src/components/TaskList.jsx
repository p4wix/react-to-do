import React from "react";
import Task from "./Task";

const TaskList = props => {
	//Tablica z elementami active
	const active = props.tasks.filter(task => task.active);

	//Tablica z elementami not active
	const done = props.tasks.filter(task => !task.active);

	const activeTasks = active.map(task => (
		<Task
			key={task.id}
			task={task}
			delete={props.delete}
			change={props.change}
		/>
	));

	const doneTasks = done.map(task => (
		<Task
			key={task.id}
			task={task}
			delete={props.delete}
			change={props.change}
		/>
	));
	return (
		<>
			<div className="active">
				<h1>Zadania do zrobienia</h1>
				{activeTasks}
			</div>

			<hr />

			<div className="done">
				<h3>Zadania zrobione (0)</h3>
				{doneTasks}
			</div>
		</>
	);
};

export default TaskList;
