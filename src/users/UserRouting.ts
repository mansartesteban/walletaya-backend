import { Application } from "express";
import UserController from "./UserController";
import AuthService from "@/Auth/AuthService";
import UserValidation from "./UserValidation";

export default (app: Application) => {
  // Get user
  app.post(
    "/user/:id",
    AuthService.isAuthenticated,
    UserValidation.UserGetValidation,
    UserController.getUser
  );
};
