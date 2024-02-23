import fs from "fs";
import { compareHash } from "../utils/password-hash.js";

const userDb = "./models/users.json";

export const isAuthenticated = async (req, res, next) => {
  try {
    const user = await fs.readFileSync(userDb, "utf-8");
    const users = JSON.parse(user);

    const { email: paramEmail, password } = req.body;

    if (!paramEmail || !password) {
      res.send("invalid username or password");
    }

    const exactUser = users.find(({ email }) => email === paramEmail);

    const passwordCheck = compareHash(password, exactUser.password);

    if (!exactUser) {
      res.send("wrong username or password");
    }
    if (passwordCheck) {
      req.user = exactUser;
      next();
      return;
    }
    res.send("wrong username or password");
  } catch (err) {
    res.status(400).send(err.message);
  }
};
