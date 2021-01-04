require('dotenv').config()
const axios = require("axios");

const headers = {'x-api-key' : process.env.API_KEY}

// Defining methods for the playerController
module.exports = {
  findByNickName: function(req, res) {
    axios.get(`https://open-api.bser.io/v1/user/nickname?query=${req.query}`, {
      headers
    })
      .then(response => res.json(response.data))
      .catch(err => res.status(422).json(err));
  },
  findUserStats: function(req, res) {
    axios.get(`https://open-api.bser.io/v1/user/stats/${req.userNum}/${req.seasonId}`, {
      headers
    }
    )
      .then(response => res.json(response.data))
      .catch(err => res.status(422).json(err));
  },
  findUserGames: function(req, res) {
      axios.get(`https://open-api.bser.io/v1/user/games/${req.userNum}`, {
        headers
      })
        .then(response => res.json(response.data))
        .catch(err => res.status(422).json(err));
  },
  findRankUser: function(req, res) {
    axios.get(`https://open-api.bser.io/v1/rank/${req.userNum}/${req.seasonId}/${req.userNum}`, {
      headres
    })
        .then(response => res.json(response.data))
        .catch(err => res.status(422).json(err));
  },
  findRankTop: function(req, res) {
    axios.get(`https://open-api.bser.io/v1/rank/top/${req.teamMode}/${req.seasonId}`, {
      headers
    })
        .then(response => res.json(response.data))
        .catch(err => res.status(422).json(err));
  },
  findData: function(req, res) {
    axios.get(`https://open-api.bser.io/v1/data/${req.body}`, {
      headers,
    })
    .then(response => res.json(response.data))
    .catch(err => res.status(422).json(err));
    console.log(req.body)
    
  }
};
