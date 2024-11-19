import { Errors } from "@/@shared/Responses/ErrorList";
import ErrorResponse from "@/@shared/Responses/ErrorResponse";

class InvalidCredentialsResponse extends ErrorResponse {
  constructor() {
    super(Errors.INVALID_CREDENTIALS);
  }
}

export default InvalidCredentialsResponse;
