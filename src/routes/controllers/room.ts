import { Request, Response, Next } from "restify";
import * as bcrypt from "bcrypt";
import { PostMeRoom, Room} from "../../models/PostMeRoom"
import { RoomType } from "../../utils";

export const getAllPublicRooms = (req: Request, res: Response, next: Next): void => {
	Room.find({
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
	Room.findOne({
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
	const { 
		roomNumber,
		roomType,
		passwordEnabled,
		password
	} = req.body;

	const newRoom = new Room({roomNumber, roomType, passwordEnabled});

	if(newRoom.passwordEnabled){
		newRoom.password = bcrypt.hashSync(password, 9);
	}

	newRoom.save().then((data: any) => {
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

export const deleteARoom = (req: Request, res: Response, next: Next): void => {
	Room.findOneAndDelete({
		roomNumber: req.params.roomId
	}).then((data: any) => {
		res.json(200, {
			"success": true
		});
	}).catch((err: any) => {
		res.json(500, {
			"success": false
		});
	});
}

export const addMember = (req: Request, res: Response, next: Next): void => {
	Room.findOneAndUpdate({
		roomNumber: req.params.roomId
	}, {
		$push: {
			members: [ req.body.userId ]
		}
	}).then((data: any) => {
		console.log(data);
		res.json(200, {
			"success": true
		})
	}).catch((err: any) => {
		res.json(500, {
			"success": false
		});
	});
}
