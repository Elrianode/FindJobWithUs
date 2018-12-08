import React , {Component } from 'react';
import { Input ,Form } from 'reactstrap';
import Header from './Header';
import axios from 'axios';

export default class Register extends Component {
	constructor(props){
		super(props);

		this.state = {
			username : '',
            password : '',
			repassword : '',
			role :0
		}
		
	this.handleInputChange = this.handleInputChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	handleSubmit(event){		
		event.preventDefault();
		if( this.state.password == this.state.repassword){

		console.log(this.state);
		const newUser = {
			username : this.state.username,
			password : this.state.password,
			role : this.state.role
		}
        
		axios({
			url: `http://localhost:6969/api/register`,
			method: "POST",
			data: newUser
		}).then(response => {
			if(response.data.success) {
				window.location.href = `/`;
			}
		}).catch(error => {
			console.log(error)
		});
	}
	else {
		alert("Sai con me may pass roi");
	}
	}

	handleInputChange(event){
		console.log(event.target.name);
		console.log(event.target.value);
		
			this.setState({ [event.target.name] : event.target.value});	
	}

    render() {
        return (
			
		<div className="main-w3layouts-agileinfo">
                        <div  className="header-w3l">
								<h1>Welcome to Find Job With Us</h1> 
							</div>
						<div className="wthree-form">
							<h2>Fill out the form below to login</h2>
							<Form onSubmit={this.handleSubmit}>

								<div className="form-sub-w3">
									<input type="text" name="username" placeholder="Username " onChange={this.handleInputChange} required/>
								<div className="icon-w3">
									<i className="fa fa-user" aria-hidden="true"></i>
								</div>
								</div>

								<div className="form-sub-w3">
									<input type="password" name="password" placeholder="Password"  onChange={this.handleInputChange} required/>
								<div className="icon-w3">
									<i className="fa fa-unlock-alt" aria-hidden="true"></i>
								</div>
								</div>

                                <div className="form-sub-w3">
									<input type="repassword" name="repassword" placeholder="Re-password"  onChange={this.handleInputChange} required/>
								<div className="icon-w3">
									<i className="fa fa-unlock-alt" aria-hidden="true"></i>
								</div>
								</div>

								<label className="anim">
								<input type="checkbox" className="checkbox"/>
									<span>Remember Me</span> 
									<a href="#">Forgot Password</a>
								</label> 
								<div className="clear"></div>
								<div className="submit-agileits">
									<input  type="submit" value="Login"/>
								</div>
							</Form>

						</div>
		</div>
        )
    }
}