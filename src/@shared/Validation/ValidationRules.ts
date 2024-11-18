import { Request } from "express";
import { ValidationRule } from "@/@types";

const Form = {
  REQUIRED:
    (field: string, message: string): ValidationRule =>
    (request: Request) => {
      return {
        valid: !!request.body[field],
        data: request.body[field],
        details: {
          field,
          error: "FIELD_REQUIRED",
          message: message ?? "Le champ est requis",
        },
      };
    },
};

export default {
  Form,
};
