import { Application } from "express";

import AuthRouting from "@/auth/AuthRouting";
import UserRouting from "@/users/UserRouting";

const Routing = (app: Application) => {
  UserRouting(app);
  AuthRouting(app);
};

export default Routing;
