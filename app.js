const express = require("express");
const app = express();
const usersRouter = require("./routes/usersRouter");
const dotenv = require("dotenv");
dotenv.config();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use("/", usersRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
