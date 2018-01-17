const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

const Skills = new Schema(
  {
    name: String,
    percents: String,
    type: Number
  },
  {
    collection: "Skills"
  }
);

// просим moongose сохранить модель для ее дальнейшего использования
mongoose.model("skills", Skills);