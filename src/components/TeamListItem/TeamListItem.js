import React, { Component } from "react";
import { Link } from "react-router-dom";
import { NiceDate } from "../Utils/Utils";
import StyleIcon from "../StyleIcon/StyleIcon";
import "./TeamListItem.css";

export default class TeamListItem extends Component {
  render() {
    const { team } = this.props;
    return (
      <Link to={`/teams/${team.id}`} className="teamListItem">
        <header className="teamListItem__header">
          <h2 className="teamListItem__heading">{team.team_name}</h2>
          {<TeamDate team={team} />}
        </header>
        <footer className="teamListItem__footer">
          <TeamStyle team={team} />
        </footer>
      </Link>
    );
  }
}

function TeamStyle({ team }) {
  return (
    <span className="TeamListItem__style">
      <StyleIcon style={team.style} /> {team.style}
    </span>
  );
}

function TeamDate({ team }) {
  return (
    <span className="TeamListItem__date">
      <NiceDate date={team.date_created} />
    </span>
  );
}
