import React, { Component } from 'react';
import { Button, Input } from 'reactstrap';
import './header.css'
export default class Header extends Component {

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul class="menu cf">
            <li><a href="">Find Job With Us</a></li>
            <li>
              <a href="">Menu item</a>
            </li>
            <li><a href="">Menu item</a></li>
            <li><a href="">Menu item</a></li>
            <li><a href="">Menu item</a></li>
            <li className="nav-item active">
              <a className="nav-link" href="#">Login account</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">Register account</a>
            </li>
          </ul>

          <li className="nav-item active">
            <a className="nav-link" href="#">Login account</a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#">Register account</a>
          </li>
        </div>
      </nav>
    )
  }
}
{/* <form className="form-inline my-2 my-lg-0">
      <Input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <Button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</Button>
    </form> */}