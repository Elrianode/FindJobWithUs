import React from "react";
import { Marker, InfoWindow } from "react-google-maps";
import './InfoBox.css';


export default class MarkerCustom extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    }

  }

  handleToggleOpen = () => {

    this.setState({
      isOpen: true
    });
  }

  handleToggleClose = () => {
    this.setState({
      isOpen: false
    });
  }
  render() {
    console.log(this.state)
    return (
      <Marker
        icon={this.props.icon}
        position={this.props.location}
        //label={this.props.label}
        onClick={() => this.handleToggleOpen()}
        defaultTitle={this.props.defaultTitle}
      >
        {
          this.state.isOpen ?
            <InfoWindow onCloseClick={this.handleToggleClose}>
              <div id="iw-container">
                <div className="iw-title">{this.props.name}</div>
                <div className="iw-content">
                  <div className="iw-subTitle">{"Giới Thiệu"}</div>
                  <img src={this.props.img} alt={this.props.name} height="115" width="83" />
                  <p>{this.props.infomation}</p>
                  <div className="iw-subTitle">{"Liên Hệ"}</div>
                  <p>{this.props.address}<br />
                    {this.props.phoneNumber}<br />{this.props.website}</p>
                </div>
                <div className="iw-bottom-gradient"></div>
              </div>
            </InfoWindow> : ""
        }
      </Marker>
    );
  }
}