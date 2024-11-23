import ValidationRules from "@shared/Validation/ValidationRules";
import Validator from "@shared/Validation/Validator";
import { type Request, type Response, type NextFunction } from "express";

class LoginValidator<T> extends Validator<T> {
  constructor(req: Request, res: Response, next: NextFunction) {
    super(req, res, next);
  }

  rules() {
    return [
      ValidationRules.Form.REQUIRED("email", "L'adresse mail est requise"),
      ValidationRules.Form.REQUIRED("password", "Le mot de passe est requis"),
    ];
  }
}

export default LoginValidator;
