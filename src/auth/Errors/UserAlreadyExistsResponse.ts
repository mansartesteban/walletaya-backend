import { Errors } from "@/@shared/Responses/ErrorList";
import ErrorResponse from "@/@shared/Responses/ErrorResponse";

class UserAlreadyExistsResponse extends ErrorResponse {
  constructor() {
    super(Errors.USER_ALREADY_EXISTS);
  }
}

export default UserAlreadyExistsResponse;
