const mongoose = require("mongoose");

module.exports.getAboutSkills = function(req, res) {
  const Skills = mongoose.model("skills");

  Skills.find().then(items => {
    console.log(items);
    res.status(200).json({
      skills: items
    });
  });
};

module.exports.saveAboutSkills = function(req, res) {
  const Skills = mongoose.model("skills");
  console.log(req.body.store);
  let newSkills = req.body.store;
  // удаляем все скилы
  newSkills.forEach(element => {
    Skills.findByIdAndRemove(element._id, function(err) {
      if (err) {
        throw err;
      }
      console.log("элемент найдет, и удален");
    });
  });
  // ставим новые
  newSkills.forEach(element => {
    // изменим проценты со строковго значения на числовое
    element.percents = +element.percents;
    let skill = new Skills(element);
    skill.save((err, createdTodoObject) => {
      if (err) {
        throw err;
      }
      // This createdTodoObject is the same one we saved, but after Mongo
      // added its additional properties like _id.
      console.log("объект создан!");
    });
  });
};
