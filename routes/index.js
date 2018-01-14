var express = require("express");
var router = express.Router();

const { getIndex } = require("../controllers/homepage");
const { getWorksPage } = require("../controllers/works");
const { getAdminPage, postUploadAvatar } = require("../controllers/admin");
const { getBlogPage } = require("../controllers/blog");
const { getAboutPage } = require("../controllers/about");

// все хендлеры лучше вынести в отдельную папку (выносим их в controllers)
/* GET home page. */
router.get("/", getIndex);

router.get("/works(.html)", getWorksPage);

router.get("/about(.html)", getAboutPage);

router.get("/blog(.html)", getBlogPage);

router.get("/admin(.html)", getAdminPage);
router.post("/admin(.html)/avatar", postUploadAvatar);

module.exports = router;
