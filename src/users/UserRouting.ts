import { Request, Response, Application } from "express";
import UserModel from "./UserModel";

export default (app: Application) => {
  // Get user
  app.get("/user/:id", async (req: Request, res: Response) => {
    let userFound = await UserModel.findById(req.params.id).exec();
    res.json(userFound);
  });

  // Create user (ONLY FOR DEV)
  app.post("/user", async (req, res) => {
    let user = new UserModel({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      mail: req.body.mail,
    });

    let savedUser = await user.save();
    res.json(savedUser);
  });

  // Get all users
  app.get("/users", async (req, res) => {
    let users = await UserModel.find({});
    res.json(users);
  });
};
