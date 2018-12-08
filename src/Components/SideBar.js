import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './sidebar.css';
export default class SideBar extends Component {
	state = {
		demoAccClass: "",
		accordionButtonClass: "",
		demoDropClass: "",
		dropdownButtonClass: "",
	}

	myAccFunc() {
		const { demoAccClass } = this.state;
		if (demoAccClass.indexOf("w3-show") == -1) {
			this.setState({
				demoAccClass: "w3-show",
				accordionButtonClass: "w3-green"
			});
		} else {
			this.setState({
				demoAccClass: "",
				accordionButtonClass: ""
			});
		}
	}

	myDropFunc() {
		const { demoDropClass } = this.state;
		if (demoDropClass.indexOf("w3-show") == -1) {
			this.setState({
				demoDropClass: "w3-show",
				dropdownButtonClass: "w3-green"
			});
		} else {
			this.setState({
				demoDropClass: "",
				dropdownButtonClass: ""
			});
		}
	}

	render() {
		const { demoAccClass, demoDropClass, accordionButtonClass, dropdownButtonClass } = this.state;
		return (
			<div class="w3-sidebar w3-bar-block w3-card">
				<nav>
					<ul class="mcd-menu">
						<li>
							<a href="">
								<i class="fa fa-home"></i>
								<strong>Home</strong>
								<small>sweet home</small>
							</a>
						</li>
						<li>
							<a href="" class="active">
								<i class="fa fa-edit"></i>
								<strong>About us</strong>
								<small>sweet home</small>
							</a>
						</li>
						<li>
							<a href="">
								<i class="fa fa-gift"></i>
								<strong>Features</strong>
								<small>sweet home</small>
							</a>
						</li>
						<li>
							<a href="">
								<i class="fa fa-globe"></i>
								<strong>News</strong>
								<small>sweet home</small>
							</a>
						</li>
						<li>
							<a href="">
								<i class="fa fa-comments-o"></i>
								<strong>Blog</strong>
								<small>what they say</small>
							</a>
							{/* <ul>
								<li><a href="#"><i class="fa fa-globe"></i>Mission</a></li>
								<li>
									<a href="#"><i class="fa fa-group"></i>Our Team</a>
									<ul>
										<li><a href="#"><i class="fa fa-female"></i>Leyla Sparks</a></li>
										<li>
											<a href="#"><i class="fa fa-male"></i>Gleb Ismailov</a>
											<ul>
												<li><a href="#"><i class="fa fa-leaf"></i>About</a></li>
												<li><a href="#"><i class="fa fa-tasks"></i>Skills</a></li>
											</ul>
										</li>
										<li><a href="#"><i class="fa fa-female"></i>Viktoria Gibbers</a></li>
									</ul>
								</li>
								<li><a href="#"><i class="fa fa-trophy"></i>Rewards</a></li>
								<li><a href="#"><i class="fa fa-certificate"></i>Certificates</a></li>
							</ul> */}
						</li>
						<li>
							<a href="">
								<i class="fa fa-picture-o"></i>
								<strong>Portfolio</strong>
								<small>sweet home</small>
							</a>
						</li>
						<li>
							<a href="">
								<i class="fa fa-envelope-o"></i>
								<strong>Contacts</strong>
								<small>drop a line</small>
							</a>
						</li>
					</ul>
				</nav>
			</div>
		)
	}
}