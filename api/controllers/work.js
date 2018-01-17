const formidable = require("formidable");
const fs = require("fs");
const path = require("path");
const mongoose = require("mongoose");

// при загрузке картинки ее нужно загрузить в папку статики ,в img
module.exports.uploadImageSlider = (req, res) => {
  console.log("in uploadImageSlider");
  const SliderData = mongoose.model("sliderData");
  let form = new formidable.IncomingForm();
  let upload = "dist/images";
  let fileName;
  form.uploadDir = path.join(process.cwd(), upload);

  //парсим пришедший request и formidable сразу записывает картинку в form.uploadDir
  form.parse(req, function(err, fields, files) {
    console.log(fields);
    console.log(files);
    if (err) {
      //   return res.redirect("/admin?msgfile=Не удалось загрузить картинку");
    }
    // если не заполненно поле , то отправляем на admin и говорим ошибку
    // if (!fields.name) {
    //   fs.unlink(files.photo.path);
    //   return res.redirect("/admin?msgfile=Не указано описание картинки!");
    // }
    // записываем новый путь к картинке в переменную
    fileName = path.join(upload, files.image.name);
    // переименуем этот файл в тот который был загружен
    fs.rename(files.image.path, fileName, function(err) {
      if (err) {
        console.log(err);
        fs.unlink(fileName);
        fs.rename(files.image.path, fileName);
      }
    });
    // создаем новую запись в БД
    let newImage = new SliderData({
      imgSrc: files.image.name,
      siteName: fields.workTitle,
      siteTechnogies: fields.workTechnologies,
      active: false
    });
    newImage.save((err, createdTodoObject) => {
      if (err) {
        throw err;
      }
      console.log("объект создан!");
      res.redirect("/admin.html?msg=Картинка успешно загружена&isActive=true");
    });
  });
};

module.exports.getWorksImages = (req, res) => {
  const SliderData = mongoose.model("sliderData");
  // запрос в мангус ДБ чтобы взять все данные
  console.log("in getWorksImages");
  SliderData.find().then(items => {
    console.log(items);
    res.status(200).json({ sliderItems: items });
  });
};
