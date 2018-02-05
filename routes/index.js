var express = require("express");
var router = express.Router();

const { getIndex, indexAuthorization } = require("../controllers/homepage");
const { getWorksPage } = require("../controllers/works");
const { getAdminPage, postUploadAvatar } = require("../controllers/admin");
const { getBlogPage } = require("../controllers/blog");
const { getAboutPage } = require("../controllers/about");

function isAdmin(req, res, next) {
  //если есть сессия админа то пропускаем на страницу
  if (req.session.isAdmin) {
    return next();
  }
  // если нет, то перебросить на главную страницу

  res.redirect("/");
}
// все хендлеры лучше вынести в отдельную папку (выносим их в controllers)
/* GET home page. */
router.get("/", getIndex);
//авториация пользователя
router.post("/user", indexAuthorization);

router.get("/works(.html)", getWorksPage);

router.get("/about(.html)", getAboutPage);

router.get("/blog(.html)", getBlogPage);

// поппадаем на страницу есть isAdmin вызовет next()
router.get("/admin(.html)", isAdmin, getAdminPage);
router.post("/admin(.html)/avatar", isAdmin, postUploadAvatar);

module.exports = router;
