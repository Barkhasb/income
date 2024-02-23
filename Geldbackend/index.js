import express from "express";
import cors from "cors";
import userRouter from "./routes/userRouter.js";
import pg from "pg";

const CONNECTION_STRING =
  "postgresql://argunbarkhas:Qwl95NgYFvaU@ep-calm-cell-a1603vca.ap-southeast-1.aws.neon.tech/DB?sslmode=require";

const app = express();

app.use(express.json());

app.use(cors());

export const client = new pg.Client({
  connectionString: CONNECTION_STRING,
});

const dbInit = async () => {
  await client.connect();
  await createUserTable();
};
dbInit();

const createUserTable = async () => {
  const userTableCreateQuery = `CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY,
    username TEXT NOT NULL,
    email TEXT NOT NULL,
    password TEXT NOT NULL,
    age SMALLINT
  )`;

  await client.query(userTableCreateQuery);
};

app.use(userRouter);

app.listen(8000, () => {
  console.log("http://localhost:8000");
});
