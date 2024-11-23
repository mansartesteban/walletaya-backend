import UserModel from "@/Users/UserModel";
import { TUser } from "@types";
import NotFoundUserResponse from "@shared/Responses/Errors/NotFoundUserResponse";

class UserService {
  static async get(rawUser: TUser) {
    let userFound = await UserModel.findById(rawUser).exec();
    if (!userFound) {
      return new NotFoundUserResponse();
    }
    return userFound;
  }
}

export default UserService;
