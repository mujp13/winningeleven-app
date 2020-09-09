import React, { Component } from "react";
import TeamListContext from "../../contexts/TeamListContext";
import TeamApiService from "../../services/team-api-service";
//import { Section } from "../../components/Utils/Utils";
import TeamListItem from "../../components/TeamListItem/TeamListItem";

export default class TeamListPage extends Component {
  static contextType = TeamListContext;

  componentDidMount() {
    //this.context.clearError();
    TeamApiService.getTeams()
      .then(this.context.setTeamList)
      .catch(this.context.setError);
  }

  renderTeams() {
    const { TeamList = [] } = this.context;
    return TeamList.map((Team, index) => (
      <TeamListItem key={index} Team={Team} />
    ));
  }

  render() {
    //const { error } = this.context;
    return <div>{this.renderTeams()}</div>;
  }
}
