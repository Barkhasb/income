import fs from "fs";
import jwt from "jsonwebtoken";

export const tokenCheck = async (req, res, next) => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjEyMyIsImlhdCI6MTcwNzE5MjYxNiwiZXhwIjoxNzA3Mjc5MDE2fQ.hAlZnSVHuj1-4BWPVumCMwBM2c-iaCjqw3EWDP8bUDc";

  jwt.verify(token, "defaultSecret", (err, res) => {
    if (err) {
      console.log(err);
      res.status(401).send("provided token is invalid or expired");
    } else {
      console.log(res);
      next();
    }
  });
};
