import { type Response, type Request } from "express";

import ErrorResponse from "@shared/Responses/ErrorResponse";
import Logger from "@core/Logger";
import { ValidatedRequest } from "@types";

class Controller {
  static async process<T>(
    req: ValidatedRequest<T>,
    res: Response,
    callback: Function
    // promise: Promise<T | ErrorResponse>
  ) {
    try {
      // let returnedDatasFromService = await promise;
      console.log("callbk", callback);
      let returnedDatasFromService = await callback(req.validatedData);
      if (returnedDatasFromService instanceof ErrorResponse) {
        res.status(returnedDatasFromService.httpStatus).json({
          ...returnedDatasFromService,
          status: "error",
        });
      } else {
        res.status(200).json(returnedDatasFromService);
      }
    } catch (error) {
      Logger.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
}

export default Controller;
