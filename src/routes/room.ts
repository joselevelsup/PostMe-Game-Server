import { Router } from "restify-router";
import { 
	getAllPublicRooms,
	createARoom,
	getOneRoom,
	editRoom,
	deleteARoom
} from "./controllers/room";

const roomRouter = new Router();

roomRouter.get("/room/public", getAllPublicRooms);

roomRouter.get("/room/:roomId", getOneRoom)

roomRouter.post("/room", createARoom);

roomRouter.put("/room/:roomId", editRoom);

roomRouter.del("/room/:roomId", deleteARoom);

export default roomRouter;

