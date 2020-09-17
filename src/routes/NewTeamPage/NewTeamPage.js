import React, { Component } from "react";
import { Button, Input, Required } from "../../components/Utils/Utils";
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
    searchPlayer: "",
  };

  componentDidMount() {
    teamAPI.getPlayers().then((res) => {
      this.setState({
        players: res,
      });
    });
  }

  searchPlayers = (e) => {
    const name = e.target.value;
    this.setState({
      searched: name.toLowerCase(),
    });
    console.log(this.state);
  };

  addTeamName = (e) => {
    const teamName = e.target.value;
    this.setState({
      teamName: teamName,
    });
  };

  addPlayer = (player) => {
    this.setState({
      teams: this.state.teams.concat(player),
    });
  };

  removePlayer = (player) => {
    this.setState({
      teams: this.state.teams.filter((p) => p.name !== player.name),
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    //create a post API request in this
    const newTeam = {
      team_name: this.state.teamName,
      players: this.state.teams,
    };
    teamAPI.postTeam(newTeam).then((res) => {
      const { history } = this.props;
      history.push("/");
    });
  };

  render() {
    console.log(this.state);
    return (
      <>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div className="team_name">
            <label htmlFor="CreateTeam__team_name">
              Choose your team name <Required />
            </label>
            <Input
              onChange={this.addTeamName}
              type="text"
              required
              id="CreateTeam__team_name"
            ></Input>
          </div>
          <h2>In Your Team</h2>
          {this.state.teams.map((team, index) => (
            <div key={index}>{team.full_name}</div>
          ))}
          <h2>All Players</h2>
          <label> Search players </label>
          <Input
            onChange={(e) => this.searchPlayers(e)}
            type="text"
            id="CreateTeam__search_players"
          ></Input>
          {this.state.players
            .filter(
              (player) =>
                player.full_name.toLowerCase().indexOf(this.state.searched) >=
                  0 || !this.state.searched
            )
            .slice(0, 20)
            .map((player, index) => (
              <div key={index}>
                {player.full_name} ({player.position})
                <Button type="button" onClick={(e) => this.addPlayer(player)}>
                  add
                </Button>
                <Button
                  type="button"
                  onClick={(e) => this.removePlayer(player)}
                >
                  remove
                </Button>
              </div>
            ))}
          <h2>Create Team!</h2>
          <Button>Submit</Button>
        </form>
      </>
    );
  }
}
