import express from "express";
import cors from "cors";
import userRouter from "./routes/userRouter.js";

const app = express();

const port = 8000;

app.use(express.json());

app.use(cors());

app.use(userRouter);

app.listen(port, () => {
  console.log(`Server is running at localhost:${port}`);
});
