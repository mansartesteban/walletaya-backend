import ValidationRules from "@/@shared/Validation/ValidationRules";
import Validator from "@/@shared/Validation/Validator";
import { Request, Response, NextFunction } from "express";

class RegisterValidator<T> extends Validator<T> {
  constructor(req: Request, res: Response, next: NextFunction) {
    super(req, res, next);
  }

  check() {
    this.defineRules(
      ValidationRules.Form.REQUIRED("email", "L'adresse mail est requise"),
      ValidationRules.Form.REQUIRED("password", "Le mot de passe est requis"),
      ValidationRules.Form.REQUIRED("firstname", "Le mot de passe est requis"),
      ValidationRules.Form.REQUIRED("lastname", "Le mot de passe est requis")
    );
    this.validate("FORM_VALIDATION_ERROR");
  }
}

export default RegisterValidator;
