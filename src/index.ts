import bodyParser from "body-parser";
import express, { Application, Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import userRouter from "./routes/userRouter";
import supplierRouter from "./routes/supplierRouter";
import customerRouter from "./routes/customerRouter";

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
app.use("/api/users", userRouter);
app.use("/api/suppliers", supplierRouter);
app.use("/api/customers", customerRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} `);
});
