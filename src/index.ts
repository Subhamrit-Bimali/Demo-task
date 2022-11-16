import express from "express";
import { json } from "body-parser";
import { router } from "./routes";
import { config } from "./helper/config";
require("./helper/db-connect");
const app = express();
app.use(json());

app.use(router);

app.listen(config.server.port, () => {
  console.log(`App running on port ${config.server.port}`);
});
