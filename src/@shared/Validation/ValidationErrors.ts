import HttpStatus from "@/@core/HttpStatus";

const ValidationErrors = {
  DEFAULT: {
    httpStatus: HttpStatus.INTERNAL_SERVER_ERROR,
    code_num: 0x0000,
    message: "Unknown error",
  },
  FORM_VALIDATION_ERROR: {
    httpStatus: HttpStatus.UNPROCESSABLE_ENTITY,
    code_num: 0x0001,
    message: "Le formulaire contient des erreurs",
  },
};

export default ValidationErrors;
