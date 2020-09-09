import React, { Component } from "react";
import { Button, Input, Required } from "../../components/Utils/Utils";
import { Route, Switch } from "react-router-dom";
import teamAPI from "../../services/team-api-service";
//import { Section } from "../../components/Utils/Utils";

export default class TeamPage extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  };

  state = {
    teamName: [],
    teams: [],
    players: [],
  };

  componentDidMount() {
    teamAPI.getPlayers().then((res) => {
      console.log(res);
      this.setState({
        players: res,
      });
    });
  }

  addTeamName = (e) => {
    const teamName = e.target.value;
    this.setState({
      teamName: teamName,
    });
  };

  addPlayer = (player) => {
    console.log(player);
    this.setState({
      teams: this.state.teams.concat(player),
    });
  };

  removePlayer = (player) => {
    this.setState({
      teams: this.state.teams.filter((p) => p.name != player.name),
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    //create a post API request in this
    const newTeam = {
      team_name: this.state.teamName,
      players: this.state.teams,
    };
    console.log(newTeam);
    teamAPI.postTeam(newTeam).then((res) => {
      console.log(res);
      const { history } = this.props;
      history.push("/");
    });
  };

  render() {
    return (
      <>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div className="team_name">
            <label htmlFor="CreateTeam__team_name">
              Team name <Required />
            </label>
            <Input
              onChange={this.addTeamName}
              type="text"
              required
              id="CreateTeam__team_name"
            ></Input>
          </div>
          <h2>Team Players</h2>
          {this.state.teams.map((team) => (
            <div>{team.full_name}</div>
          ))}
          <h2>All Players</h2>
          {this.state.players.slice(0, 10).map((player) => (
            <div>
              {player.full_name}
              <Button type="button" onClick={(e) => this.addPlayer(player)}>
                add
              </Button>
              <Button type="button" onClick={(e) => this.removePlayer(player)}>
                remove
              </Button>
            </div>
          ))}
          <h2>Submit when you finish</h2>
          <Button>Submit</Button>
        </form>
      </>
    );
  }
}
