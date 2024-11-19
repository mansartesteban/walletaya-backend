import bcrypt from "bcryptjs";
import UserModel from "@/users/UserModel";
import Logger from "@/@core/Logger";
import jwt from "jsonwebtoken";
import { TUser } from "@/@types";
import InvalidCredentialsResponse from "./Errors/InvalidCredentialsResponse";
import UserAlreadyExistsResponse from "./Errors/UserAlreadyExistsResponse";

class AuthService {
  static async login(rawUser: TUser) {
    // Check if user is found (based on email)
    const user = (await UserModel.findOne({ email: rawUser.email })) as TUser;
    if (!user) {
      return new InvalidCredentialsResponse();
    }

    // Compare passwords
    const passwordMatch = await bcrypt.compare(rawUser.password, user.password);
    if (!passwordMatch) {
      return new InvalidCredentialsResponse();
    }

    // Generate JWT token
    const token = jwt.sign({ email: user.email }, "secret");
    return token;
  }

  static async register(user: TUser) {
    const foundUser = await UserModel.findOne({ email: user.email });
    if (foundUser) {
      return new UserAlreadyExistsResponse();
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(user.password, 10);

    // Create a new user
    const newUser = new UserModel({
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      password: hashedPassword,
    });
    Logger.log("newUser", newUser);
    // await newUser.save();
    return newUser;
  }
}

export default AuthService;
