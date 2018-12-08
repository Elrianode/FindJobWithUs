import React, { Component } from 'react';
import { Input, Form, Button } from 'reactstrap';
import '../App.css';
import axios from 'axios';

export default class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: '',
			password: ''
		}

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();
		console.log(this.state);
		const newUser = {
			username: this.state.username,
			password: this.state.password
		}

		axios({
			url: `http://localhost:6969/api/`,
			method: "GET"
		}).then(response => {
			if (response.data.success) {
				for (var i = 0; i < response.data.user.length; i++) {
					console.log(response.data.user[i]);
					if (response.data.user[i].username == newUser.username && response.data.user[i].password == newUser.password) {
						window.location.href = `/infopage`;
					}
				}
			}
		}).catch(error => {
			console.log(error)
		});
	}

	handleInputChange(event) {
		console.log(event.target.name);
		console.log(event.target.value);

		this.setState({ [event.target.name]: event.target.value });
	}

	render() {
		return (

			<div className="main-w3layouts-agileinfo">
				<div className="header-w3l">
					<h1>Welcome to Find Job With Us</h1>
				</div>
				<div className="wthree-form">
					<h2>Fill out the form below to login</h2>
					<Form onSubmit={this.handleSubmit}>

						<div className="form-sub-w3">
							<input type="text" name="username" placeholder="Username " onChange={this.handleInputChange} required />
							<div className="icon-w3">
								<i className="fa fa-user" aria-hidden="true"></i>
							</div>
						</div>

						<div className="form-sub-w3">
							<input type="password" name="password" placeholder="Password" onChange={this.handleInputChange} required />
							<div className="icon-w3">
								<i className="fa fa-unlock-alt" aria-hidden="true"></i>
							</div>
						</div>

						<label className="anim">
							<input type="checkbox" className="checkbox" />
							<span>Remember Me</span>
							<a href="#">Forgot Password</a>
						</label>
						<div className="clear"></div>
						<div className="submit-agileits">
							<input type="submit" value="Login" />
						</div>
						<div className="submit-agileits">
							<Button href="/register" className="register">Register</Button>
						</div>
					</Form>

				</div>
			</div>
		)
	}
}