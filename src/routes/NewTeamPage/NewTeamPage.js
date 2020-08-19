import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
//import { Section } from "../../components/Utils/Utils";

export default class TeamPage extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  };

  state = {
    teams: [],
    players: [
      {
        name: "Ronaldo",
        position: "FW",
      },
      {
        name: "Zidane",
        position: "MD",
      },
      {
        name: "Figo",
        position: "MD",
      },
      {
        name: "Maldini",
        position: "DF",
      },
      {
        name: "Khan",
        position: "GK",
      },
    ],
  };

  addPlayer = (player) => {
    this.setState({
      teams: this.state.teams.concat(player),
    });
  };

  removePlayer = (player) => {
    this.setState({
      teams: this.state.teams.filter((p) => p.name != player.name),
    });
  };

  handleSubmit = () => {
    const { history } = this.props;
    history.push("/");
  };

  render() {
    return (
      <>
        <h2>Team Players</h2>
        {this.state.teams.map((team) => (
          <div>{team.name}</div>
        ))}
        <h2>All Players</h2>
        {this.state.players.map((player) => (
          <div>
            {player.name}
            <button onClick={(e) => this.addPlayer(player)}>add</button>
            <button onClick={(e) => this.removePlayer(player)}>remove</button>
          </div>
        ))}
        <h2>Submit when you finish</h2>
        <button onClick={(e) => this.handleSubmit()}>Submit</button>
      </>
    );
  }
}
