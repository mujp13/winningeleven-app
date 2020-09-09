import React, { Component } from "react";
import TeamContext from "../../contexts/TeamContext";
import TeamApiService from "../../services/team-api-service";
import { Hyph, Button } from "../../components/Utils/Utils";
//import "./TeamPage.css";

export default class TeamPage extends Component {
  static defaultProps = {
    match: { params: {} },
  };

  static contextType = TeamContext;

  componentDidMount() {
    const { teamId } = this.props.match.params;
    this.context.clearError();
    TeamApiService.getTeam(teamId)
      .then(this.context.setTeam)
      .catch(this.context.setError);
  }

  handleGoBack = () => {
    const { history } = this.props;
    history.push("/");
  };

  render() {
    const { team } = this.context;
    return (
      <>
        <h2>{team.team.team_name}</h2>
        {team.teamplayer.map((player, index) => (
          <>
            <div key={index}>
              {"Name : "}
              {player.full_name}
            </div>
            <div key={index}>
              {"Position : "}
              {player.position}
            </div>
            <br></br>
          </>
        ))}
        <Button type="button" onClick={(e) => this.handleGoBack()}>
          Go Back
        </Button>
      </>
    );
  }
}
