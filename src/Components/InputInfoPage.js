import React , {Component } from 'react';
import { Input ,Form } from 'reactstrap';
import axios from 'axios';
export default class InputInfoPage extends Component {

    constructor(props){
		super(props);

		this.state = {
			firstname : '',
            lastname : '',
            telephone : '',
            age : "",
            zipcode : "",
            address : ""
		}
		
	this.handleInputChange = this.handleInputChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	handleSubmit(event){		
		event.preventDefault();

		console.log(this.state);
		const newInfoUser = {
			firstname : this.state.firstname,
            lastname : this.state.lastname,
            telephone : this.state.telephone,
            age : this.state.age,
            zipcode : this.state.zipcode,
            address : this.state.address
		}
        
		axios({
			url: `http://localhost:6969/api/infouser/${window.location.href}`,
			method: "POST",
			data: newInfoUser
		}).then(response => {
			if(response.data.success) {
				// window.location.href = `/infopage/${response.data.user._id}`
			}
		}).catch(error => {
			console.log(error)
		});
	}

	handleInputChange(event){
        console.log(window.location.href);
		console.log(event.target.name);
		console.log(event.target.value);
		
			this.setState({ [event.target.name] : event.target.value});	
	}

    render() {
        return (
            <div className="container">
        <h1 className="mt-5 text-center">New Member Registration</h1>
        <div className="row">
            <Form className="col-md-10 col-lg-8 col-xl-6 mx-auto"
            onSubmit={this.handleSubmit}>

                <div className="form-row">
                    <div className="form-group col-sm-6">
                        <label className= "nameoflabel" for="first-name"> First Name
                            <span className="text-danger">*</span>
                        </label>
                        <Input type="text" className="form-control" name="firstname" id="first-name" placeholder="Firstname"
                        onChange={this.handleInputChange}/>
                    </div>
                    <div className="form-group col-sm-6">
                        <label className= "nameoflabel" for="last-name">Last Name
                            <span className="text-danger">*</span>
                        </label>
                        <Input type="text" className="form-control" name="lastname" id="last-name" placeholder="Lastname"
                        onChange={this.handleInputChange}/>
                    </div>
                </div>
        
                <div className="form-row">
                    <div className="form-group col-sm-6">
                        <label className= "nameoflabel" for="zipcode">Telephone
                            <span className="text-danger">*</span>
                        </label>
                        <Input type="text" className="form-control" name="telephone" id="telephone" placeholder="Telephone"
                        onChange={this.handleInputChange}/>
                    </div>
                    <div className="form-group col-sm-6">
                        <label className= "nameoflabel" for="address">Age
                                <span className="text-danger">*</span>
                        </label>
                        <Input type="text" className="form-control" name="age" id="age" placeholder="Age"
                        onChange={this.handleInputChange}/>
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-sm-6">
                        <label className= "nameoflabel" for="zipcode">ZiP-Code
                            <span className="text-danger">*</span>
                        </label>
                        <Input type="text" className="form-control" name="zipcode" id="zipcode" placeholder="zipcode"
                        onChange={this.handleInputChange}/>
                    </div>
                    <div className="form-group col-sm-6">
                        <label className= "nameoflabel" for="address">Address
                                <span className="text-danger">*</span>
                        </label>
                        <Input type="text" className="form-control" name="address" id="address" placeholder="address"
                        onChange={this.handleInputChange}/>
                    </div>
                </div>

                     <div className="form-group">
                        <button type="submit" style={{ marginRight : "100px",marginTop : "40px" , width : "150px"}} className="btn btn-primary" id = "submit">Submit</button>
                        <button type="submit" style={{ marginTop : "40px" ,  width : "150px"}} className="btn btn-secondary" id ="clear">Clear</button>
                </div>
            </Form>
            </div>
        </div>
        )
    }
}