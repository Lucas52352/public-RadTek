import express from "express";
import bodyParser from 'body-parser'
import cookieParser from "cookie-parser";
import compression from 'compression'
import cors from 'cors'
import router from './routes/index'
import { auth } from 'express-openid-connect';
import 'dotenv/config';
import { Request, Response } from "express";
import morgan from "morgan";


const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SECRET,
  baseURL: process.env.BASE_URL,
  clientID: process.env.CLIENT_ID,
  issuerBaseURL: process.env.ISSUER_BASE_URL
};

const app = express();

app.use(cors({
  credentials: true
}));

app.use(morgan("dev"))
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(auth(config));
app.use('/', router)
app.get('/', (req: Request, res: Response) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});




export default app;
