import { Router } from "restify-router";
import {
	login,
	signup
} from "./controllers/auth";

const authRouter = new Router();

authRouter.post("/login", login);

authRouter.post("/signup", signup);

export default authRouter;
