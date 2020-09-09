import TokenService from "./token-service";
import config from "../config";

const teamApiService = {
  getTeams() {
    return fetch(`${config.API_ENDPOINT}/teams`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  getTeam(teamId) {
    return fetch(`${config.API_ENDPOINT}/teams/${teamId}`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  getPlayers(player) {
    return fetch(`${config.API_ENDPOINT}/players`, {
      headers: {},
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  postTeam(team) {
    return fetch(`${config.API_ENDPOINT}/teams`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(team),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
};

export default teamApiService;
