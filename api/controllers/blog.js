const mongoose = require("mongoose");

module.exports.getBlogArticles = function(req, res) {
  const Blog = mongoose.model("blog");

  Blog.find().then(items => {
    console.log(items);
    res.status(200).json({ articles: items });
  });
};

module.exports.addBlogArticle = function(req, res) {
  const Blog = mongoose.model("blog");

  // создаем новую запись вида Blog
  let item = new Blog({
    title: req.body.title,
    body: req.body.body,
    date: req.body.date
  });
  // сохраняем запись в БД
  item
    .save()
    .then(item => {
      return res.status(201).json({ msg: "Запись успешно добавлена" });
    })
    .catch(err => {
      res.status(400).json({
        msg: "Произошла ошибка при добавлении Записи в БД"
      });
    });
};
