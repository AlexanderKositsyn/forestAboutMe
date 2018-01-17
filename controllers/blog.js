const request = require("request");

module.exports.getBlogPage = function(req, res, next) {
  const requestOptions = {
    url: "http://localhost:3000/api/blog",
    method: "GET"
  };
  const sendObj = {
    title: "My Blog"
  };
  // console.log("api request");
  request(requestOptions, function(err, response, body) {
    // console.log("api request done");
    // console.log(JSON.parse(body));
    res.render("pages/blog.pug", JSON.parse(body));
  });
};
