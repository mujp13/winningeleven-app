import React, { Component } from "react";

const TeamContext = React.createContext({
  team: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setTeam: () => {},
});

export default TeamContext;

export class TeamProvider extends Component {
  state = {
    team: {
      team: {},
      teamplayer: [],
    },
  };

  setError = (error) => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  setTeam = (team) => {
    this.setState({
      team,
    });
  };

  render() {
    const value = {
      team: this.state.team,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setTeam: this.setTeam,
    };
    return (
      <TeamContext.Provider value={value}>
        {this.props.children}
      </TeamContext.Provider>
    );
  }
}
