const express = require("express");
const router = express.Router();

const { getBlogArticles, addBlogArticle } = require("../controllers/blog");
const { getAboutSkills, saveAboutSkills } = require("../controllers/about");
const { getWorksImages, uploadImageSlider } = require("../controllers/work");
const { isAuth } = require("../controllers/user");

// авторизация пользователя
router.post("/user", isAuth);

// если запросили обычные страницы
router.get("/blog", getBlogArticles);
router.get("/about", getAboutSkills);
router.get("/works", getWorksImages);

//если сохраняют данные в админке blog
router.post("/blog", addBlogArticle);

//если сохраняют данные в админке skills
router.post("/about", saveAboutSkills);

//если сохраняют новую картинку в works
router.post("/works", uploadImageSlider);
module.exports = router;
