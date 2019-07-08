import { Request, Response, Next } from "restify";
import { getMongoManager } from "typeorm";
import { PostMeRoom } from  "../../entity/PostMeRoom";
import { RoomType } from "../../utils";

export const getAllPublicRooms = (req: Request, res: Response, next: Next): void => {
	const RoomManager = getMongoManager();
	RoomManager.find(PostMeRoom, {
		roomType: RoomType.Public
	}).then((data: any) => {
		res.json(200, {
			"rooms": data
		});
	}).catch((err: any) => {
		console.log(err);
		res.json(500, {
			"rooms": []
		});
	});
}

export const getOneRoom = (req: Request, res: Response, next: Next): void => {
	const RoomManager = getMongoManager();

	RoomManager.find(PostMeRoom, {
		roomNumber: req.params.roomId
	}).then((data: any) => {
		res.json(200, {
			room: data
		});
	}).catch((err: any) => {
		res.json(500, {
			error: err 
		});
	});
}

export const createARoom = (req: Request, res: Response, next: Next): void => {
	const RoomManager = getMongoManager();
	const { 
		roomNumber,
		roomType
	} = req.body;

	const newRoom = new PostMeRoom(roomNumber, roomType, []);

	RoomManager.save(newRoom).then((data: any) => {
		res.json(200, {
			"success": true
		});
	}).catch((err: any) => {
		res.json(500, {
			"success": false,
			"error": err
		});
	});
}
