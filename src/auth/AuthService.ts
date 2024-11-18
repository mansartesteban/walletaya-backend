import bcrypt from "bcryptjs";
import UserModel from "@/users/UserModel";
import Logger from "@/@core/Logger";
import jwt from "jsonwebtoken";
import { TUser } from "@/@types";

class AuthService {
  static async login(rawUser: TUser) {
    const user = (await UserModel.findOne({ email: rawUser.email })) as TUser;
    // if (!user) {
    //   validator.error(res, LoginValidator.INVALID_CREDENTIALS);
    // }

    // Compare passwords
    const passwordMatch = await bcrypt.compare(rawUser.password, user.password);
    // if (!passwordMatch) {
    //   return res.status(401).json({ error: "Invalid credentials" });
    // }

    // Generate JWT token
    const token = jwt.sign({ email: user.email }, "secret");
    console.log("toekn", token);
    return token;
  }

  static async register(user: TUser) {
    const foundUser = await UserModel.findOne({ email: user.email });
    // if (foundUser) {
    //   return res.status(400).json({ error: "Email already exists" });
    // }

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
