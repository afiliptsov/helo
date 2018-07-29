const createUser = (req, res) => {
  let randomPicture =
    "https://robohash.org/" + Math.floor(Math.random() * 10000);
  req.app
    .get("db")
    .createUser([req.body.user_name, req.body.user_password, randomPicture])
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => res.status(500).json(err));
};

const loginUser = (req, res) => {
  console.log("Req", req);
  req.app
    .get("db")
    .loginUser([req.body.user_name, req.body.user_password])
    .then(response => {
      if (response[0] == undefined) {
        res.status(403).send("Invalid user");
      }
      res.status(200).json(response);
    })
    .catch(err => res.status(500).json(err));
};

module.exports = {
  createUser,
  loginUser
};
