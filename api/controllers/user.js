const mongoose = require("mongoose");

module.exports.isAuth = function(req, res) {
  const User = mongoose.model("user");
  console.log("in Auth");
  console.log(req.body.login);
  console.log(req.body.password);

  User.findOne({ login: req.body.login })
    .then(user => {
      if (!user) {
        return res.status(400).json({
          status: "err",
          message: "Пользователя не существует"
        });
      }

      if (!user.isCorrectPassword(req.body.password)) {
        return res.status(400).json({
          status: "err",
          message: "Пользователь введен не верно"
        });
      } else {
        res.status(200).json({
          status: "ok",
          message: "Авторизация успешна!"
        });
      }
    })
    .catch(e => {
      res.status(400).json({
        status: "err",
        message: "Произошла ошибка" + e.message
      });
    });
};
