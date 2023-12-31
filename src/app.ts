import express from "express";
import bodyParser from 'body-parser'
import cookieParser from "cookie-parser";
import compression from 'compression'
import cors from 'cors'
import router from './routes/index'
import 'dotenv/config';
import morgan from "morgan";

const app = express();

app.use(cors({
  credentials: true
}));

app.use(morgan("dev"))
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
app.use('/', router)





export default app;
