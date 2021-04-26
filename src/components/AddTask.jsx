import React, { Component } from "react";
import "./AddTask.css";

class AddTask extends Component {
	minDate = new Date().toISOString().slice(0, 10);

	constructor(props) {
		super(props);
		this.state = {
			text: "",
			checked: false,
			date: this.minDate
		};
	}

	handleText = e => {
		this.setState({
			text: e.target.value
		});
	};

	handleCheckbox = e => {
		this.setState({
			checked: e.target.checked
		});
	};

	handleDate = e => {
		this.setState({
			date: e.target.value
		});
	};

	handleClick = () => {
		console.log("dodaj");
		const { text, date, checked } = this.state;
		if (text.length > 2) {
			const add = this.props.addTask(text, date, checked); //zwraca nam true
			if (add) {
				this.setState({
					text: "",
					checked: false,
					date: this.minDate
				});
			}
		} else {
			console.log("conajmniej 3 znaki");
		}
	};

	render() {
		let maxDate = this.minDate.slice(0, 4) * 1 + 1;
		//console.log(maxDate);
		maxDate = maxDate + "-12-31";
		return (
			<div className="form">
				<input
					type="text"
					placeholder="dodaj zadanie"
					value={this.state.text}
					onChange={this.handleText}
				/>
				<input
					type="checkbox"
					checked={this.state.checked}
					id="important"
					onChange={this.handleCheckbox}
				/>
				<label htmlFor="important">Priorytet</label>
				<br />
				<label htmlFor="date">Do kiedy zrobić</label>
				<input
					type="date"
					value={this.state.date}
					min={this.minDate}
					max={maxDate}
					onChange={this.handleDate}
				/>
				<br />
				<button onClick={this.handleClick}>Dodaj</button>
				<hr />
			</div>
		);
	}
}

export default AddTask;
