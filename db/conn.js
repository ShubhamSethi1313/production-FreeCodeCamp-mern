const mongoose = require("mongoose");

const DB = process.env.DATABASE;

mongoose.set("strictQuery", false);
mongoose
  .connect(DB)
  .then(() => {
    console.log(`connection with mongoose successful`);
  })
  .catch((err) => console.log(`no connection with mongoose`));
