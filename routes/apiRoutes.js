const router = require("express").Router();
const axios = require("axios");

router.get("/test", (req, res) => {
  console.log("'test' call");
  axios
    .get("http://api.playeternalreturn.com/aesop/char?name=aya", {
      auth: {
        'x-api-key': ''
      },
    })
    .then((response) => res.json(response.data))
    .catch((err) => res.send(err));
  }
);

module.exports = router;
