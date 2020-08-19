import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TeamContext, { nullTeam } from "../../contexts/TeamContext";
import TeamApiService from "../../services/team-api-service";
import { NiceDate, Hyph, Section } from "../../components/Utils/Utils";
import StyleIcon from "../../components/StyleIcon/StyleIcon";
import CommentForm from "../../components/CommentForm/CommentForm";
import "./TeamPage.css";

export default class TeamPage extends Component {
  static defaultProps = {
    match: { params: {} },
  };

  static contextType = TeamContext;

  componentDidMount() {
    // const { TeamId } = this.props.match.params;
    // this.context.clearError();
    // TeamApiService.getTeam(TeamId)
    //   .then(this.context.setTeam)
    //   .catch(this.context.setError);
    // TeamApiService.getTeamComments(TeamId)
    //   .then(this.context.setComments)
    //   .catch(this.context.setError);
  }

  componentWillUnmount() {
    //this.context.clearTeam();
  }

  renderTeam() {
    const { Team, comments } = this.context;
    return (
      <>
        <h2>{Team.title}</h2>
        <p>
          <TeamStyle Team={Team} />
          {Team.author.id && (
            <>
              <Hyph />
              <TeamAuthor Team={Team} />
            </>
          )}
          <Hyph />
          <NiceDate date={Team.date_created} />
        </p>
        <TeamContent Team={Team} />
        <TeamComments comments={comments} />
        <CommentForm />
      </>
    );
  }

  render() {
    const { error, Team } = this.context;
    let content;
    if (error) {
      content =
        error.error === `Team doesn't exist` ? (
          <p className="red">Team not found</p>
        ) : (
          <p className="red">There was an error</p>
        );
    } else if (!Team.id) {
      content = <div className="loading" />;
    } else {
      content = this.renderTeam();
    }
    return <Section className="TeamPage">{content}</Section>;
  }
}

function TeamStyle({ Team }) {
  return (
    <span className="TeamPage__style">
      <StyleIcon style={Team.style} /> {Team.style}
    </span>
  );
}

function TeamAuthor({ Team = nullTeam }) {
  return <span className="TeamPage__author">{Team.author.full_name}</span>;
}

function TeamContent({ Team }) {
  return <p className="TeamPage__content">{Team.content}</p>;
}

function TeamComments({ comments = [] }) {
  return (
    <ul className="TeamPage__comment-list">
      {comments.map((comment) => (
        <li key={comment.id} className="TeamPage__comment">
          <p className="TeamPage__comment-text">
            <FontAwesomeIcon
              size="lg"
              icon="quote-left"
              className="TeamPage__comment-icon blue"
            />
            {comment.text}
          </p>
          <p className="TeamPage__comment-user">{comment.user.full_name}</p>
        </li>
      ))}
    </ul>
  );
}
