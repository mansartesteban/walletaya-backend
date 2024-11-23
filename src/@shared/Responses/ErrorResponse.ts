import { TErrorResponse } from "@types";

class ErrorResponse {
  error_code: string;
  error_id: number;
  httpStatus: number;
  message: string;

  constructor(error: TErrorResponse) {
    this.httpStatus = error.http_status;
    this.error_code = error.error_code;
    this.error_id = error.error_id;
    this.message = error.message;
  }
}

export default ErrorResponse;
