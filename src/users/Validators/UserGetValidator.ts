import ValidationRules from "@shared/Validation/ValidationRules";
import Validator from "@shared/Validation/Validator";
import { Request, Response, NextFunction } from "express";

class UserGetValidator<T> extends Validator<T> {
  constructor(req: Request, res: Response, next: NextFunction) {
    super(req, res, next);
  }

  rules() {
    return [ValidationRules.Form.REQUIRED("id", "User")];
  }
}

export default UserGetValidator;
