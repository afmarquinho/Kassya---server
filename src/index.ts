import bodyParser from "body-parser";
import express, { Application, Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import userRouter from "./routes/userRoutes";


dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());
app.use(helmet());
app.use("/api", userRouter)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} `);
});
