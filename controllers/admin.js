const formidable = require("formidable"),
  fs = require("fs"),
  path = require("path");

module.exports.getAdminPage = function(req, res, next) {
  res.cookie("admin", "yes", { httpOnly: false });
  res.render("pages/admin.pug");
};

module.exports.postUploadAvatar = function(req, res, next) {
  let form = new formidable.IncomingForm();
  let upload = "public/images";
  let fileName = path.join(upload, "avatar_my.jpg");
};
