import fs from "fs";
import { makeHash } from "../../utils/password-hash.js";
import { client } from "../../index.js";

const createUser = async (email, password, age, username) => {
  const userCreateQuery = `
  INSERT INTO users (username, email, password, age) VALUES ($1, $2, $3, $4) RETURNING id`;

  const userId = await client.query(userCreateQuery, [
    username,
    email,
    password,
    age,
  ]);

  return userId;
};

export const createNewUser = async (req, res) => {
  const { username, email, password, age } = req.body;

  try {
    if (!username || !email || !password) {
      throw new Error("Please fill all the fields");
    }
    const userHash = makeHash(password);

    const userId = await createUser(email, userHash, age, username);

    return userId;
  } catch (error) {
    throw new Error(error.message);
    // console.log(err);
  }
};
