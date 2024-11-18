import ValidationErrors from "./ValidationErrors";

const getStatus = (httpStatus = 500) => {
  if (httpStatus > 0 && httpStatus < 200) {
    return "information";
  }

  if (httpStatus >= 200 && httpStatus < 300) {
    return "success";
  }

  if (httpStatus >= 300 && httpStatus < 399) {
    return "redirection";
  }

  if (httpStatus >= 400 && httpStatus < 499) {
    return "client_error";
  }

  if (httpStatus >= 500 && httpStatus < 599) {
    return "server_error";
  }

  return "unknown_error";
};

export const getResponseInformations = (status) => {
  let foundStatus = ValidationErrors[status];

  if (!foundStatus) {
    foundStatus = ValidationErrors["DEFAULT"];
  }

  return {
    httpStatus: foundStatus.httpStatus,
    response: {
      status: getStatus(foundStatus.httpStatus), // The status of the response
      code: status, // The code of the status in Walletaya app
      code_num: foundStatus.code_num, // The code number of the status in Walletaya app
      message: foundStatus.message, // The human readable detailled message
    },
  };
};
