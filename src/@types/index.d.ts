import { Request } from "express";
import { Interface } from "readline";

export type ValidationInformation = {
  isValid: boolean;
  data: any;
  details: {
    field: string;
    error: string;
    message: string;
  };
};

export type ValidationRule = (request: Request) => ValidationInformation;

export type TUser = {
  email: string;
  password: string;
  firstname?: string;
  lastname?: string;
};

export type TErrorResponse = {
  error_code: string;
  http_status: number;
  error_id: number;
  message: string;
};

export interface ValidatedRequest<T> extends Request {
  validatedData?: T;
}
