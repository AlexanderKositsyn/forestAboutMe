const request = require("request");

module.exports.getIndex = function(req, res, next) {
  res.render("pages/index.pug");
};

// отправляем запрос на api и сверяем полученные значения от БД и введенные
module.exports.indexAuthorization = function(req, res, next) {
  // проверим пустые ли поля инпутов
  console.log("in indexAuthorization");
  if (!req.body.userLogin || !req.body.userPassword) {
    // если пустые , то отправляем на ту же страницу и выводим сообщение о пустых инпутах
    return res.redirect("/?msg=Все поля обязательны к заполнению");
  }

  // отправляем на api сервер post запрос с данными логина и пароля
  const requestOptions = {
    url: "http://localhost:3000/api/user",
    method: "POST",
    json: {
      login: req.body.userLogin,
      password: req.body.userPassword
    }
  };

  request(requestOptions, function(err, response, body) {
    console.log("api request done");
    // если ошибка то отправляем редирек и текст ошибки
    if (body.status === "err") {
      return res.redirect(`/?msg=${body.message}`);
    }
    req.session.isAdmin = true;
    res.redirect("/admin.html");
  });
};
