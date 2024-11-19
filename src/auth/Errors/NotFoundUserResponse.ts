import { Errors } from "@/@shared/Responses/ErrorList";
import ErrorResponse from "@/@shared/Responses/ErrorResponse";

class NotFoundUserResponse extends ErrorResponse {
  constructor() {
    super(Errors.NOT_FOUND_USER);
  }
}

export default NotFoundUserResponse;
