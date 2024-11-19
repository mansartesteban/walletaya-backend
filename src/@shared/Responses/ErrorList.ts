import HttpStatus from "@/@core/HttpStatus";
import { TErrorResponse } from "@/@types";

export const Errors: Record<string, TErrorResponse> = {
  UNKNOWN_ERROR: {
    error_code: "UNKNOWN_ERROR",
    http_status: HttpStatus.INTERNAL_SERVER_ERROR,
    error_id: 0x0000,
    message: "Unknown error",
  },
  FORM_VALIDATION_ERROR: {
    error_code: "FORM_VALIDATION_ERROR",
    http_status: HttpStatus.UNPROCESSABLE_ENTITY,
    error_id: 0x0001,
    message: "Le formulaire contient des erreurs",
  },
  INVALID_CREDENTIALS: {
    error_code: "INVALID_CREDENTIALS",
    error_id: 0x0002,
    http_status: HttpStatus.UNAUTHORIZED,
    message: "Identifiants incorrects",
  },
  NOT_FOUND_USER: {
    error_code: "NOT_FOUND_USER",
    error_id: 0x0003,
    http_status: HttpStatus.NOT_FOUND,
    message: "L'utilisateur n'existe pas",
  },
  USER_ALREADY_EXISTS: {
    error_code: "USER_ALREADY_EXISTS",
    error_id: 0x0004,
    http_status: HttpStatus.UNAUTHORIZED,
    message: "L'utilisateur existe déjà",
  },
};

export const getDefaultError = (): TErrorResponse => Errors.DEFAULT;
