const db = require("../models");
const axios = require("axios");


// Defining methods for the playerController
module.exports = {
  findByNickName: function(req, res) {
    axios.get(`https://open-api.bser.io/v1/user/nickname?query=${req.query}`)
      .then(response => res.json(response.data))
      .catch(err => res.status(422).json(err));
  },
  findUserStats: function(req, res) {
    axios.get(`https://open-api.bser.io/v1/user/stats/${req.userNum}/${req.seasonId}`)
      .then(response => res.json(response.data))
      .catch(err => res.status(422).json(err));
  },
  findUserGames: function(req, res) {
      axios.get(`https://open-api.bser.io/v1/user/games/${req.userNum}`)
        .then(response => res.json(response.data))
        .catch(err => res.status(422).json(err));
  },
  findRankUser: function(req, res) {
    axios.get(`https://open-api.bser.io/v1/rank/${req.userNum}/${req.seasonId}/${req.userNum}`)
        .then(response => res.json(response.data))
        .catch(err => res.status(422).json(err));
  },
  findRankTop: function(req, res) {
    axios.get(`https://open-api.bser.io/v1/rank/top/${req.teamMode}/${req.seasonId}`)
        .then(response => res.json(response.data))
        .catch(err => res.status(422).json(err));
  },
  findData: function(req, res) {
    axios.get(`https://open-api.bser.io/v1/data/${req.query}`)
        .then(response => res.json(response.data))
        .catch(err => res.status(422).json(err));
  }
};
