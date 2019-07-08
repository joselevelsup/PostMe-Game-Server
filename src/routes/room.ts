import { Router } from "restify-router";
import { 
	getAllPublicRooms,
	createARoom,
	getOneRoom
} from "./controllers/room";

const roomRouter = new Router();

roomRouter.get("/room/public", getAllPublicRooms);

roomRouter.get("/room/:roomId", getOneRoom)

roomRouter.post("/room", createARoom);

export default roomRouter;

