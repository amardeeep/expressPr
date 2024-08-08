const express = require("express");
const app = express();
const usersRouter = require("./routes/usersRoutes");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.get("/", usersRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
