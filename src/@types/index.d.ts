import { Request } from "express";
import { Interface } from "readline";
export type ValidationInformation = {
  valid: boolean;
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

export interface ValidatedRequest<T> extends Request {
  validatedData?: T;
}
