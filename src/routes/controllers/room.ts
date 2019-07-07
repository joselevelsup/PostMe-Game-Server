import { Request, Response, Next } from "restify";
import { getMongoManager } from "typeorm";
import { PostMeRoom } from  "../../entity/PostMeRoom";
import { RoomType } from "../../utils";

const RoomManager = getMongoManager();

export const getAllPublicRooms = (req: Request, res: Response, next: Next) => {
	RoomManager.find(PostMeRoom, {
		roomType: RoomType.Public
	}).then(data => {
		res.status(200).json({
			"rooms": data
		});
	}).catch(err => {
		res.status(500).json({
			"rooms": []
		});
	});
}
