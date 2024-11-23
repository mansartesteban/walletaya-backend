import { NextFunction, Request, Response } from "express";
import LoginValidator from "./Validators/LoginValidator";
import RegisterValidator from "./Validators/RegisterValidator";

class AuthValidation {
  static LoginValidation(req: Request, res: Response, next: NextFunction) {
    let validator = new LoginValidator(req, res, next);
    validator.check();
  }
  static RegisterValidation(req: Request, res: Response, next: NextFunction) {
    let validator = new RegisterValidator(req, res, next);
    validator.check();
  }
}

export default AuthValidation;
