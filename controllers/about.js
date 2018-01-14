const request = require("request");

module.exports.getAboutPage = function(req, res, next) {
  // нужно тут сделать запрос на API
  const requestOptions = {
    url: "http://localhost:3000/api/about",
    method: "GET"
  };
  console.log("api request");
  request(requestOptions, function(err, response, body) {
    console.log("api request done");
    console.log(JSON.parse(body));
    res.render("pages/about.pug", JSON.parse(body));
  });
};
