import { Application } from "express";
import AuthController from "./AuthController";
import AuthValidation from "./AuthValidation";

// https://medium.com/@ravipatel.it/building-a-secure-user-registration-and-login-api-with-express-js-mongodb-and-jwt-10b6f8f3741d

export default (app: Application) => {
  // Route to register a new user
  app.post(
    "/auth/register",
    // AuthService.isAuthenticated,
    AuthValidation.RegisterValidation,
    AuthController.RegisterController
  );

  // Route to authenticate and log in a user
  app.post(
    "/auth/login",
    AuthValidation.LoginValidation,
    AuthController.LoginController
  );
};
