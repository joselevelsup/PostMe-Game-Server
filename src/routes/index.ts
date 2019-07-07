import { Request, Response, Next } from "restify";

//Do not remove. IS NEEDED FOR REST OF SERVER
module.exports = {
	get: function (req: Request, res: Response, next: Next) {
		res.send("Hello world!")
		next();
	}
}
