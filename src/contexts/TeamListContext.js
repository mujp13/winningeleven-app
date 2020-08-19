import React, { Component } from "react";

const TeamListContext = React.createContext({
  TeamList: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setTeamList: () => {},
});
export default TeamListContext;

export class TeamListProvider extends Component {
  state = {
    TeamList: [
      {
        name: "Real Madrid",
      },
      {
        name: "Barcelona",
      },
      {
        name: "Atletico Mg",
      },
      {
        name: "Tottenham Hotspurs",
      },
    ],
    error: null,
  };

  setTeamList = (TeamList) => {
    this.setState({ TeamList });
  };

  setError = (error) => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  render() {
    const value = {
      TeamList: this.state.TeamList,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setTeamList: this.setTeamList,
    };
    return (
      <TeamListContext.Provider value={value}>
        {this.props.children}
      </TeamListContext.Provider>
    );
  }
}
