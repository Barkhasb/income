import fs from "fs";
import { makeHash } from "../../utils/password-hash.js";

const userDb = "./models/users.json";

export const createNewUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    if (!username || !email || !password) {
      throw new Error("Please fill all the fields");
    }

    const userHash = makeHash(password);

    const newUserFile = await fs.readFileSync(userDb, "utf-8");
    const data = JSON.parse(newUserFile);
    if (data.find((user) => user.email === email)) {
      throw new Error("User already exists");
    }
    data.push({
      username,
      email,
      password: userHash,
    });
    await fs.writeFileSync(userDb, JSON.stringify(data));
    return "success";
  } catch (error) {
    throw new Error(error.message);
  }
};
