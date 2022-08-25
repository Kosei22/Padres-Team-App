import React, { Component } from "react";
import Popup from "./Popup";

export default class PlayerDetail extends Component {
  state = {
    playerDetail: null,
    showPopup: true
  };

  async componentDidMount() {
    const data = await fetch(this.props.link);
    const result = await data.json();
    this.setState({ playerDetail: result.people[0] });
  }

  render() {
    return (this.state.showPopup) ? (
      <Popup>
        <button className="close-btn" onClick={() => {
          this.setState({ showPopup: false })
          window.location.reload();
        }}>X</button>
        <h4>{this.state.playerDetail?.fullName}</h4>
        <p>#{this.state.playerDetail?.primaryNumber}</p>
        <p>{this.state.playerDetail?.primaryPosition.name}</p>
        <p> Nickname: {this.state.playerDetail?.nickName}</p>
        <p>Born: {this.state.playerDetail?.birthDate} in {this.state.playerDetail?.birthCountry}</p>
        <p>Height: {this.state.playerDetail?.height}</p>
        <p>B/T: {this.state.playerDetail?.batSide.code}/{this.state.playerDetail?.pitchHand.code}</p>
        <p>Debut: {this.state.playerDetail?.mlbDebutDate}</p>
      </Popup>
    ) : "";

  }
}
