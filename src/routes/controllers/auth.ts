import { Request, Response } from "restify";
import { User } from "../../entity/User";
import { getMongoManager } from 'typeorm';

export const login = (req: Request, res: Response): void => {
	const UserManager = getMongoManager();

}
