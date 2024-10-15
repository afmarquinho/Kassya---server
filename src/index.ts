import bodyParser from "body-parser";
import express, { Application, Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";

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
app.get("/", (req:Request , res:Response) => {
    res.send("hello worlds")
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} `);
});
