const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

const SliderData = new Schema(
  {
    imgSrc: String,
    siteName: String,
    siteTechnogies: String,
    siteLink: String,
    active: Boolean
  },
  {
    collection: "sliderData"
  }
);

// просим moongose сохранить модель для ее дальнейшего использования
mongoose.model("sliderData", SliderData);
