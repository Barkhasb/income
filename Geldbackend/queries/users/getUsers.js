import fs from "fs";

const userDb = "/Users/23LP0080/Desktop/Geld/Geldbackend/models/users.json";

export const getUsers = async (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync(userDb, "utf-8"));
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};
