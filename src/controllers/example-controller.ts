import { Request, Response, Next } from "restify";

export const example = (req: Request, res: Response, next: Next) => {
	res.json({
		"hello": "world"
	});
}
