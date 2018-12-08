import React , {Component} from 'react';
import {Input , Form} from 'reactstrap';
export default class InputWork extends Component {
    render() {
        return(
    <div className="container">
        <h1 className="mt-5 text-center">New Post Registration</h1>
        <br />
        <br />
        <div className="row">
            <Form className="col-md-10 col-lg-8 col-xl-6 mx-auto">
                <div className="form-row">
                    <div className="form-group col-sm-12" >
                        <label className= "nameoflabel" for="first-name" style={{color : "white"}}> Name of job : 
                            <span className="text-danger">*</span>
                        </label>
                        
                        <Input type="text" className="form-control" name="first-name" id="first-name" placeholder="Name of job"/>
                    </div>
                </div>
                <br/>
                <div className="form-row">
                    <div className="orm-group col-sm-12">
                        <label className= "nameoflabel" for="zipcode" style={{color : "white"}}>Type of job :
                            <span className="text-danger">*</span>
                        </label>
                        <Input type="text" className="form-control" name="telephone" id="telephone" placeholder="Type of job"/>
                    </div>
                </div>
                <br/><br/>
                <div className="form-row">
                    <div className="orm-group col-sm-12">
                        <label className= "nameoflabel" for="zipcode" style={{color : "white"}}>Telephone :
                            <span className="text-danger">*</span>
                        </label>
                        <Input type="text" className="form-control" name="telephone" id="telephone" placeholder="Telephone"/>
                    </div>
                </div>
                <br/><br/>
                <div className="form-row">
                    <div className="orm-group col-sm-12">
                        <label className= "nameoflabel" for="zipcode" style={{color : "white"}}>Time :
                            <span className="text-danger">*</span>
                        </label>
                        <Input type="text" className="form-control" name="telephone" id="telephone" placeholder="Time"/>
                    </div>
                </div>
                <br/><br/>
                <div className="form-row">
                    <div className="orm-group col-sm-12">
                        <label className= "nameoflabel" for="zipcode" style={{color : "white"}}>Number of people :
                            <span className="text-danger">*</span>
                        </label>
                        <Input type="text" className="form-control" name="telephone" id="telephone" placeholder="Number of people"/>
                    </div>
                </div>
                <br/><br/>
                <div className="form-row">
                    <div className="orm-group col-sm-12">
                        <label className= "nameoflabel" for="zipcode" style={{color : "white"}}>Place :
                            <span className="text-danger">*</span>
                        </label>
                        <Input type="text" className="form-control" name="telephone" id="telephone" placeholder="Place"/>
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