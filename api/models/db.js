// Using Node.js `require()`
const mongoose = require("mongoose");
const config = require("../../config/config.json");

//заменяем промис могусовский на нодовский
mongoose.Promise = global.Promise;

mongoose
  .connect(
    `mongodb://${config.db.user}:${config.db.password}@${config.db.host}:${
      config.db.port
    }/${config.db.name}`,
    {
      useMongoClient: true
    }
  )
  .catch(e => {
    console.log(e);
    throw e;
  });

mongoose.connection.on("connected", function() {
  console.log("connected well");
});

require("./skills");
require("./blog");
require("./work");
