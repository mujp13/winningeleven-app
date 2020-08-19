import TokenService from "./token-service";
import config from "../config";

const teamApiService = {
  getteams() {
    return fetch(`${config.API_ENDPOINT}/teams`, {
      headers: {},
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  getteam(teamId) {
    return fetch(`${config.API_ENDPOINT}/teams/${teamId}`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  getteamComments(teamId) {
    return fetch(`${config.API_ENDPOINT}/teams/${teamId}/comments`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  postComment(teamId, text) {
    return fetch(`${config.API_ENDPOINT}/comments`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        team_id: teamId,
        text,
      }),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
};

export default teamApiService;
