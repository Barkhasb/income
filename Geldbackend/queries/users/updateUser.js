import fs from "fs";
import { makeHash } from "../../utils/password-hash.js";

const userDb = "/Users/23LP0080/Desktop/Geldbackend/models/users.json";

export const updateUserByEmail = async (req, res) => {
  const {
    username,
    email: bodyEmail,
    password,
    followers,
    following,
    img,
  } = req.body;
  try {
    const userHash = makeHash(password);
    const allUsers = await fs.readFileSync(userDb, "utf-8");
    const users = JSON.parse(allUsers);

    const updateUser = users.find(({ email }) => email === bodyEmail);

    updateUser.username = username;
    updateUser.password = userHash;
    updateUser.followers = followers;
    updateUser.following = following;
    updateUser.img = img;

    await fs.writeFileSync(userDb, JSON.stringify(users));

    return "success";
  } catch (err) {
    throw new Error(err.message);
  }
};
