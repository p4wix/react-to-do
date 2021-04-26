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
	console.log(activeTasks.length);
	return (
		<>
			<div className="active">
				<h1>Zadania do zrobienia</h1>
				{activeTasks.length > 0 ? (
					activeTasks
				) : (
					<p>Brak zadań pomyśl co mozesz zrobić</p>
				)}
			</div>

			<hr />

			<div className="done">
				<h3>
					Zadania zrobione <em>({done.length})</em>
				</h3>
				{done.length > 5 && (
					<span>Wyświetlonych jest jedynie 5 ostatnich elementów</span>
				)}
				{doneTasks.slice(0, 5)}
			</div>
		</>
	);
};

export default TaskList;
