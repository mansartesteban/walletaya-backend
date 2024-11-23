import HttpStatus from "@core/HttpStatus";

class MandatoryParameterError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "MandatoryParameterError";
  }

  status() {
    return HttpStatus.INTERNAL_SERVER_ERROR;
  }
}

export default MandatoryParameterError;
