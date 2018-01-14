"use strict";

const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

const BlogSchema = new Schema(
  {
    title: String,
    // required: [true, "Укажите заголовок статьи"]

    date: String,
    // default: Date.now,
    // required: [true, "Укажите дату публикации"]

    body: String
    // required: [true, "Укажите содержимое статьи"]
  },
  { collection: "Blog" }
);

// просим moongose сохранить модель для ее дальнейшего использования
mongoose.model("blog", BlogSchema);
