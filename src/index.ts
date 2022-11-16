import express from "express";
import { json } from "body-parser";
import { router } from "./routes";
require("./helper/db-connect");
const app = express();
app.use(json());

app.use(router);

app.listen(4000, () => {
  console.log("App running on port 4000");
});
