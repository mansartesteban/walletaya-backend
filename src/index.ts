import express from "express";
import Logger from "@/@core/Logger";

import Database from "@/@shared/database";
import Routing from "@/@shared/routing";
import Plugins from "@/@shared/plugins";

const app = express();
const port = 3001;

Database();
Plugins(app);
Routing(app);

app.listen(port, () => Logger.info(`Server is listening on port ${port} ...`));
