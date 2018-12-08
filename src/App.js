import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import InfoPage from './Components/InfoPage';
import InputInfoPage from './Components/InputInfoPage';
import SideBar from './Components/SideBar';
import InputWork from './Components/InputWork';
import Header from './Components/Header';
import ListUser from './Components/ListUser';
import WorkDetail from './Components/WorkDetail'
import Register from './Components/Register'
import Map from './Components/Map'
import { BrowserRouter , Route } from "react-router-dom";

class App extends Component {
  state = {

  }
  render() {
    return (
      <BrowserRouter>
      <div className="App ">
          <Route exact path="/" component = {Login} />
          <Route exact path="/register/" component = {Register} />
          <Route path= "/inputinfopage/" render={()=>{
            return (
              <>
                <Header user={this.state.user}/>
                <SideBar />
                <InputInfoPage/>
              </>
            );
          }} />
          <Route path= "/inputwork/" render={()=>{
            return (
              <>
                <Header />
                <SideBar />
                <InputWork/>
              </>
            );
          }} />
          <Route path= "/infopage/" render={()=>{
            return (
              <>
                <Header />
                <SideBar />
                <InfoPage/>
              </>
            );
          }} />
          <Route path= "/listuser/" render={()=>{
            return (
              <>
                <Header />
                <SideBar />
                <ListUser/>
              </>
            );
          }} />
          <Route path="/map/" render={() => {
            return (
              <>
                <Header />
                <SideBar />
                <Map
                  googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyCYc3U2zpF5V8DiAsY9PSSq0SF_CeRbdkA&v=3.exp&libraries=geometry,drawing,places`}
                  loadingElement={<div style={{ height: '100%' }} />}
                  containerElement={<div style={{ height: '1000px', width: '100%', position: 'fixed', float: 'right' }} />}
                  mapElement={<div style={{ height: '100%' }} />}
                />
              </>
            );
          }} />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
