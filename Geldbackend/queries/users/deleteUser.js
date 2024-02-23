import fs from "fs";

const userDb = "/Users/23LP0080/Desktop/Geldbackend/models/users.json";

export const deleteUserByEmail = async (request, response) => {
  const { email: paramEmail } = request.params;
  try {
    
    return "deleted";
  } catch (error) {
    throw new Error("user does not exist");
  }
};

// const allUsersJson = await fs.readFileSync(userDb);
// const allUser = JSON.parse(allUsersJson);

// const exactUser = allUser.filter(({ email }) => email !== paramEmail);
// console.log(exactUser);
// await fs.writeFileSync(userDb, JSON.stringify(exactUser));
