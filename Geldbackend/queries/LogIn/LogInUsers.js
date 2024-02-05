import fs from "fs";

const logInDb = "./models/users.json";

export const logInUser = async (req, res) => {
  const { email: paramEmail } = req.body;

  try {
    const user = await fs.readFileSync(logInDb, "utf-8");
    const users = JSON.parse(user);
    const exactUser = users.filter(({ email }) => email === paramEmail);
    return exactUser;
  } catch (err) {
    throw new Error(err.message);
  }
};
