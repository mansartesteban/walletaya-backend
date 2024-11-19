import { type Response } from "express";

import AuthService from "./AuthService";
import { type TUser, type ValidatedRequest } from "@/@types";
import Controller from "@/@shared/Controller";

class AuthController extends Controller {
  static async LoginController(req: ValidatedRequest<TUser>, res: Response) {
    super.process(req, res, AuthService.login(req.validatedData));
  }

  static async RegisterController(req: ValidatedRequest<TUser>, res: Response) {
    super.process(req, res, AuthService.register(req.validatedData));
  }
}

export default AuthController;
