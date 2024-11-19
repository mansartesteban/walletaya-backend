import ImplementError from "@/@core/error-handler/ImplementError";
import MandatoryParameterError from "@/@core/error-handler/MandatoryParameterError";
import { NextFunction, Response } from "express";
import { ValidatedRequest, ValidationRule } from "@/@types";
import { Errors } from "../Responses/ErrorList";

class Validator<T> {
  request: ValidatedRequest<T> = null;
  response: Response = null;
  next: NextFunction = null;
  errors = [];

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

  rules(): ValidationRule[] {
    throw new ImplementError(
      "A class which extends 'Validator' must implement 'rules' method"
    );
  }

  validate(rules: ValidationRule[]) {
    let datas = {};
    for (let rule of rules) {
      let validation = rule(this.request);
      if (!validation.isValid) {
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
    this.validate(this.rules());
  }

  createResponse() {
    let error = Errors.FORM_VALIDATION_ERROR;

    let responsePayload = {
      ...error,
      errors: this.errors,
    };

    this.response.status(error.http_status).json({
      ...responsePayload,
      status: "error",
    });
  }
}

export default Validator;
