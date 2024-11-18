import ImplementError from "@/@core/error-handler/ImplementError";
import MandatoryParameterError from "@/@core/error-handler/MandatoryParameterError";
import { getResponseInformations } from "./StatusCode";
import { NextFunction, Response } from "express";
import { ValidatedRequest, ValidationRule } from "@/@types";

class Validator<T> {
  request: ValidatedRequest<T> = null;
  response: Response = null;
  next: NextFunction = null;
  rules = [];
  errors = [];
  validationError = null;

  constructor(
    request: ValidatedRequest<T>,
    response: Response,
    next: NextFunction
  ) {
    if (!request) {
      throw new MandatoryParameterError(
        "A validator must have a 'request' parameter to handle"
      );
    }
    if (!response) {
      throw new MandatoryParameterError(
        "A validator must have a 'response' parameter to handle"
      );
    }
    if (!next) {
      throw new MandatoryParameterError(
        "A validator must have a 'next' parameter to handle"
      );
    }
    this.request = request;
    this.response = response;
    this.next = next;
  }

  defineRules(...rules: ValidationRule[]) {
    this.rules = [...this.rules, ...rules];
  }

  validate(validationError: string) {
    this.validationError = validationError;

    let datas = {};
    for (let rule of this.rules) {
      let validation = rule(this.request);
      if (!validation.valid) {
        this.errors.push(validation.details);
      } else {
        datas[validation.details.field] = validation.data;
      }
    }

    if (this.isNotValid()) {
      this.createResponse();
    } else {
      this.request.validatedData = datas as T;
      this.next();
    }
  }

  isNotValid() {
    return this.errors.length > 0;
  }

  check() {
    throw new ImplementError(
      "A class which extends 'Validator' must implement 'check' method"
    );
  }

  createResponse() {
    let informations = getResponseInformations(this.validationError);

    let responsePayload = {
      ...informations.response,
      errors: this.errors,
    };

    this.response.status(informations.httpStatus).json(responsePayload);
  }
}

export default Validator;
