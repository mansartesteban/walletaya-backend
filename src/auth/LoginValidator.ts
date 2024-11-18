import ValidationRules from "@/@shared/Validation/ValidationRules";
import Validator from "@/@shared/Validation/Validator";
import { Request, Response, NextFunction } from "express";

class LoginValidator<T> extends Validator<T> {
  constructor(req: Request, res: Response, next: NextFunction) {
    super(req, res, next);
  }

  check() {
    this.defineRules(
      ValidationRules.Form.REQUIRED("email", "L'adresse mail est requise"),
      ValidationRules.Form.REQUIRED("password", "Le mot de passe est requis")
    );
    this.validate("FORM_VALIDATION_ERROR");
  }
}

export default LoginValidator;
