import express from "express";
import Logger from "@core/Logger";

import Database from "@shared/Database";
import Routing from "@shared/Routing";
import Plugins from "@shared/Plugins";

const app = express();
const port = 3001;

Database();
Plugins(app);
Routing(app);

app.listen(port, () => Logger.info(`Server is listening on port ${port} ...`));
