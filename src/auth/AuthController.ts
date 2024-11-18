import { Request, Response } from "express";

import Logger from "../@core/Logger";
import AuthService from "./AuthService";
import { TUser, ValidatedRequest } from "@/@types";

class AuthController {
  static async LoginController(req: ValidatedRequest<TUser>, res: Response) {
    try {
      let token = await AuthService.login(req.validatedData);
      res.status(200).json({ token });
    } catch (error) {
      Logger.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  }

  static async RegisterController(req: ValidatedRequest<TUser>, res: Response) {
    try {
      let newUser = await AuthService.register(req.validatedData);
      res
        .status(201)
        .json({ message: "User registered successfully", user: newUser });
    } catch (error) {
      Logger.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
}

export default AuthController;
