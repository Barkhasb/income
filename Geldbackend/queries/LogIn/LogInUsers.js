import fs from "fs";

import jwt from "jsonwebtoken";

const logInDb = "./models/users.json";

export const logInUser = async (req, res) => {
  const { email: paramEmail } = req.body;

  try {
    const user = await fs.readFileSync(logInDb, "utf-8");
    const users = JSON.parse(user);
    const exactUser = users.filter(({ email }) => email === paramEmail);

    const token = jwt.sign(
      { email: paramEmail },
      process.env.JWT_SECRET || "defaultSecret",
      {
        expiresIn: "1d",
      }
    );

    return { exactUser, token };
  } catch (err) {
    throw new Error(err.message);
  }
};
