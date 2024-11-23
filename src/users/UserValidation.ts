import { NextFunction, Request, Response } from "express";
import UserGetValidator from "./Validators/UserGetValidator";

class UserValidation {
  static UserGetValidation(req: Request, res: Response, next: NextFunction) {
    let validator = new UserGetValidator(req, res, next);
    validator.check();
  }
}

export default UserValidation;
