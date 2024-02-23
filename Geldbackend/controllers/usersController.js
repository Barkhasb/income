import { getUserByEmail } from "../queries/users/getUser.js";
import { getUsers } from "../queries/users/getUsers.js";
import { deleteUserByEmail } from "../queries/users/deleteUser.js";
import { createNewUser } from "../queries/users/createUser.js";
import { updateUserByEmail } from "../queries/users/updateUser.js";
import { logInUser } from "../queries/LogIn/LogInUsers.js";

export const getUserByEmailService = async (req, res) => {
  try {
    const user = await getUserByEmail(req);
    res.send(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await getUsers(req);
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export const deleteUserByEmailService = async (req, res) => {
  try {
    const user = await deleteUserByEmail(req);
    res.status(200).send(user);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export const createNewUserService = async (req, res) => {
  try {
    const user = await createNewUser(req, res);
    res.send(JSON.stringify(user));
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export const updateUserByEmailService = async (req, res) => {
  try {
    const user = await updateUserByEmail(req);
    res.send(JSON.stringify(user));
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export const logInUserService = async (req, res) => {
  try {
    const user = await logInUser(req);
    res.send(user);
  } catch (err) {
    res.status(500).send(err.message);
  }
};
