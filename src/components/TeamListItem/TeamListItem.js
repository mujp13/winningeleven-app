import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NiceDate, Hyph } from "../Utils/Utils";
import StyleIcon from "../StyleIcon/StyleIcon";
import "./TeamListItem.css";

export default class TeamListItem extends Component {
  render() {
    const { Team } = this.props;
    return (
      <Link to={`/Team/${Team.id}`} className="TeamListItem">
        <header className="TeamListItem__header">
          <h2 className="TeamListItem__heading">{Team.name}</h2>
          {/*<TeamDate Team={Team} />*/}
        </header>
        <footer className="TeamListItem__footer">
          <TeamStyle Team={Team} />
        </footer>
      </Link>
    );
  }
}

function TeamStyle({ Team }) {
  return (
    <span className="TeamListItem__style">
      <StyleIcon style={Team.style} /> {Team.style}
    </span>
  );
}

function TeamDate({ Team }) {
  return (
    <span className="TeamListItem__date">
      <NiceDate date={Team.date_created} />
    </span>
  );
}

function TeamAuthor({ Team }) {
  return <span className="TeamListItem__author">{Team.author.full_name}</span>;
}

function TeamCommentCount({ Team }) {
  return (
    <span className="TeamListItem__comment-count fa-layers fa-fw">
      <FontAwesomeIcon size="lg" icon="comment" />
      <span className="fa-layers-text fa-inverse">
        {Team.number_of_comments}
      </span>
    </span>
  );
}
