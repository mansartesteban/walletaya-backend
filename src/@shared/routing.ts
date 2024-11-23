import { Application } from "express";

import AuthRouting from "@/Auth/AuthRouting";
import UserRouting from "@/Users/UserRouting";

const Routing = (app: Application) => {
  UserRouting(app);
  AuthRouting(app);
};

export default Routing;
