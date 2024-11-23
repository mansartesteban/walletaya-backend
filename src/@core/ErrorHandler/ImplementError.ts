import HttpStatus from "@core/HttpStatus";

class ImplementError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ImplementError";
  }

  status() {
    return HttpStatus.INTERNAL_SERVER_ERROR;
  }
}

export default ImplementError;
