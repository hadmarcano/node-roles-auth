import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";

dotenv.config();
const app = express();

// middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(helmet());
app.use(cors());

// App listen

const port = 3000 || process.env.PORT;

app.listen(port, () => {
  console.log(`Server is listen on port ${port}`);
});
