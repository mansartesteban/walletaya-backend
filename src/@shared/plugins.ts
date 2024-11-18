import { Application } from "express";

import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";

const Plugins = (app: Application) => {
  app.use(bodyParser.json());
  app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
  app.use(morgan("combined"));
};

export default Plugins;
