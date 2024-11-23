import { type Response } from "express";

import UserService from "./UserService";
import { type TUser, type ValidatedRequest } from "@types";
import Controller from "@shared/Controller";

class UserController extends Controller {
  static async getUser(req: ValidatedRequest<TUser>, res: Response) {
    super.process(req, res, UserService.get);
  }
  //   static async LoginController(req: ValidatedRequest<TUser>, res: Response) {
  //     super.process(req, res, UserService.get(req.validatedData));
  //   }
  //   static async RegisterController(req: ValidatedRequest<TUser>, res: Response) {
  //     super.process(req, res, AuthService.register(req.validatedData));
  //   }
}

export default UserController;
