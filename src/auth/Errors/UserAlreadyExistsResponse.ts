import { Errors } from "@/@shared/Responses/ErrorList";
import ErrorResponse from "@/@shared/Responses/ErrorResponse";

class UserAlreadyExistsResponse extends ErrorResponse {
  constructor() {
    super(Errors.UserAlreadyExists);
  }
}

export default UserAlreadyExistsResponse;
