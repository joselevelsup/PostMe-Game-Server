import { Request, Response } from "restify";
import * as bcrypt from "bcrypt";
import { UserModel } from "../../models/User";

export const login = (req: Request, res: Response): void => {
	UserModel.findOne({
		username: req.body.username
	}).then((data: any) => {
		if(bcrypt.compareSync(req.body.password, data.password)){
			res.json(200, {
				"user": data,
				"token": 
			})
		} else {
			res.json(500, {
				"success": false,
				"message": "Username and/or Password do not match records"
			})
		}
	}).catch((err: any) => {
		res.json(500, {
			"success": false
		});
	});
}
